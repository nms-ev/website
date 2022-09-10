<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'
  import { _ } from 'svelte-i18n'

  export const load: Load = async ({ fetch }) => {
    return {
      props: { events: await fetch('/events.json').then((r) => r.json()) },
    }
  }
</script>

<script lang="ts">
  import type { Event } from '$lib/api'
  import Page from '$lib/components/Page.svelte'
  import ArrowRight from '$lib/icons/ArrowRight.svelte'
  import Date from '$lib/icons/Date.svelte'
  import Location from '$lib/icons/Location.svelte'
  import Type from '$lib/icons/Type.svelte'
  import { getLocale } from '$lib/locale'

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
    <a sveltekit:prefetch href={`/events/${event.slug}`}>
      <div class="wrapper pv4 flex justify-center items-end">
        <div class="details mono">
          <div><Date /> {event.date}</div>
          <div><Location /> {event.location}</div>
          <div><Type /> {$_(`events.types.${event.type}`)}</div>
        </div>
        <div class="text">
          <h2>{$_(event.title)}</h2>
        </div>
        <div class="icon flex">
          <ArrowRight />
        </div>
      </div>
    </a>
  {/each}
</Page>
<div class="mb7" />

<style>
  .wrapper {
    box-shadow: 0 var(--line-size) 0 0 currentColor;
    transition: var(--transition);
  }
  a:hover .wrapper {
    box-shadow: 0 calc(var(--line-size) * 2) 0 0 currentColor;
    transform: translateY(-0.5rem);
  }

  .details {
    width: 12rem;
  }

  .icon {
    font-size: 2rem;
    width: 2rem;
  }

  .text {
    padding: 0 1rem;
    flex: 1;
  }
  @media (max-width: 70rem) {
    .wrapper {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
  @media (max-width: 50rem) {
    .wrapper {
      flex-direction: column;
      align-items: flex-start;
    }
    .wrapper > div {
      margin: 0;
      text-align: left;
    }
    h2 {
      margin-left: -0.075em;
      margin-top: 0.75rem;
      font-size: max(10vw, 2.5rem) !important;
    }
    .icon {
      display: none;
    }
    .text {
      padding: 0;
    }
  }

  h2 {
    font-variation-settings: 'wght' 300;
    font-size: min(8vw, 6rem);
  }
</style>
