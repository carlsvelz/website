---
section: self-hosted/latest
subsection: reference
title: Upgrade Guides and Breaking Changes
---

<script context="module">
  export const prerender = true;
</script>

# Upgrade Guides and Breaking Changes

This page informs you if there are specific considerations to take into account when upgrading to a specific version. If no breaking changes and thus specific recommendations when updating are mentioned here, please follow the normal upgrade procedure mentioned on the [Updating your Gitpod Installation](../latest/updating) page.

## 2022.07

### Setting the service type of the proxy component

You can now configure the service type of the proxy service in the installation UI (see image below) - you do not need to upload a `.yaml` file as a [config patch](./config-patches) anymore to configure this. However, having it in the config patch will still work until December.

![proxy service type UI](../../static/images/docs/self-hosted/proxy-service-type-ui.png)

### Setting the default workspace image and which image registries the default image can be pulled from

We've moved the configuration of the default workspace image and the default base image registry whitelist out of the experimental section of the [config-patch](../latest/config-patches) file. The latter was also renamed. Using them in the experimental section will still work for the time being (until approx. December 2022).

**Before:**

```yaml
experimental:
  webApp:
    server:
      defaultBaseImageRegistryWhitelist:
        - <allowed registries>
    workspaceDefaults:
      workspaceImage: <path to your default workspace image>
```

**After:**

```yaml
workspace:
  workspaceImage: <path to your default workspace image>
containerRegistry:
  privateBaseImageAllowList:
    - <allowed registries>
```
