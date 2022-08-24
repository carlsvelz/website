<script lang="ts">
  import { goto } from "$app/navigation";
  import MobileMenu from "./mobile-menu/index.svelte";
  import MobileMenuToggle from "./mobile-menu/toggle.svelte";
  import NavItem from "./nav-item.svelte";
  import menuState from "./mobile-menu/state";
  import LoginButton from "./login-button.svelte";
  import DemoButton from "./demo-button.svelte";
  import DashboardButton from "./dashboard-button.svelte";
  import Logo from "../svgs/logo.svelte";
  import { showHideOverflowY } from "$lib/utils/helpers";
  import SignUpButtonTablet from "./sign-up-button-tablet.svelte";
  import AnnouncementBanner from "$lib/components/banners/announcement.svelte";
  import SkipToContent from "../skip-to-content.svelte";
  import GithubStars from "./github-stars.svelte";

  import Dropdown from "./dropdown.svelte";
  // import { session } from "$app/stores";

  let scroll: number;

  // const isLoggedIn = $session.loggedIn;
  const isLoggedIn =
    typeof document === "undefined"
      ? false
      : !!document.cookie.match("gitpod-user=loggedIn") ||
        !!document.cookie.match("gitpod-user=true");
</script>

<style lang="postcss">
  nav {
    transition: border-color 0.2s linear;
  }

  .nav-items {
    @apply transition-opacity duration-200 ease-linear;
  }

  .bg-open-state {
    @apply bg-card !important;
  }

  .wrapper {
    max-width: 1500px;
    @apply h-14;
  }

  .scrolled-out {
    @apply border-divider bg-nav;
    backdrop-filter: saturate(0.5) blur(5px);
  }

  @media (min-width: 1190px) {
    .wrapper {
      @apply h-20;
    }

    .nav-items,
    .login-wrapper {
      @apply flex;
    }
  }

  button {
    @apply outline-none py-2;

    @media (min-width: 1190px) {
      @apply py-1;
    }
  }

  button::-moz-focus-inner {
    @apply border-0;
  }

  .stars {
    @media (min-width: 1190px) {
      @apply hidden;
    }
  }
</style>

<svelte:window bind:scrollY={scroll} />
<!-- Intersection observer target to trigger the strike through animation. -->
<div id="choose-project-observer-target-top" />
<nav
  class="fixed z-40 mx-auto w-full border-b border-solid border-transparent border-t-0"
  class:scrolled-out={scroll > 0}
  class:bg-open-state={$menuState}
>
  <SkipToContent />
  <AnnouncementBanner />
  <div
    class="wrapper flex items-center justify-between mx-auto h-16 md:h-20 px-micro md:px-x-small"
  >
    <button
      on:contextmenu|preventDefault={() => goto("/media-kit")}
      aria-label="Home"
      on:click={() => {
        $menuState = !menuState;
        showHideOverflowY(false);
        goto("/");
      }}
    >
      <Logo class="h-8 w-28 lgx:h-10 lgx:w-32" />
    </button>
    <div
      class="nav-items mx-auto hidden px-2 space-x-6 items-center md:space-x-12"
    >
      <NavItem
        navItem={{
          href: "/docs",
          label: "Docs",
        }}
      />
      <Dropdown />
      <NavItem
        navItem={{
          href: "/for/enterprise",
          label: "Enterprise",
        }}
      />
      <NavItem
        navItem={{
          href: "/customers",
          label: "Customers",
          highlight: true,
        }}
      />
      <NavItem
        navItem={{
          href: "/pricing",
          label: "Pricing",
        }}
      />
    </div>
    <div class="login-wrapper items-center hidden space-x-x-small">
      <GithubStars />
      {#if isLoggedIn}
        <DashboardButton />
      {:else}
        <LoginButton />
        <DemoButton />
      {/if}
    </div>
    <div class="flex items-center space-x-micro">
      <div class="stars">
        <GithubStars />
      </div>
      {#if !$menuState && !isLoggedIn}
        <SignUpButtonTablet />
      {/if}
      <MobileMenuToggle />
    </div>
  </div>
  <MobileMenu {isLoggedIn} />
</nav>
