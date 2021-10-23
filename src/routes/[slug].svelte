<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  import type { Page as TPage } from '$lib/api'
  import { formatDate, getLocale } from '$lib/locale'

  export const load: Load = async ({ fetch, page: p }) => {
    const page: TPage = await fetch(`/pages/${p.params.slug}.json`).then((r) => r.json())
    return {
      props: {
        page,
        title: getLocale(page.translations, 'title', page.slug),
        body: getLocale(page.translations, 'body', page.slug),
      },
    }
  }
</script>

<script lang="ts">
  import { _ } from 'svelte-i18n'

  import LastUpdatedFooter from '$lib/components/LastUpdatedFooter.svelte'
  import Page from '$lib/components/Page.svelte'

  export let page: TPage
  export let title: string
  export let body: string

  $: console.debug(title)
</script>

<Page title={$_(title)}>
  {@html $_(body)}
  <LastUpdatedFooter date={page.date_updated || page.date_created} />
</Page>
