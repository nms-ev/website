<script lang="ts">
  import { onMount } from 'svelte'
  import rand from 'randomcolor'

  import 'tachyons/css/tachyons.css'
  import '../app.css'
  import Nav from '$lib/components/Nav.svelte'

  onMount(() => {
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
    --line-size: 0.075rem;
  }

  main {
    max-width: var(--max-width);
    padding-top: var(--nav-height);
  }
</style>
