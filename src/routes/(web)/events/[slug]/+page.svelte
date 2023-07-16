<script lang="ts">
  import { _ } from 'svelte-i18n'
  import type { PageData } from './$types'

  import Back from '$lib/components/Back.svelte'
  import Content from '$lib/components/Content.svelte'
  import Icon from '$lib/components/Icon.svelte'
  import LastUpdatedFooter from '$lib/components/LastUpdatedFooter.svelte'
  import Page from '$lib/components/Page.svelte'
  import RichContent from '$lib/components/RichContent.svelte'
  import { formatDate, formatTime } from '$lib/locale'

  export let data: PageData

  const { event, t } = data
  const date = event.date_updated || event.date_created || null
</script>

<Page title={t.title}>
  <Back to="/events" />
  <Content>
    <header class="flex mono-md">
      <div class="flex-1">
        <div>
          <Icon inline name="date" />
          {$formatDate(event.date)}
        </div>
        {#if event.time}
          <div>
            <Icon inline name="progress" />
            {formatTime(event.time)}
          </div>
        {/if}
      </div>

      <div class="flex-1 text-right">
        <div>
          {event.location}
          <Icon inline name="location" />
        </div>
        <div>
          {$_(`events.types.${event.type}`)}
          <Icon inline name="type" />
        </div>
      </div>
    </header>
    <RichContent html={t.body} />
  </Content>
  {#if date}
    <LastUpdatedFooter {date} />
  {/if}
</Page>
