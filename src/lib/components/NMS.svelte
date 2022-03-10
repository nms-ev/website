<script lang="ts">
  import { randomName } from '$lib/stores/names'

  import ColorText from './ColorText.svelte'
</script>

{#if $randomName}
  <span>
    <ColorText text="[{$randomName}]" />
  </span>
{/if}

<style>
  span {
    text-transform: lowercase;
  }
</style>
