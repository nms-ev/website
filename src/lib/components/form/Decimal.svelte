<script lang="ts">
  import type { ComponentProps } from 'svelte'
  import TextInput from './TextInput.svelte'

  interface $$Props extends Omit<ComponentProps<TextInput>, 'value'> {
    value: number
    precision?: number
  }

  export let value: number
  export let precision = 2

  $: internal = value.toFixed(precision)

  let { label, error, ...inputProps } = $$restProps
</script>

<TextInput
  {...inputProps}
  type="number"
  step={1 / 10 ** precision}
  {error}
  {label}
  value={internal}
  on:change={() => {
    value = parseFloat(internal)
  }}
/>
