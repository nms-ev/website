<script lang="ts">
  import ColorText from '$lib/components/ColorText.svelte'
</script>

<div class="flex justify-center items-center w-100 h-100">
  <div class="tc">
    <h2 class="ma0 mb2"><ColorText text="[uff]" /></h2>
    <h1 class="ma0"><ColorText text="united fun fighters" /></h1>
    <br />
    <p>_ music, art, ...more *</p>
  </div>
</div>

<style>
  h1 {
    font-size: max(7vw, 10vh);
  }
  h2 {
    font-size: max(5vw, 8vh);
  }
  p {
    font-size: max(4vw, 4vh);
  }
</style>
