<script lang="ts">
  import dayjs from 'dayjs'
  import customParseFormat from 'dayjs/plugin/customParseFormat.js'
  import { onMount } from 'svelte'
  import { getLocaleFromNavigator, locale } from 'svelte-i18n'
  dayjs.extend(customParseFormat)

  import Content from '$lib/components/Content.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import Nav from '$lib/components/Nav.svelte'
  import { setColor, store as bgColor } from '$lib/stores/bgColor'
  import { init as initNames } from '$lib/stores/names'
  import 'tachyons/css/tachyons.css'
  import '../app.css'

  onMount(() => {
    locale.set(getLocaleFromNavigator())
    setColor($bgColor)

    initNames()
  })
</script>

<svelte:head>
  <title>nms e.V.</title>
</svelte:head>

<Nav />
<main>
  <Content>
    <slot />
  </Content>
  <Footer />
</main>

<style>
  :global(:root) {
    --max-width: 70rem;
    --content-width: 30rem;
    --line-size: 0.075rem;
    --transition: all ease-in-out 200ms;
  }

  main {
    padding-top: var(--nav-height);
    padding-bottom: var(--nav-height);
  }
</style>
