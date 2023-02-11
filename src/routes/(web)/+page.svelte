<script lang="ts">
  import EventUpcoming from '$lib/components/EventUpcoming.svelte'
  import Intro from '$lib/components/Intro.svelte'
  import Nms from '$lib/components/NMS.svelte'
  import Transition from '$lib/components/Transition.svelte'
  import type { PageData } from './$types'

  export let data: PageData
</script>

<Transition>
  <div class="wrapper flex flex-col gap-12 justify-center items-center w-full h-full">
    <div class="text-center">
      <h2 class="m-0 mb-2"><Nms /></h2>
      <Intro />
    </div>
    {#if data.upcoming}
      <EventUpcoming {...data.upcoming} />
    {/if}
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
