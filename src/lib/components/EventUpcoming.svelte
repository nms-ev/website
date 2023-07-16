<script lang="ts">
  import { _ } from 'svelte-i18n'

  import Icon from '$lib/components/Icon.svelte'
  import type { EventFragment, EventTranslationsFragment } from '$lib/graphql/gen'
  import { formatDate } from '$lib/locale'

  export let event: EventFragment
  export let t: EventTranslationsFragment
</script>

<a href={`/events/${event.slug}`}>
  <div class="wrapper flex flex-col justify-center items-center p-4">
    <div class="mono-md mb-6">
      <div><Icon inline name="date" /> {$formatDate(event.date)}</div>
      <div><Icon inline name="location" /> {event.location}</div>
      <div><Icon inline name="type" /> {$_(`events.types.${event.type}`)}</div>
    </div>
    <h2 class="text-center">{t.title}</h2>
  </div>
</a>

<style>
  .wrapper {
    transition: var(--transition);
    border: var(--line-size) solid currentColor;
  }
  a:hover .wrapper {
    transform: translateY(-0.5rem);
    border-width: calc(var(--line-size) * 2);
    /* box-shadow: 0 calc(var(--line-size) * 2) 0 0 currentColor; */
  }

  @media (max-width: 50rem) {
    h2 {
      margin-left: -0.075em;
      margin-top: 0.75rem;
      font-size: max(10vw, 2.5rem) !important;
    }
  }
  h2 {
    font-weight: 300;
    font-size: min(8vw, 6rem);
    padding-bottom: 0.2em;
  }
</style>
