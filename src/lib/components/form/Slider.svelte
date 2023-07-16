<script lang="ts">
  import type { ComponentProps } from 'svelte'
  import type { HTMLInputAttributes } from 'svelte/elements'
  import Field from './Field.svelte'

  interface $$Props extends Omit<HTMLInputAttributes, 'value' | 'type' | 'min' | 'max'>, ComponentProps<Field> {
    label: string
    suffix?: string
    value: number
    min: number
    max: number
    log?: boolean
  }

  export let label: string
  export let suffix: string = ''
  export let value: number
  export let min: number
  export let max: number
  export let log: boolean = false

  let internal: number

  // https://stackoverflow.com/a/66980378/2425183
  const b = 1 / Math.log(max / min)
  const a = -b * Math.log(min)

  const from = (x: number) => (internal = log ? a + b * Math.log(x) : x)
  const to = (x: number) => (value = log ? Math.round(Math.E ** (-a / b + x / b)) : x)

  $: from(value)
  $: to(internal)
</script>

<Field {label}>
  <div
    class="flex gap-2 bg-accent px-2 py-1 rounded-none border-solid border-[0.075rem] text-base border-current w-full appearance-none outline-none {$$restProps[
      'class'
    ]}"
  >
    <input
      {...$$restProps}
      class="bg-transparent flex-1"
      type="range"
      bind:value={internal}
      min={log ? '0' : min}
      max={log ? '1' : max}
      step={log ? '0.0001' : $$restProps['step']}
    />
    <div class="w-0 border-r border-current" />
    <div class="copy-md">{value + suffix}</div>
  </div>
</Field>

<style>
  input::-moz-range-thumb,
  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1rem;
    height: 1rem;
    aspect-ratio: 1/1;
    background: currentColor;
    border-radius: 0;
    border: none;
    cursor: pointer;
    outline: none;
  }
</style>
