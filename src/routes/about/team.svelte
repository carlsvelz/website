<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import Explore from "$lib/components/explore.svelte";
  import FeatureTitles from "$lib/components/feature-titles.svelte";
  import Header from "$lib/components/header.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Celebrate from "$lib/components/team/celebrate.svelte";
  import CoreValues from "$lib/components/team/core-values.svelte";
  import Join from "$lib/components/team/join.svelte";
  import LifeAtGitpod from "$lib/components/team/life-at-gitpod.svelte";
  import MeetTheTeam from "$lib/components/team/meet-the-team.svelte";
  import Offsite from "$lib/components/team/offsite.svelte";
  import { featureTitles } from "$lib/contents/team";
</script>

<style lang="postcss">
  iframe {
    @apply w-full max-w-5xl h-[300px] sm:h-[400px] md:h-[580px] xl:h-[630px] 2xl:h-[660px];
  }
</style>

<OpenGraph
  data={{
    title: "",
    description: "",
    keywords: "",
  }}
/>

<Header
  title="We’re the people behind Gitpod"
  text="Gitpod was founded in Germany. Now, it's fully remote and distributed across the globe."
  class="!max-w-none"
>
  <iframe
    title="World Map of where different people working at Gitpod are located."
    slot="content"
    src="https://datastudio.google.com/embed/reporting/4082b7be-0033-437f-9925-4ed2fb6f80a0/page/NaupC"
    frameborder="0"
    style="border:0"
    allowfullscreen
    class="mx-auto mt-x-small md:mt-small"
  />
</Header>

<FeatureTitles {featureTitles} swap={true} />

<MeetTheTeam />

<CoreValues />

<Offsite />

<Celebrate />

<LifeAtGitpod />

<Join />

<Explore
  contents={{
    title: "We're hiring",
    description:
      "Help us shape Gitpod’s future from anywhere in the world. Come join us!",
    link: {
      text: "See open positions",
      href: "https://www.gitpod.io/careers",
    },
    secondaryLink: null,
  }}
/>
