<script lang="ts">
  import { onMount } from 'svelte'
  import rand from 'randomcolor'
  import { getLocaleFromNavigator, locale } from 'svelte-i18n'
  import dayjs from 'dayjs'
  import customParseFormat from 'dayjs/plugin/customParseFormat.js'
  dayjs.extend(customParseFormat)

  import Nav from '$lib/components/Nav.svelte'

  import 'tachyons/css/tachyons.css'
  import '../app.css'

  onMount(() => {
    locale.set(getLocaleFromNavigator())
    const bg = rand({ luminosity: 'bright', alpha: 0.05, format: 'rgba' })
    window.document.body.style.backgroundColor = bg
  })
</script>

<svelte:head>
  <title>nms e.V.</title>
</svelte:head>

<Nav />
<main class="h-100 center">
  <slot />
</main>

<style>
  :global(:root) {
    --max-width: 70rem;
    --content-width: 30rem;
    --line-size: 0.075rem;
    --transition: all ease-in-out 200ms;
  }

  main {
    max-width: var(--max-width);
    padding-top: var(--nav-height);
  }
</style>
