<script lang="ts">
  import type { Image } from "$lib/types/image.type";
  export let image: Image;
  const { src, darkSrc, alt, styles } = image;
</script>

<img {src} {alt} style={styles} class="{image.class} dark:hidden" />

<img
  src={darkSrc}
  {alt}
  style={styles}
  class="{image.class} hidden dark:block"
/>
