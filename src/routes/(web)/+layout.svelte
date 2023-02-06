<script lang="ts">
  import Container from '$lib/components/Container.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import Nav from '$lib/components/Nav.svelte'
</script>

<svelte:head>
  <title>nms e.V.</title>
</svelte:head>

<Nav />
<main>
  <Container>
    <slot />
  </Container>
</main>
<Footer />

<style>
  :global(:root) {
    --max-width: 70rem;
    --content-width: 30rem;
    --line-size: 0.075rem;
    --transition: all ease-in-out 200ms;
  }

  main {
    padding-top: var(--nav-height);
    min-height: calc(100% - var(--footer-height));
  }
</style>
