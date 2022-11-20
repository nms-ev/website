<script lang="ts">
  import { store } from '$lib/stores/timestamp'
  import { DJS } from '$lib/time'
  import Click from './Click.svelte'

  type Clocks = 'unix' | 'digital'

  let selected: Clocks = 'unix'
  let value = ''

  $: switch (selected) {
    case 'unix':
      value = (($store / 1000) | 0).toString()
      break
    case 'digital':
      value = DJS($store).format('HH:mm:ss')
      break
  }

  const mapping: Record<Clocks, Clocks> = {
    unix: 'digital',
    digital: 'unix',
  }

  function change() {
    selected = mapping[selected]
  }
</script>

<Click class="mono" on:click={change}>
  {value}
</Click>
