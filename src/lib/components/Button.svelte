<script lang="ts">
  export let wide = false
</script>

<button on:click class="px-4 py-3" class:w-full={wide}>
  <slot />
</button>

<style>
  button {
    --distance: 4px;
    background: #fff;
    border: 0.15rem solid #000;
    box-shadow: var(--distance) var(--distance) 0px 0px rgba(0, 0, 0, 1);
    transition: var(--transition);
    font-size: inherit;
    font-weight: inherit;
    font-variation-settings: inherit;
  }

  button:hover {
    transform: translate(var(--distance), var(--distance));
    box-shadow: 0 0 0px 0px rgba(0, 0, 0, 1);
  }
</style>
