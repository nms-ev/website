<script lang="ts">
  import ColorText from '$lib/components/ColorText.svelte'
  import Transition from '$lib/components/Transition.svelte'

  const versions = ['noch mehr sex']

  $: rand = versions[Math.floor(versions.length * Math.random())]
</script>

<Transition>
  <div class="wrapper flex justify-center items-center w-100 h-100">
    <div class="tc">
      <h2 class="ma0 mb2"><ColorText text="[{rand}]" /></h2>
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
    font-size: min(12vw, 8vh);
  }
  p {
    font-size: max(4vw, 4vh);
    max-width: initial;
  }
</style>
