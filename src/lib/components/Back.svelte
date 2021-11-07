<script lang="ts">
  import { goto } from '$app/navigation'
  export let to: string | null = null

  $: go = () => {
    if (to) goto(to)
    else window.history.back()
  }
</script>

<div class="mono pointer pa1" on:click={go}>← back</div>

<style>
  div {
    position: fixed;
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
    background-color: var(--bg-color);
  }
</style>
