<script lang="ts">
  import type { MemberFragment } from '$lib/graphql/gen'
  import { formatDate } from '$lib/locale'
  import { DJS } from '$lib/time'
  import { MemberStatus, MemberType, memberUpdate } from '$lib/validators/member'
  import Button from '../form/Button.svelte'
  import Decimal from '../form/Decimal.svelte'
  import Slider from '../form/Slider.svelte'

  export let member: MemberFragment
  let contribution: number = member.contribution ?? 0
  let error: Error | null = null
  let loading: boolean = false

  async function setup() {
    try {
      loading = true
      error = null
      const response = await fetch('/members/setup', {
        method: 'POST',
      })
      const payload: any = await response.json()
      if (response.ok) {
        window.location.href = payload.url
      } else {
        error = new Error(payload.message)
        return
      }
    } catch (e) {
      console.error(e)
      if (e instanceof Error) error = e
    } finally {
      loading = false
    }
  }

  async function changeRenewState(enabled: boolean) {
    try {
      loading = true
      const body = memberUpdate.parse({ renew: enabled })
      await fetch('/members/update', { method: 'POST', body: JSON.stringify(body) })
      window.location.reload()
    } finally {
      loading = false
    }
  }
</script>

<section class="flex flex-col gap-16">
  <div>
    Welcome back,
    <h2 class="copy-xl">{member.name}</h2>
  </div>

  <div>
    <div class="copy-lg">Basics</div>
    <div class="flex flex-col gap-1">
      <div>
        Your status: <span class="capitalize">{member.status}</span>
      </div>
      <div>E-Mail: {member.email}</div>
      <div class="capitalize">Membership: {member.type}</div>
    </div>
  </div>

  <section>
    <div class="copy-lg">Membership</div>
    {#if member.status === MemberStatus.Approved}
      {#if !member.membership || DJS(member.membership).isBefore(DJS())}
        <form on:submit|preventDefault={setup}>
          <fieldset disabled={loading}>
            <div class="flex flex-col gap-4">
              <div>Your membership is not active, which means you are currently not a member of NMS.</div>
              {#if member.type === MemberType.Regular}
                <div>The yearly membership is 84€</div>
              {:else}
                <Slider label="Annual contribution" suffix="€" bind:value={contribution} min={20} max={420} log />
              {/if}
              <Button type="submit" label="Start Membership" />
            </div>
            {#if error}
              <div class="text-red-500">{error.message}</div>
            {/if}
          </fieldset>
        </form>
      {:else}
        <p>You are a proud member of the NMS Family 🎉</p>
        <p>You membership is valid until the {$formatDate(member.membership)}.</p>
        {#if member.renew}
          <p class="mb-4">
            It will renew on {$formatDate(DJS(member.membership).add(1, 'day'))} by {member.contribution}€.
          </p>
          <Button label="Cancel membership" on:click={() => changeRenewState(false)} />
        {:else}
          <p class="mb-4">Your membership is cancelled, but you can renew at any time.</p>
          <Button label="Renew membership" on:click={() => changeRenewState(true)} />
        {/if}
      {/if}
    {:else}
      <div>You are not approved yet. For active members this happens manually.</div>
    {/if}
  </section>
</section>
