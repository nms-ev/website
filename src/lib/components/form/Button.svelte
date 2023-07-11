<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements'

  interface $$Props extends HTMLButtonAttributes {
    label: string
  }

  export let label: string
</script>

<button
  {...$$restProps}
  on:click
  class="{$$restProps[
    'class'
  ]} w-full border-[0.075rem] border-solid border-current p-2 font-medium disabled:cursor-not-allowed"
>
  {label}
</button>
