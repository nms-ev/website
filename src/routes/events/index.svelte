<script lang="ts" context="module">
  import { _ } from 'svelte-i18n'
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ fetch }) => {
    return {
      props: { events: await fetch('/events.json').then((r) => r.json()) },
    }
  }
</script>

<script lang="ts">
  import type { Event } from '$lib/api'
  import { getLocale } from '$lib/locale'
  import Page from '$lib/components/Page.svelte'

  export let events: Event[]

  $: localized = events.map((event) => {
    const title = getLocale(event.translations, 'title', event.slug)
    return {
      ...event,
      title,
    }
  })
</script>

<Page title="Events">
  {#each localized as event}
    <a href={`/events/${event.slug}`}>
      <div class="wrapper pv4 flex justify-between items-end">
        <div>{event.date}</div>
        <div class="flex-auto mh3">
          <h2>{$_(event.title)}</h2>
        </div>
        <div class="tr">
          <div>{event.location}</div>
          <div>{event.type}</div>
        </div>
      </div>
    </a>
  {/each}
</Page>

<style>
  .wrapper {
    box-shadow: 0 var(--line-size) 0 0 currentColor;
    transition: var(--transition);
  }
  a:hover .wrapper {
    box-shadow: 0 calc(var(--line-size) * 2) 0 0 currentColor;
    transform: translateY(-0.5rem);
  }
  @media (max-width: 70rem) {
    .wrapper {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

  h2 {
    font-variation-settings: 'wght' 300;
  }
</style>
