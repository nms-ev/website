<script lang="ts">
  import type { MemberFragment } from '$lib/graphql/gen'
  import { DJS } from '$lib/time'
  import { MemberStatus, MemberType } from '$lib/validators/member'
  import Button from '../form/Button.svelte'
  import Decimal from '../form/Decimal.svelte'

  export let member: MemberFragment
  let contribution: number = member.contribution ?? 0

  async function setup() {
    // TODO: enable
    return
    const response: any = await fetch('/members/setup', {
      method: 'POST',
    }).then((res) => res.json())
    window.location.href = response.url
  }
</script>

<section class="flex flex-col gap-16">
  <div>
    Welcome back,
    <h2>{member.name}</h2>
  </div>

  <div>
    <div class="text-2xl">Basics</div>
    <div class="flex flex-col gap-1">
      <div>
        Your status: <span class="capitalize">{member.status}</span>
      </div>
      <div>E-Mail: {member.email}</div>
      <div>Membership: {member.type}</div>
    </div>
  </div>

  <section>
    <div class="text-2xl">Membership</div>
    Coming soon™️
    {#if false}
      {#if member.status === MemberStatus.Approved}
        {#if !member.membership || DJS(member.membership).isBefore(DJS())}
          <form on:submit|preventDefault={setup}>
            <div class="flex flex-col gap-4">
              <div>Your membership is not active, which means you are currently not a member of NMS.</div>
              {#if member.type === MemberType.Regular}
                <div>The yearly membership is 84€</div>
              {:else}
                Choose your yearly contribution:
                <Decimal class="w-8" min={20} bind:value={contribution} precision={0} label="Yearly contribution (€)" />
              {/if}
              <Button type="submit" label="Start Membership" />
            </div>
          </form>
        {:else}
          You are a proud member of the NMS Family 🎉
        {/if}
      {:else}
        <div>You are not approved yet. For active members this happens manually.</div>
      {/if}
    {/if}
  </section>
</section>
