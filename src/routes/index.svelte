<script lang="ts">
  import ColorText from '$lib/components/ColorText.svelte'
  import Nms from '$lib/components/NMS.svelte'
  import Transition from '$lib/components/Transition.svelte'
</script>

<Transition>
  <div class="wrapper flex justify-center items-center w-100 h-100">
    <div class="tc">
      <h2 class="ma0 mb2"><Nms /></h2>
      <h1 class="ma0"><ColorText text="nms" /></h1>
      <br />
      <p class="tc">_ music, art, ...more *</p>
    </div>
  </div>
</Transition>

<style>
  .wrapper {
    height: calc(100vh - (var(--nav-height) * 2));
    font-variation-settings: 'wght' 201;
  }
  h1 {
    font-size: max(10vw, 16vh);
  }
  h2 {
    font-size: min(10vw, 7vh);
  }
  p {
    font-size: max(4vw, 4vh);
    max-width: initial;
  }
</style>
