<script lang="ts">
  import { env } from '$env/dynamic/public'
  import Content from '$lib/components/Content.svelte'
  import Page from '$lib/components/Page.svelte'
  import Button from '$lib/components/form/Button.svelte'
  import Country from '$lib/components/form/Country.svelte'
  import Radio from '$lib/components/form/Radio.svelte'
  import TextInput from '$lib/components/form/TextInput.svelte'
  import { DJS, format } from '$lib/time'
  import type { PropertyStringPath } from '$lib/utils'
  import { MemberType, memberCreate, type MemberCreate } from '$lib/validators/member'
  import { onMount } from 'svelte'

  let form: MemberCreate = {
    address: {
      city: '',
      country: '',
      zip: '',
      street: '',
    },
    email: '',
    name: '',
    birthday: '',
    type: MemberType.Regular,
  }
  let error: string | null = null
  let loading: boolean = false
  let submitted: boolean = false

  $: parsed = memberCreate.safeParse(form)

  onMount(async () => {
    if (typeof window === 'undefined') return
    const { autofill } = await import('@mapbox/search-js-web')
    autofill({ accessToken: env.PUBLIC_MAPBOX_TOKEN })
  })

  $: getError = (path: PropertyStringPath<MemberCreate>) => {
    if (parsed.success) return null
    return parsed.error.issues.find((issue) => issue.path.join('.') === path)?.message ?? null
  }

  async function submit() {
    try {
      loading = true
      if (parsed.success) {
        const response = await fetch('/join', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(parsed.data),
        })
        if (response.status >= 400) throw new Error(await response.text())
        submitted = true
      }
    } catch (e) {
      if (e instanceof Error) error = e.message
    } finally {
      loading = false
    }
  }
</script>

<Page title="join">
  <Content>
    <p>We are honored and flattened that you want to join us!!</p>
    {#if submitted}
      <p>You got mail from us 💌</p>
    {:else}
      <fieldset disabled={loading}>
        <form class="flex flex-col gap-20 mb-16 max-w-md w-full" on:submit|preventDefault={submit}>
          <div class="flex flex-col gap-2">
            <div class="text-lg">What kind of membership do you want?</div>
            <div>
              <Radio
                choices={[
                  { value: MemberType.Regular, label: 'Active member' },
                  { value: MemberType.Sponsor, label: 'Sponsor' },
                ]}
                bind:value={form.type}
              />
            </div>
            <p class="text-sm">
              {#if form.type === MemberType.Sponsor}
                The minimum yearly contribution is 20€
                <br />
                Sponsors do not have voting rights, but want to support us financially.
              {:else}
                The yearly contribution is 84€.
                <br />
                Active members have voting rights and are expected to participate in the daily business of NMS
              {/if}
            </p>
          </div>

          <div class="flex flex-col gap-3">
            <div class="text-lg">Base info</div>
            <TextInput bind:value={form.name} label="Name" type="text" error={getError('name')} autocomplete="name" />
            <TextInput
              bind:value={form.email}
              label="Email"
              type="email"
              error={getError('email')}
              autocomplete="email"
            />
            <TextInput
              bind:value={form.birthday}
              label="Birthday"
              type="date"
              error={getError('birthday')}
              autocomplete="bday"
              min={DJS().subtract(100, 'year').format(format)}
              max={DJS().subtract(18, 'year').format(format)}
            />
          </div>

          <div class="flex flex-col gap-3">
            <div class="text-lg">Address</div>
            <TextInput
              bind:value={form.address.street}
              label="Street"
              autocomplete="address-line1"
              error={getError('address.street')}
            />
            <div class="flex gap-3 flex-col md:flex-row">
              <TextInput
                bind:value={form.address.zip}
                label="Zip"
                autocomplete="postal-code"
                error={getError('address.zip')}
              />
              <TextInput
                bind:value={form.address.city}
                label="City"
                autocomplete="address-level2"
                error={getError('address.city')}
              />
            </div>
            <Country
              bind:value={form.address.country}
              label="Country"
              autocomplete="country"
              error={getError('address.country')}
            />
          </div>

          <div>
            {#if error}
              <p class="text-red-800">{error}</p>
            {/if}
            <div class:opacity-20={!parsed.success}>
              <Button type="submit" label="Register" />
            </div>
          </div>
        </form>
      </fieldset>
    {/if}
  </Content>
</Page>
