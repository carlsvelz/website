<script lang="ts">
  let className: string = "";
  export { className as class };
</script>

<style lang="postcss">
  div {
    @apply sm:flex sm:justify-between;

    & > :global(*) {
      flex: 0 0 46%;
      @apply mt-x-small sm:mt-0;
    }
  }
</style>

<div>
  <slot />
</div>
