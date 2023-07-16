<script lang="ts">
  import type { ComponentProps } from 'svelte'
  import type { HTMLInputAttributes } from 'svelte/elements'
  import Field from './Field.svelte'

  interface $$Props extends HTMLInputAttributes, ComponentProps<Field> {
    value: string
  }

  export let value: string

  $: ({ label, error, ...inputProps } = $$restProps)
</script>

<Field {label} {error}>
  <input
    on:change
    {...inputProps}
    class="bg-accent p-2 rounded-none border-solid border-[0.075rem] copy-md border-current"
    bind:value
  />
</Field>
