<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import CalloutSecondary from "$lib/components/callout-secondary.svelte";
  import Explore from "$lib/components/explore.svelte";

  import FeatureBox from "$lib/components/feature-box.svelte";
  import Header from "$lib/components/header.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Section from "$lib/components/section.svelte";
  import Speed from "$lib/components/svgs/coder/speed.svelte";
  import VmsContainer from "$lib/components/svgs/coder/vms-container.svelte";
  import FeatureTable from "$lib/components/ui-library/feature-table/feature-table.svelte";
  import LinkButton from "$lib/components/ui-library/link-button/link-button.svelte";
  import VerticalFeature from "$lib/components/vertical-feature.svelte";
  import FeatureBoxes from "$lib/components/vs/feature-boxes.svelte";
  import {
    availableAsSaaSSelfHostedFeature,
    comparison,
  } from "$lib/contents/coder";
</script>

<style lang="postcss">
  .combined :global(.feature-box) {
    @apply mb-x-small !important;
  }
</style>

<OpenGraph
  data={{
    description:
      "Why choose Gitpod over Coder? Gitpod is the faster, more resource-efficient, open-source alternative that integrates with your individual stack.",
    title: "Gitpod vs Coder - what makes Gitpod different?",
    keywords: "Coder, alternative, differences",
  }}
/>

<Header
  title="Gitpod vs Coder"
  text="Gitpod is the faster, more powerful productivity platform that integrates with your individual stack."
  tight={true}
  textClassNames="max-w-2xl text-large mx-auto"
>
  <LinkButton
    href="https://gitpod.io/workspaces"
    variant="primary"
    size="large"
    slot="content"
    class="mt-x-small">Try now</LinkButton
  >
</Header>

<FeatureBoxes>
  <FeatureBox
    feature={{
      title: "Ready in a flash",
      paragraph:
        "Gitpod removes long init and build times by continuously pre-building workspaces for your project. Start coding or debugging immediately, from any context, at any time.",
      secondaryButton: {
        href: "/blog/continuous-dev-environment-in-devops",
        text: "More about Continuous Dev Environments.",
      },
      previewComponent: Speed,
      footnote:
        'Compared start-up time until ready-to-code for <a href="https://github.com/gitpod-io/vscode">https://github.com/gitpod-io/vscode</a>. Last verified 27 July 2022.',
    }}
  />
  <FeatureBox
    feature={{
      title: "Ephemeral workspaces",
      paragraph:
        "Instead of Coder's long-lived stateful environments, say goodbye to configuration drift and embrace fresh, pre-configured, standardized workspaces for every new task.",
      lottie: {
        src: "/lottie/edit_workspace.json",
        id: "edit_workspace",
      },
    }}
  />
  <FeatureBox
    feature={{
      title: "Greater cost-efficiency",
      paragraph:
        "Instead of running on expensive VMs, Gitpod provisions secure containers and achieves best-in-class resource-efficiency with scalable workspaces running on shared high-powered cloud servers. <div><strong><br />Saves you money, helps our planet 🌱.</strong></div>",
      previewComponent: VmsContainer,
    }}
  />
</FeatureBoxes>

<Section>
  <h2 class="text-center mb-x-small md:mb-small">Compare features</h2>
  <FeatureTable
    tableData={comparison}
    footnote="Disclaimer: All data were last verified on July. 27, 2022. To report any incorrect or outdated information, please <a href='/contact/support'>contact us</a>."
  />
</Section>

<CalloutSecondary
  title="Ready to feel the difference?"
  text="Spin up an example workspace now, just link your git provider"
/>

<Section>
  <div class="combined">
    <FeatureBox feature={availableAsSaaSSelfHostedFeature} />
    <div
      class="flex flex-wrap lg:flex-nowrap justify-center gap-micro lg:gap-small max-w-7xl mx-auto"
    >
      <VerticalFeature
        verticalFeatureData={{
          title: "Enhanced IDE experience",
          paragraph:
            "Control your Gitpod experience with our custom VS Code and JetBrains Gateway extensions that integrate with your localhost environment, manage workspaces, and more",
        }}
        fullWidth={true}
      >
        <LinkButton
          href="https://gitpod.io"
          variant="primary"
          slot="content"
          class="mt-x-small"
        >
          Try now
        </LinkButton>
      </VerticalFeature>
      <VerticalFeature
        verticalFeatureData={{
          title: "Code in a carbon-neutral workspace",
          paragraph:
            "Not only is Gitpod more resource-efficient but it also runs on 100% carbon-neutral cloud servers (GCP). All the power, with a lower cost to our planet.",
        }}
        fullWidth={true}
      >
        <LinkButton
          href="https://cloud.google.com/sustainability"
          variant="secondary"
          slot="content"
          class="mt-x-small"
        >
          More on GCP carbon neutral
        </LinkButton>
      </VerticalFeature>
    </div>
  </div>
</Section>

<Explore />
