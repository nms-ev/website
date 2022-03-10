<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  import type { Event } from '$lib/api'
  import { formatDate, formatTime, getLocale } from '$lib/locale'

  export const load: Load = async ({ fetch, params }) => {
    const event: Event = await fetch(`/events/${params.slug}.json`).then((r) => r.json())
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
  import Date from '$lib/icons/Date.svelte'
  import LastUpdatedFooter from '$lib/components/LastUpdatedFooter.svelte'
  import Back from '$lib/components/Back.svelte'

  export let event: Event
  export let title: string
  export let body: string
</script>

<Page title={$_(title)}>
  <Back to="/events" />
  <section class="center mobile-padding">
    <header class="flex mono">
      <div class="flex-auto">
        <div>
          <Date />
          {$formatDate(event.date)}
        </div>
        {#if event.time}
          <div>
            <Progress />
            {formatTime(event.time)}
          </div>
        {/if}
      </div>

      <div class="flex-auto tr">
        <div>{event.location} <Location /></div>
        <div>{$_(`events.types.${event.type}`)} <Type /></div>
      </div>
    </header>
    {@html $_(body)}
  </section>
  <LastUpdatedFooter date={event.date_updated || event.date_created} />
</Page>

<style>
  section {
    max-width: var(--content-width);
  }
</style>
