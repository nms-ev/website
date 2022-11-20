<script lang="ts">
  import { formatDate } from '$lib/locale'

  export let date: string
</script>

<div class="mt-8" />
<hr />
<p class="mono text-sm text-center">
  Updated: {$formatDate(date)}
</p>
