<script context="module">
  export const prerender = true;
</script>

<script>
  import Cta from "$lib/components/support/cta.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import { cards } from "$lib/contents/support";
  import Resources from "$lib/components/resources.svelte";
  import SectionCommon from "$lib/components/section-common.svelte";
  import Header from "$lib/components/header.svelte";
  import Search from "$lib/components/docs/search.svelte";
  import Articles from "$lib/components/articles.svelte";
</script>

<OpenGraph
  data={{
    description:
      "Browse our collection of helpful articles, videos, guides and tutorials and find answers to your questions quickly. Or contact our team for individual support requests.",
    title: "Gitpod Support - We’re here to help",
    keywords: "help, support, question, contact, customer service",
  }}
/>

<Header title="Need help?">
  <Search
    slot="content"
    placeholder="Search Documentation"
    class="text-left py-7 sm:pl-medium h-14"
    containerClasses="roun max-w-lg mx-auto rounded-xl shadow-normal"
    iconClasses="h-6 w-6 left-4 sm:left-5"
    isBgWhite={true}
  />
</Header>
<Cta />
<SectionCommon title="Helpful Resources">
  <Resources {cards} slot="content" />
</SectionCommon>

<Articles
  title="Popular articles"
  slugs={[
    "i-said-goodbye-to-local-development-and-so-can-you",
    "local-app",
    "continuous-dev-environment-in-devops",
  ]}
/>
