<script lang="ts">
  import { store as bgColor, colorToString } from '$lib/stores/bgColor'

  import Logo from './Logo.svelte'
  import Clock from './Clock.svelte'

  const links = [
    { href: '/', label: 'home' },
    { href: '/events', label: 'events' },
    { href: '/about', label: 'about' },
  ]

  let el: HTMLElement

  $: if (el) el.style.backgroundColor = colorToString($bgColor)
</script>

<nav bind:this={el}>
  <div class="wrapper flex items-center center">
    <div class="logo flex-grow">
      <a href="/">
        <Logo />
      </a>
    </div>
    <div class="time">
      <Clock />
    </div>
    <ul class="flex flex-grow justify-end pa0 ma0 mv3">
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
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 0.85em;
  }

  .wrapper {
    box-shadow: 0 var(--line-size) 0 0 currentColor;
    max-width: var(--max-width);
    --nav-horizontal-padding: 2rem;
  }
  .wrapper > * {
    flex: 1 0 0;
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
  }

  .logo :global(svg) {
    height: 2rem;
    width: auto;
  }

  .time {
    flex: 0 1 auto;
  }
  @media (max-width: 50rem) {
    .time {
      display: none;
    }
  }
</style>
