<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import Header from "$lib/components/header.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import MeetTheTeam from "$lib/components/team/meet-the-team.svelte";
</script>

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
/>

<MeetTheTeam />
