<script lang="ts">
  export let reader: boolean = false
</script>

<div class:reader class="px-4 mx-auto w-fit">
  <slot />
</div>

<style>
  div.reader {
    max-width: var(--content-width);
  }
</style>
