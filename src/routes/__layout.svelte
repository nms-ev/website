<script lang="ts">
  import { onMount } from 'svelte'
  import { getLocaleFromNavigator, locale } from 'svelte-i18n'
  import dayjs from 'dayjs'
  import customParseFormat from 'dayjs/plugin/customParseFormat.js'
  dayjs.extend(customParseFormat)

  import Nav from '$lib/components/Nav.svelte'
  import { store as bgColor, colorToString } from '$lib/stores/bgColor'

  import 'tachyons/css/tachyons.css'
  import '../app.css'

  onMount(() => {
    locale.set(getLocaleFromNavigator())
  })
</script>

<svelte:head>
  <title>nms e.V.</title>
</svelte:head>

<Nav />
<main class="center">
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
    min-height: 100%;
    padding-top: var(--nav-height);
    padding-bottom: var(--nav-height);
  }
</style>
