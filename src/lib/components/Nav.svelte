<script lang="ts">
  const links = [
    { href: '/', label: 'home' },
    { href: '/events', label: 'events' },
    { href: '/about', label: 'about' },
  ]
</script>

<nav class="">
  <div class="wrapper pv3 flex justify-end items-center center">
    <ul class="flex pa0 ma0">
      {#each links as { href, label }, i}
        {#if i !== 0}
          <div class="mh2">—</div>
        {/if}
        <li>
          <a {href}>{label}</a>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  :global(:root) {
    --nav-height: 3rem;
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  .wrapper {
    box-shadow: 0 var(--line-size) 0 0 currentColor;
    max-width: var(--max-width);
    --nav-horizontal-padding: 2rem;
  }
  @media (max-width: 70rem) {
    .wrapper {
      padding-left: var(--nav-horizontal-padding);
      padding-right: var(--nav-horizontal-padding);
    }
  }

  ul {
    list-style: none;
  }

  a {
    text-transform: uppercase;
    font-variation-settings: 'wght' 500;
    font-size: 0.85em;
  }
</style>
