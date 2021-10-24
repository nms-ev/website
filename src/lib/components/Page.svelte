<script lang="ts">
  import ColorText from './ColorText.svelte'
  import Transition from './Transition.svelte'

  export let title: string
</script>

<Transition>
  <div>
    <h1 class="tc ttu mt6 mb5 mobile-padding">
      <ColorText text={title} />
    </h1>
    <slot />
  </div>
</Transition>
