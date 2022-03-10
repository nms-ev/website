<script lang="ts">
  import { store } from '$lib/stores/timestamp'
  import dayjs from 'dayjs'

  type Clocks = 'unix' | 'digital'

  let selected: Clocks = 'unix'
  let value = ''

  $: switch (selected) {
    case 'unix':
      value = (($store / 1000) | 0).toString()
      break
    case 'digital':
      value = dayjs($store).format('HH:mm:ss')
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

<div class="mono pointer" on:click={change}>
  {value}
</div>
