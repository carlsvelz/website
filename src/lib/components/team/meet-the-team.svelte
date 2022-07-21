<script>
  import { teamImages } from "$lib/contents/team";
  import SectionCommon from "../section-common.svelte";
</script>

<SectionCommon
  title="Meet the team"
  text="During our regular offsites we get to build a deeper bond and simply celebrate an amazing team and a great product."
  textClassNames="max-w-3xl mx-auto"
>
  <div slot="content" class="grid grid-cols-3 gap-micro">
    {#each teamImages as { src, alt }}
      <img {src} {alt} class="object-cover" />
    {/each}
  </div>
</SectionCommon>
