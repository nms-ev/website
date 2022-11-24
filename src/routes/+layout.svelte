<script lang="ts">
  import Container from '$lib/components/Container.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import Nav from '$lib/components/Nav.svelte'
  import { color } from '$lib/stores/bgColor'
</script>

<svelte:head>
  <title>nms e.V.</title>
  <meta name="theme-color" content={$color} />
</svelte:head>

<Nav />
<main data-sveltekit-prefetch>
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
  }
</style>
