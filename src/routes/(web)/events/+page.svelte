<script lang="ts">
  import type { PageData } from './$types'

  import EventPreview from '$lib/components/EventPreview.svelte'
  import Page from '$lib/components/Page.svelte'

  export let data: PageData
</script>

<Page title="Events">
  <div class="mt-32" />
  {#each data.events as { event, t }}
    <EventPreview {event} {t} />
  {/each}
  <div class="mb-64" />
</Page>
