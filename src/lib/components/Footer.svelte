<script lang="ts">
  import Instagram from '$lib/icons/Instagram.svelte'

  import Content from './Content.svelte'

  const left = [{ icon: Instagram, href: 'https://instagram.com/nms_ev' }]

  const right = [{ href: '/impressum', label: 'impressum' }]
</script>

<Content>
  <hr />
  <div class="flex mb3">
    <nav class="left">
      <ul class="pa0 ma0 list">
        {#each left as { href, icon }}
          <li>
            <a {href} target="_blank" rel="noopener noreferrer">
              <svelte:component this={icon} />
            </a>
          </li>
        {/each}
      </ul>
    </nav>
    <div class="flex-auto" />
    <nav class="right">
      <ul class="pa0 ma0 list">
        {#each right as { href, label }}
          <li>
            <a {href}>{label}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</Content>

<style>
  .left li {
    font-size: 1.25rem;
  }

  .right li {
    text-transform: capitalize;
  }
</style>
