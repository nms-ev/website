<script lang="ts">
  import { formatDate } from '$lib/locale'

  export let date: string
</script>

<div class="mt4" />
<hr />
<p class="mono center f6 tc">
  Updated: {$formatDate(date)}
</p>
