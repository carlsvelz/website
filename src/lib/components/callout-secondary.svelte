<script lang="ts">
  import Section from "./section.svelte";
  import LinkButton from "./ui-library/link-button";
  export let title: string;
  export let text: string;
  export let link: { href: string; text: string } = {
    href: "https://gitpod.io/workspaces/",
    text: "Try now",
  };
</script>

<Section class="text-center">
  <h2>{title}</h2>
  <p class="text-large mb-x-small max-w-4xl mx-auto">
    {@html text}
  </p>
  <LinkButton variant="primary" size="large" href={link.href}>
    {link.text}
  </LinkButton>
  <slot name="image" />
  <slot name="image-mobile" />
</Section>
