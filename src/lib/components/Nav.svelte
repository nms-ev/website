<script lang="ts">
  import type { ComponentProps } from 'svelte'
  import { scale } from 'svelte/transition'

  import { createMediaQueryStore } from '$lib/stores/mediaQuery'
  import Click from './Click.svelte'
  import Container from './Container.svelte'
  import Icon from './Icon.svelte'

  const links = [
    { href: '/events', label: 'events' },
    // { href: '/join', label: 'join' },
    // { href: '/about', label: 'about' },
    // { href: '/contact', label: 'contact' },
  ]

  const socials: { href: string; icon: ComponentProps<Icon>['name'] }[] = [
    { icon: 'instagram', href: 'https://instagram.com/nms_ev' },
    { icon: 'telegram', href: 'https://t.me/nms_ev' },
    { icon: 'github', href: 'https://github.com/nms-ev/' },
  ]

  let mobile = createMediaQueryStore('(max-width: 640px)')
  let open = false

  const close = () => (open = false)

  $: combined = $mobile ? [{ href: '/', label: 'home' }, ...links] : links

  const animation = {
    menu: 150,
    link: 150,
    linkDelay: 25,
  }
</script>

<nav class="fixed z-20 top-0 left-0 w-screen">
  <Container>
    <div class="bg wrapper text-sm px-4 xl:px-0 flex flex-nowrap items-center mx-auto pt-2 pb-1">
      <!-- Logo -->
      <div class="flex-1 mr-2 text-4xl">
        <a href="/">
          <Icon name="logo" />
        </a>
      </div>

      <!-- Socials -->
      <div class="flex ml-4">
        {#each socials as { href, icon }}
          <a class="text-xl ml-2" {href} target="_blank" rel="noopener noreferrer">
            <Icon name={icon} />
          </a>
        {/each}
      </div>

      <!-- Links -->
      {#if !$mobile || open}
        <ul
          class:open
          class="bg flex-1 flex justify-end"
          transition:scale={{ duration: animation.menu }}
          on:click={close}
          on:keydown={close}
        >
          {#each combined as { href, label }, i}
            {#if i !== 0}
              <div class="hidden sm:block mx-2">—</div>
            {/if}
            <li transition:scale={{ duration: animation.link, delay: animation.menu + i * animation.linkDelay }}>
              <a class="uppercase" {href}>{label}</a>
            </li>
          {/each}
          <li
            transition:scale={{
              duration: animation.link,
              delay: animation.menu + combined.length * animation.linkDelay,
            }}
          >
            <Click class="mono text-base sm:hidden">→ close me ←</Click>
          </li>
        </ul>
      {/if}

      <!-- Toggle for mobile -->
      <div class="toggle text-right text-2xl flex justify-center sm:hidden">
        <Click on:click={() => (open = true)} class="p-1">
          <Icon name="menu" />
        </Click>
      </div>
    </div>
  </Container>
</nav>

<style>
  :global(:root) {
    --nav-height: 3rem;
  }

  .wrapper {
    box-shadow: 0 var(--line-size) 0 0 currentColor;
    --nav-horizontal-padding: 1rem;
  }

  @media (max-width: 640px) {
    ul {
      position: fixed;
      z-index: 20;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      margin: 0;
      font-size: 2rem;

      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    ul:not(.open) {
      display: none;
    }
    ul li {
      margin-bottom: 0.75em;
    }
  }
</style>
