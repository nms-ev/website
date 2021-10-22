<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  import type { Event } from '$lib/api'
  import { formatDate, getLocale } from '$lib/locale'

  export const load: Load = async ({ fetch, page }) => {
    const event: Event = await fetch(`/events/${page.params.slug}.json`).then((r) => r.json())
    return {
      props: {
        event,
        title: getLocale(event.translations, 'title', event.slug),
        body: getLocale(event.translations, 'body', event.slug),
      },
    }
  }
</script>

<script lang="ts">
  import { _ } from 'svelte-i18n'

  import Page from '$lib/components/Page.svelte'
  import Progress from '$lib/icons/Progress.svelte'
  import Location from '$lib/icons/Location.svelte'
  import Type from '$lib/icons/Type.svelte'

  export let event: Event
  export let title: string
  export let body: string
</script>

<Page title={$_(title)}>
  <section class="center">
    <header class="flex">
      <div class="flex-auto"><Progress /> {$formatDate(event.date)}</div>

      <div class="flex-auto tr">
        <div>{event.location} <Location /></div>
        <div>{$_(`events.types.${event.type}`)} <Type /></div>
      </div>
    </header>

    {@html $_(body)}
  </section>
</Page>

<style>
  section {
    max-width: var(--content-width);
  }
  header {
    font-variation-settings: 'wght' 500;
  }
</style>
