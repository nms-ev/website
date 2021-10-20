<script lang="ts" context="module">
  import { _ } from 'svelte-i18n'
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ fetch, page }) => {
    return {
      props: { event: await fetch(`/events/${page.params.slug}.json`).then((r) => r.json()) },
    }
  }
</script>

<script lang="ts">
  import type { Event } from '$lib/api'
  import { getLocale } from '$lib/locale'
  import Page from '$lib/components/Page.svelte'

  export let event: Event

  let title = getLocale(event.translations, 'title')
  let body = getLocale(event.translations, 'body')
</script>

<Page title={$_(title)}>
  {@html $_(body)}
</Page>
