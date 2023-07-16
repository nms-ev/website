<script lang="ts">
  import { goto } from '$app/navigation'

  import Click from './Click.svelte'

  export let to: string | null = null

  $: go = () => {
    if (to) goto(to)
    else window.history.back()
  }
</script>

<div class="bg-accent fixed z-10 top-20 left-1/2 -translate-x-1/2">
  <Click class="mono-md p-2" on:click={go}>← back</Click>
</div>
