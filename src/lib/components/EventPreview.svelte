<script lang="ts">
  import { _ } from 'svelte-i18n'

  import Icon from '$lib/components/Icon.svelte'
  import type { EventFragment, EventTranslationsFragment } from '$lib/graphql/gen'
  import { formatDate } from '$lib/locale'

  export let event: EventFragment
  export let t: EventTranslationsFragment
</script>

<a href={`/events/${event.slug}`}>
  <div class="wrapper py-8 flex justify-center items-end">
    <div class="details mono">
      <div><Icon inline name="date" /> {$formatDate(event.date)}</div>
      <div><Icon inline name="location" /> {event.location}</div>
      <div><Icon inline name="type" /> {$_(`events.types.${event.type}`)}</div>
    </div>
    <div class="text">
      <h2>{t.title}</h2>
    </div>
    <div class="icon flex">
      <Icon name="arrow_right" />
    </div>
  </div>
</a>

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
    width: 16rem;
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
