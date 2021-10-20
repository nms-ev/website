<script lang="ts">
  import ColorText from './ColorText.svelte'

  export let title: string
</script>

<h1 class="tc ttu mt6 mb5">
  <ColorText text={title} />
</h1>
<slot />
