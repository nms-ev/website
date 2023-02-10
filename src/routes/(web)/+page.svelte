<script lang="ts">
  import ColorText from "$lib/components/ColorText.svelte";
  import Intro from "$lib/components/Intro.svelte";
  import Nms from "$lib/components/NMS.svelte";
  import Transition from "$lib/components/Transition.svelte";
  import type { PageData } from "./$types";
  import Click from "$lib/components/Click.svelte";

  export let data: PageData;
</script>

<Transition>
  <div class="wrapper flex justify-center items-center w-full h-full">
    <div class="text-center">
      <h1 class="m-12 mb-5 md:mt-34"><ColorText text="nms" /></h1>
      <h2 class="m-0 mb-2"><Nms /></h2>
      <Intro {data} />
      <Click class="mt-8 mb-6 mono text-base text-2xl" on:click={() => location.href = '/events'}>→ more events ←</Click>
    </div>
  </div>
</Transition>

<style>
  .wrapper {
    height: calc(100vh - var(--nav-height) - var(--footer-height));
    font-variation-settings: "wght" 201;
  }
  h1 {
    font-size: max(6vw, 6vh);
    font-variation-settings: "wght" 201;
  }
  h2 {
    font-size: min(10vw, 7vh);
  }
</style>
