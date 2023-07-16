<script lang="ts">
  import { getCodeList } from 'country-list'
  import type { ComponentProps } from 'svelte'
  import type { HTMLInputAttributes } from 'svelte/elements'
  import Field from './Field.svelte'

  interface $$Props extends HTMLInputAttributes, ComponentProps<Field> {
    value: string
  }

  export let value: string

  let { label, error, ...selectProps } = $$restProps
</script>

<Field {label} {error}>
  <select
    {...selectProps}
    class="bg-accent p-2 rounded-none border-solid border-[0.075rem] text-base border-current"
    bind:value
  >
    {#each Object.entries(getCodeList()) as [code, name]}
      <option value={code}>{name}</option>
    {/each}
  </select>
</Field>
