<script lang="ts">
  import Logo from './Logo.svelte'
  import Clock from './Clock.svelte'
  import Menu from '$lib/icons/Menu.svelte'
  import { scale, fade } from 'svelte/transition'
  import { createMediaQueryStore } from '$lib/stores/mediaQuery'

  const links = [
    { href: '/events', label: 'events' },
    { href: '/join', label: 'join' },
    { href: '/about', label: 'about' },
    { href: '/contact', label: 'contact' },
  ]

  let mobile = createMediaQueryStore('(max-width: 30rem)')
  let open = false

  $: combined = $mobile ? [{ href: '/', label: 'home' }, ...links] : links
</script>

<nav class="f6">
  <div class="wrapper flex flex-no-wrap items-center center">
    <div class="logo flex-grow mr3 mv2">
      <a href="/">
        <Logo />
      </a>
    </div>
    <div class="time">
      <Clock />
    </div>
    {#if !$mobile || open}
      <ul
        class:open
        class="menu flex flex-grow pa0 ma3 mr0 justify-end"
        on:click={() => (open = false)}
        transition:fade={{ duration: 50 }}
      >
        {#each combined as { href, label }, i}
          {#if i !== 0}
            <div class="mh2">—</div>
          {/if}
          <li transition:scale={{}}>
            <a {href}>{label}</a>
          </li>
        {/each}
      </ul>
    {/if}
    <div class="toggle tr">
      <div on:click={() => (open = true)} class="di pa2">
        <Menu />
      </div>
    </div>
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
    background-color: var(--bg-color);
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
    width: min-content;
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

  .toggle {
    display: none;
    font-size: 2em;
  }

  @media (max-width: 30rem) {
    .toggle {
      display: block;
    }
    .menu {
      position: fixed;
      z-index: 20;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      margin: 0;
      font-size: 1.5rem;

      background: var(--bg-color);

      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .menu:not(.open) {
      display: none;
    }
  }
</style>
