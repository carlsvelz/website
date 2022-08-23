<script lang="ts">
  import { photos } from "$lib/contents/team";
  import { fly } from "svelte/transition";
  import SectionCommon from "../section-common.svelte";

  let sequence = [];
  let active = 0;
  let direction: "positive" | "negative" = "positive";

  for (let i = 0; i < photos.length; i += 2) {
    sequence.push(i);
  }
</script>

<style lang="postcss">
  .wrapper {
    & > * {
      @apply max-w-lg bg-white rounded-2xl;
    }

    h3 {
      @apply p-macro sm:p-micro md:p-xx-small;
    }
  }
</style>

<SectionCommon
  title="Life at Gitpod"
  text="Have a sneak peak behind the scene. This is how we work remotely."
  textClassNames="mb-small"
>
  <div slot="content">
    <div
      class="wrapper grid grid-cols-2 gap-x-macro sm:gap-x-micro md:gap-x-small max-w-[992px] mx-auto h-[320px] sm:h-[380px] md:h-[430px] lg:h-[533px]"
    >
      {#key active}
        <div
          class="stroked"
          in:fly={{
            delay: 0,
            duration: 800,
            x: direction === "positive" ? 100 : -100,
          }}
        >
          <img src={photos[active].src} alt={photos[active].alt} />
          <h3 class="h4">{photos[active].alt}</h3>
        </div>

        {#if photos[active + 1] !== undefined}
          <div
            class="stroked"
            in:fly={{
              delay: 5,
              duration: 800,
              x: direction === "positive" ? 100 : -100,
            }}
          >
            <img src={photos[active + 1].src} alt={photos[active + 1].alt} />
            <h3 class="h4">{photos[active + 1].alt}</h3>
          </div>
        {/if}
      {/key}
    </div>

    <div class="flex justify-center mt-small space-x-micro">
      {#each sequence as i}
        <button
          on:click={() => {
            if (i < active) {
              direction = "negative";
            } else {
              direction = "positive";
            }
            active = i;
          }}
          class="h-4 w-4 rounded-full {i === active
            ? 'bg-divider dark:bg-sand-dark'
            : 'bg-sand-dark dark:bg-divider'}"
        >
          &nbsp;
        </button>
      {/each}
    </div>
  </div>
</SectionCommon>
