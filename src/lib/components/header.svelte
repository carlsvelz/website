<script lang="ts">
  export let title: string = "";
  export let text: string = "";
  export let tight: boolean = false;
  export let centered: boolean = true;
  export let textClassNames: string = "text-large";
  export let textAlign: "left" | "center" = "center";
  export let fullWidth: boolean = false;

  let clazz = "";
  export { clazz as class };
</script>

<style lang="postcss">
  .tight {
    @apply mb-small;
  }

  .h1 {
    @apply mb-micro md:mb-xx-small;
  }
  .centered {
    @apply mx-auto;
  }
</style>

<header
  class:centered
  class="relative mt-small mb-x-large md:my-x-large lgx:px-0 {clazz}"
  class:tight
  class:text-center={textAlign === "center"}
  class:max-w-4xl={!fullWidth}
  {...$$restProps}
>
  <slot name="top" />
  {#if title}
    <h1 class="h1">{title}</h1>
  {/if}
  {#if text}
    <p class={textClassNames}>{@html text}</p>
  {/if}
  <slot name="content" />
</header>
