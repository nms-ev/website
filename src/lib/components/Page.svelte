<script lang="ts">
  /**
   * Page component is for every page that has a colorful title
   */

  import ColorText from './ColorText.svelte'
  import Transition from './Transition.svelte'

  export let title: string
</script>

<Transition>
  <div>
    <h1 class="text-center uppercase mt-32 mb-16 px-4">
      <ColorText text={title} />
    </h1>
    <slot />
  </div>
</Transition>
