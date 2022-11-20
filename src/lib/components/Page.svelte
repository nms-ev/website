<script lang="ts">
  import ColorText from './ColorText.svelte'
  import Content from './Content.svelte'
  import Transition from './Transition.svelte'

  export let title: string
</script>

<Transition>
  <div>
    <Content>
      <h1 class="text-center uppercase mt-32 mb-16">
        <ColorText text={title} />
      </h1>
    </Content>
    <slot />
  </div>
</Transition>
