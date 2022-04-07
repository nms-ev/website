<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  import type { Page as TPage } from '$lib/api'
  import { getLocale } from '$lib/locale'

  export const load: Load = async ({ fetch, params }) => {
    const page: TPage = await fetch(`/pages/${params.slug}.json`).then((r) => r.json())
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
  import RichContent from '$lib/components/RichContent.svelte'

  export let page: TPage
  export let title: string
  export let body: string
</script>

<Page title={$_(title)}>
  <div class="mobile-padding">
    <RichContent html={$_(body)} />
  </div>
  <LastUpdatedFooter date={page.date_updated || page.date_created} />
</Page>
