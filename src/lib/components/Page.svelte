<script lang="ts">
  import ColorText from './ColorText.svelte'
  import Transition from './Transition.svelte'

  export let title: string
  export let full = false
</script>

<Transition>
  <div class:full>
    <h1 class="tc ttu mt6 mb5">
      <ColorText text={title} />
    </h1>
    <slot />
  </div>
</Transition>

<style>
  @media (max-width: 50rem) {
    div:not(.full) {
      padding: 2rem;
    }
  }
</style>
