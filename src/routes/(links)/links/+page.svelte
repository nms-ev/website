<script lang="ts">
  import Button from '$lib/components/Button.svelte'
  import Intro from '$lib/components/Intro.svelte'
  import Globe from '$lib/icons/Globe.svelte'
  import Instagram from '$lib/icons/Instagram.svelte'
  import Logo from '$lib/icons/Logo.svelte'
  import Telegram from '$lib/icons/Telegram.svelte'
  import type { PageData } from './$types'

  export let data: PageData

  const iconMap = {
    instagram: Instagram,
    telegram: Telegram,
    web: Globe,
  }

  function getIcon(icon: string = '') {
    if (icon in iconMap) return iconMap[icon as keyof typeof iconMap]
    return null
  }
</script>

<header class="p-4 pt-8 flex flex-col items-center m-auto">
  <div class="logo mb-2">
    <Logo />
  </div>
  <Intro />
</header>

<hr />

<div class="p-4 flex flex-col gap-4 text-xl max-w-sm m-auto">
  {#each data.links as { href, label, icon, huge }}
    {@const iconComponent = getIcon(icon)}
    <a {href} target="_blank" rel="noopener noreferrer" class:text-4xl={huge}>
      <Button wide>
        <div class="inline-flex items-center w-contents">
          {#if iconComponent}
            <svelte:component this={iconComponent} />
          {/if}
          <span class="ml-2">
            {label}
          </span>
        </div>
      </Button>
    </a>
  {/each}
</div>

<style>
  .logo {
    max-width: 6rem;
  }
  .logo :global(svg) {
    width: 100%;
    height: auto;
  }
</style>
