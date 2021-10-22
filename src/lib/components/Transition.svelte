<script lang="ts">
  import { fly } from 'svelte/transition'
  import { cubicIn, cubicOut } from 'svelte/easing'

  const duration = 75
  const offset = 5
</script>

<div
  in:fly={{ duration, delay: duration, easing: cubicIn, x: offset }}
  out:fly={{ duration, easing: cubicOut, x: -offset }}
>
  <slot />
</div>
