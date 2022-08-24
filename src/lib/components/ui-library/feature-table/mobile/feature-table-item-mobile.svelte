<script lang="ts">
  import QaTooltip from "$lib/components/qa-tooltip.svelte";
  import Cross from "$lib/components/svgs/cross.svelte";
  export let definition: any;
</script>

{#if definition.list}
  <div class="flex flex-col justify-center px-8">
    <div class="font-bold  mb-2">{definition.term}</div>
    <ul class="list-disc list-outside text-left">
      {#each definition.list as item}
        <li>
          {@html item}
        </li>
      {/each}
    </ul>
  </div>
{:else}
  <div class="flex items-center flex-col justify-center">
    <div class="font-bold  mb-2">
      <div class="flex items-start">
        {#if definition.type === "tooltip"}
          <QaTooltip text={definition.term} tooltip={definition.data.tooltip} />
        {:else}
          <span
            class={definition.isHeadline
              ? "text-black dark:text-important font-semibold text-h4"
              : "text-[#565252] dark:text-important"}>{definition.term}</span
          >
        {/if}
      </div>
    </div>
    {#if definition.text}
      {@html definition.text}
    {/if}
    {#if definition.availability}
      <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
    {/if}

    {#if definition.availability === false}
      <Cross />
    {/if}
  </div>
{/if}
