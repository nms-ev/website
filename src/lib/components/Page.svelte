<script lang="ts">
  import ColorText from './ColorText.svelte'
  import Transition from './Transition.svelte'

  export let title: string
</script>

<Transition>
  <h1 class="tc ttu mt6 mb5">
    <ColorText text={title} />
  </h1>
  <slot />
</Transition>
