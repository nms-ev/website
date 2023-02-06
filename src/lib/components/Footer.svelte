<script lang="ts">
  import { _ } from 'svelte-i18n'
  import Clock from './Clock.svelte'

  import Container from './Container.svelte'

  const right = [
    { href: 'https://nms-ev.slack.com', label: 'Slack', external: true },
    { href: 'https://space.nms-ev.org', label: 'Space', external: true },
    { href: 'https://board.nms-ev.org', label: 'Board', external: true },
    { href: 'https://api.nms-ev.org', label: 'API', external: true },
    { href: '/impressum', label: 'Impressum' },
  ]
</script>

<footer>
  <Container>
    <div class="bg wrapper px-4 xl:px-0 py-2 flex">
      <div class="hidden sm:block flex-1">
        <a href="https://en.wikipedia.org/wiki/The_Game_(mind_game)" target="_blank" rel="noopener noreferrer">
          {$_('footer.game')}
        </a>
      </div>

      <!-- Clock -->
      <div class="time mx-2 hidden lg:block">
        <Clock />
      </div>

      <nav class="flex-1">
        <ul class="flex justify-end">
          {#each right as { href, label, external }}
            <li class="ml-4 capitalize">
              {#if external}
                <a {href} target="_blank" rel="noopener noreferrer">{label}</a>
              {:else}
                <a {href}>{label}</a>
              {/if}
            </li>
          {/each}
        </ul>
      </nav>
    </div>
  </Container>
</footer>

<style>
  :global(:root) {
    --footer-height: 2.5rem;
  }

  .wrapper {
    box-shadow: 0 calc(-1 * var(--line-size)) 0 0 currentColor;
    --nav-horizontal-padding: 1rem;
  }
</style>
