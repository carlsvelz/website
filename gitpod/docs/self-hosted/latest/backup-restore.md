---
section: self-hosted/latest
subsection: operational-guides
title: How to backup and restore Gitpod
---

<script context="module">
  export const prerender = true;
</script>

# How to Backup and Restore Gitpod

For [business continuity](https://en.wikipedia.org/wiki/Business_continuity_planning) purposes, it is important to think about how you might restore your ability to use Gitpod, and thus develop software in the event of a catastrophic failure of Gitpod or the underlying infrastructure it runs on. This guide assumes that you will use the backup and restore strategy for disaster recovery and will guide you towards what needs to be backed up and how to restore using said backup. Please see our background reading on [disaster recovery](./disaster-recovery) for more information.

> **Important:** When using Gitpod in a production setting, we recommend you base your installation on the [single cluster reference architecture](./reference-architecture/single-cluster-ref-arch). Using in-cluster dependencies is not recommended because there is no means to produce backups, and the database/storages systems are within failure domain of the cluster. If possible consider using Gitpod [SaaS](https://www.gitpod.io/pricing).

> **Note:** We recommend to regularly trial run a recovery using this method to ensure that it works in practice and to allow yourself the chance to spot any unforeseen issues.

## What to back up

It is critical to consider what needs to be backed up and ensure you take the necessary steps to secure each of the listed elements. What needs to be backed up is closely aligned with [Gitpod’s architecture](./reference-architecture/single-cluster-ref-arch#overview) and how it runs.

### Database

The database is a central component in Gitpod where all metadata about users and workspaces, as well as settings of the Gitpod instance (such as auth providers) are stored. This makes the database a critical component. In case of a database outage, you are not able to log in, use the Gitpod dashboard, or start workspaces. We recommend using a cloud provider native relational database service that supports MySQL - see [required components](./required-components). This means that you can rely on the best practices of each service for disaster recovery. For example:

- **AWS Relational Database Service**: You can rely on RDS’s [backup and restore mechanisms](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_CommonTasks.BackupRestore.html) and set it up to run in [multiple availability zones](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/create-multi-az-db-cluster.html) to allow for higher availability. You can also consider other [disaster best practices](https://medium.com/tensult/amazon-rds-disaster-recovery-8a40dd8350ea).
- **Google Cloud SQL:** You can rely on Cloud SQLs [backup and restore features](https://cloud.google.com/sql/docs/mysql/backup-recovery/backups) and run the instance in a [high availability configuration](https://cloud.google.com/sql/docs/mysql/high-availability) to decrease the chance of failure. You can also refer to the general [Google Cloud disaster recovery best practices](https://cloud.google.com/architecture/dr-scenarios-planning-guide).

### Object Storage

Gitpod uses **object storage** to store blob data. This includes workspace backups created when a workspace stops and are used to restore the state upon restart. As such, to secure the work of your users, it is critical to think about backing up this data and/or relying on the best practices for disaster recovery of the object storage service being used. For example:

- **AWS S3:** You can consider using [cross-region replication](https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html) to increase reliability further - although S3 already stores your data across multiple geographically distant _Availability Zones_ by default.
- **Google Cloud Storage:** Consider using the [Multi-Regional Storage option](https://cloud.google.com/storage/docs/storage-classes) for additional availability.

### OCI Image Registry

Gitpod uses an image registry to cache images and store images it builds on behalf of users. _Note: For non-airgapped environments, this is **not** the registry that contains the images of Gitpod’s services._ As such, losing this data means that workspace starts may take longer because images need to be re-built. Consider implementing best practices for securing the registry you are using.

### Application Config

Although you could simply re-install Gitpod using the regular [installation path](./getting-started), this can take some time and you would need to re-configure it to the state you had last had it in. To minimize your recovery time, you can persist the application configuration (ideally regularly).

Run the following to get the current config values and store them in a `config.yml` file of your Gitpod installation. Note that you need to define the namespace you are using - here we using the default of `gitpod`:

```bash
kubectl kots get config --namespace gitpod --appslug gitpod > config.yaml
```

Now get the current version label of the installed gitpod Version:

```bash
kubectl kots get app gitpod --namespace gitpod -o json
```

This gives you something like this:

```json
[
  {
    "slug": "gitpod",
    "state": "ready",
    "versionlabel": "2022.6.0"
  }
]
```

You will need your version when restoring. See the [how to restore](backup-restore#how-to-restore) section for instructions.

### Cluster Configuration

To reduce the time it takes you to re-create a cluster, you can move to an infrastructure as code flow, e.g. by codifying the infrastructure you need using Terraform.

## How to restore

The following explains how you might restore Gitpod after its underlying cluster fails.

1. Recreate your infrastructure. Ideally, you do this using something like a Terraform script.
2. Re-install Gitpod, ideally using the config file that you stored using the instructions [above](./backup-restore#application-config). Then you run the following command to restore Gitpod to the previous state after inserting the necessary variables:

   ```bash
   kubectl kots install gitpod \
           --app-version-label=<versionlabel>
   	      --namespace <namespace> \
           --name gitpod \
           --shared-password <admin-console-password> \
         	--license-file license.yaml \
           --no-port-forward \
           --config-values config.yaml
   ```

3. This should result in your Gitpod instance having the same state as before, thus allowing your users to pick up where they left off.
