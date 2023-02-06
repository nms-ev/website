<script lang="ts">
  import Intro from '$lib/components/Intro.svelte'
  import Nms from '$lib/components/NMS.svelte'
  import Transition from '$lib/components/Transition.svelte'
</script>

<Transition>
  <div class="wrapper flex justify-center items-center w-full h-full">
    <div class="text-center">
      <h2 class="m-0 mb-2"><Nms /></h2>
      <Intro />
    </div>
  </div>
</Transition>

<style>
  .wrapper {
    height: calc(100vh - var(--nav-height) - var(--footer-height));
    font-variation-settings: 'wght' 201;
  }
  h2 {
    font-size: min(10vw, 7vh);
  }
</style>
