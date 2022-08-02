<script lang="ts">
  export let html: string
</script>

<section>
  {@html html}
</section>

<style>
  section :global(strong),
  section :global(b),
  section :global(.b) {
    /* font-variant: ; */
    font-variation-settings: 'wgth' 300;
  }

  section :global(a) {
    border-bottom: 0.125em solid currentColor;
    transition: var(--transition);
  }
  section :global(a:hover) {
    border-width: 0.25rem;
  }
</style>
