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
    {...inputProps}
    class="bg-[var(--bg-color)] py-0.5 rounded-none border-solid border-b-[0.075rem] text-base border-current"
    bind:value
  />
</Field>
