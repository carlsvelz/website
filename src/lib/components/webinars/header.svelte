<script>
  import Header from "../header.svelte";
  import Pill from "../pill.svelte";
  import Jetbrains from "../svgs/brands/jetbrains.svelte";
  import Calendar from "../svgs/webinars/calendar.svelte";
  import Clock from "../svgs/webinars/clock.svelte";
</script>

<Header
  title="Remote Development with IntelliJ & Gitpod"
  centered={false}
  textAlign="left"
  fullWidth={true}
>
  <Pill text="Webinar" class="mb-3" slot="top" />
  <div slot="content" class="text-large my-x-small">
    <div class="flex items-center mb-micro">
      <Calendar class="h-7 w-7 mr-micro" /> Past event
    </div>
    <div class="flex items-center">
      <Clock class="h-7 w-7 mr-micro" /> 60min
    </div>
    <p class="text-large my-x-small">
      Curious how the biggest tech companies are using remote development to
      speed up their development cycles? We’ll explore using Gitpod to enable
      Java development in the cloud with your local IntelliJ IDEA.
    </p>
    <div class="flex items-center">
      <h2 class="h5">Hosted by</h2>
      <img
        src="/images/gitpod-logo.svg"
        alt="Gitpod"
        class="h-9 w-9 mx-micro"
      />
      <Jetbrains isDark={true} notDarkWhenDark={true} class="h-9 w-9" />
    </div>
  </div>
</Header>
