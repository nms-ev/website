<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements'
  import Icon from '../Icon.svelte'

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
  ]} w-full border-[0.075rem] border-solid border-current p-2 copy-md-strong disabled:cursor-not-allowed"
>
  <div class="flex gap-1 items-center">
    <Icon name="arrow_right" />
    {label}
  </div>
</button>
