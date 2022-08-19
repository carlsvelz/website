<script lang="ts">
  import {
    compatibilityMatrix,
    filterMatrixByRelevance,
  } from "$lib/contents/docs/compatibility-matrix";
  import type { Matrix } from "$lib/types/matrix.type";
  import No from "../svgs/no.svelte";
  import Untested from "../svgs/untested.svelte";
  import Yes from "../svgs/yes.svelte";
  import Tooltip from "../tooltip.svelte";
  import Select from "../ui-library/select/select.svelte";

  let matrixToRender: Matrix[] = compatibilityMatrix;

  const handleChange = (e: Event) => {
    const relevance = (e.target as any).value.toLowerCase();
    matrixToRender = filterMatrixByRelevance(relevance);
  };
</script>

<style lang="postcss">
  .wrapper {
    --col-1: 143px;
    --col-2: 178px;
    --col-3: 100px;
    --col-4: 173px;
    --col-5: 196px;
  }

  .wrapper > * {
    min-width: calc(
      var(--col-1) + var(--col-2) + var(--col-3) + var(--col-4) + var(--col-5)
    );
  }

  header {
    & > * {
      @apply px-xx-small py-3;

      &:nth-child(1) {
        flex: 0 0 var(--col-1);
        @apply border-r border-divider;
      }

      &:nth-child(2) {
        flex: 0 0 var(--col-2);
      }

      &:nth-child(3) {
        flex: 0 0 var(--col-3);
      }

      &:nth-child(4) {
        flex: 0 0 var(--col-4);
      }

      &:nth-child(5) {
        flex: 0 0 var(--col-5);
      }
    }
  }

  .body {
    & > * {
      &:first-child {
        flex: 0 0 var(--col-1);
        tranfrom: scale(10);
      }

      &:last-child {
        flex: 1;
      }
    }
  }

  .row {
    & > * {
      &:nth-child(1) {
        flex: 0 0 var(--col-2);
      }

      &:nth-child(2) {
        flex: 0 0 var(--col-3);
      }

      &:nth-child(3) {
        flex: 0 0 var(--col-4);
      }

      &:nth-child(4) {
        flex: 0 0 var(--col-5);
      }
    }
  }

  .bg {
    @apply bg-card;
  }

  .bg:nth-of-type(even),
  header {
    @apply bg-sand-dark;
  }

  :global(body.dark) {
    .bg:nth-of-type(even),
    header {
      background: rgba(0, 0, 0, 0.4);
    }
  }

  .relelvant > :global(*) {
    &:first-child {
      flex: 0 0 100px;
    }
  }

  .status {
    p {
      @apply flex items-center my-0 text-xs;
    }
  }
</style>

<div
  class="flex flex-wrap gap-micro justify-center xl:justify-between mt-x-small mb-3"
>
  <div class="relelvant flex items-center justify-between w-72">
    <!-- Todo fix the the arrow size -->
    <Select
      label="Relevant for"
      value="All"
      name="for"
      options={["All", "Admins", "Users"]}
      class="flex"
      labelClassNames="font-bold text-important text-medium mr-micro mb-0"
      style="padding: 4px 40px 4px var(--micro)"
      on:change={handleChange}
    />
  </div>

  <div class="flex flex-wrap  justify-center status gap-3 sm:gap-micro">
    <p>
      <No class="mr-1 sm:mr-3 h-6 w-6" />
      not supported
    </p>
    <p>
      <Untested class="mr-1 sm:mr-3 h-6 w-6" />
      untested
    </p>
    <p>
      <Yes class="mr-1 sm:mr-3 h-6 w-6" />
      not supported
    </p>
  </div>
</div>

<div
  class="wrapper relative bg text-small divide-y divide-divider bg-card rounded-t-2xl overflow-x-auto"
>
  <header class="flex font-bold rounded-t-2xl">
    <div>Category</div>
    <div>Component</div>
    <div>Status</div>
    <div>Support Policy</div>
    <div>Supported Versions</div>
  </header>
  {#each matrixToRender as { name, components }}
    <div class="body flex bg">
      <div class="pl-xx-small flex items-center border-r border-divider">
        {name}
      </div>
      <div class="divide-y divide-divider">
        {#each components as { name, availibility, policy, supportedVersions }}
          <div class="flex row py-3">
            <div class="pl-xx-small">{name}</div>
            <div class="flex justify-center">
              {#if availibility === "supported"}
                <Yes />
              {:else if availibility === "not-supported"}
                <No />
              {:else}
                <Untested />
              {/if}
            </div>
            <div class="px-xx-small">
              {policy.text}
              {#if policy.description}
                <Tooltip title={policy.description} />
              {/if}
            </div>
            <div class="px-xx-small">
              {supportedVersions}
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>
