<script lang="ts">
  import ArrowRight from '$lib/icons/ArrowRight.svelte'
  import Date from '$lib/icons/Date.svelte'
  import Github from '$lib/icons/Github.svelte'
  import Instagram from '$lib/icons/Instagram.svelte'
  import Location from '$lib/icons/Location.svelte'
  import Logo from '$lib/icons/Logo.svelte'
  import Menu from '$lib/icons/Menu.svelte'
  import Progress from '$lib/icons/Progress.svelte'
  import Telegram from '$lib/icons/Telegram.svelte'
  import Type from '$lib/icons/Type.svelte'

  const icons = {
    menu: Menu,
    logo: Logo,
    date: Date,
    arrow_right: ArrowRight,
    location: Location,
    type: Type,
    progress: Progress,
    instagram: Instagram,
    github: Github,
    telegram: Telegram,
  }

  export let name: keyof typeof icons
  export let inline: boolean = false
</script>

<span class:inline>
  <svelte:component this={icons[name]} />
</span>

<style>
  span :global(svg) {
    height: 1em;
    width: 1em;
    fill: currentColor;
  }

  span.inline :global(svg) {
    height: 0.9em;
    width: 0.9em;
    transform: translateY(-10%);
    display: inline;
  }
</style>
