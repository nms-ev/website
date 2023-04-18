<script lang="ts">
  import Content from '$lib/components/Content.svelte'
  import Page from '$lib/components/Page.svelte'
  import Dashboard from '$lib/components/members/Dashboard.svelte'
  import Login from '$lib/components/members/Login.svelte'
  import type { PageData } from './$types'

  export let data: PageData
</script>

<Page title="Members">
  <Content>
    {#if data.member === null}
      <Login />
    {:else}
      <Dashboard member={data.member} />
    {/if}
  </Content>
</Page>
