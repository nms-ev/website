<script lang="ts">
  import { onMount } from 'svelte'
  import rand from 'randomcolor'

  import 'tachyons/css/tachyons.css'
  import '../app.css'

  onMount(() => {
    const bg = rand({ luminosity: 'bright', alpha: 0.1, format: 'rgba' })
    window.document.body.style.backgroundColor = bg
  })
</script>

<svelte:head>
  <title>[uff] united fun fighters</title>
</svelte:head>

<slot />
