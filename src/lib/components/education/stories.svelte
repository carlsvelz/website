<script lang="ts">
  import PostPreview from "../blog/post-preview.svelte";

  import SectionCommon from "../section-common.svelte";
  export let customers: any;
  export let title: string;
  export let text: string = "";
  export let id: string = "";

  let clazz = "";
  export { clazz as class };
</script>

<SectionCommon {title} {text} {$$restProps} {id}>
  <div
    slot="content"
    class="grid justify-center gap-xx-small mx-auto mt-small {clazz}"
  >
    {#each customers as { title, excerpt, image, slug, availability }}
      <PostPreview
        post={{
          title,
          excerpt,
          slug,
          image,
          teaserImage: image,
        }}
        availability={!(availability === "soon")}
        headlineOrder="h3"
        type="education"
        isMostRecent={true}
      />
    {/each}
  </div>
</SectionCommon>
