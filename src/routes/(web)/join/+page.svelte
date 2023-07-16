<script lang="ts">
  import { env } from '$env/dynamic/public'
  import Content from '$lib/components/Content.svelte'
  import Page from '$lib/components/Page.svelte'
  import Button from '$lib/components/form/Button.svelte'
  import Country from '$lib/components/form/Country.svelte'
  import Radio from '$lib/components/form/Radio.svelte'
  import Slider from '$lib/components/form/Slider.svelte'
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
    contribution: 20,
    type: MemberType.Sponsor,
  }
  let error: string | null = null
  let loading: boolean = false
  let submitted: boolean = false

  $: parsed = memberCreate.safeParse(form)

  $: if (form.type === MemberType.Regular) form.contribution = 84

  onMount(async () => {
    if (typeof window === 'undefined') return
    const { autofill } = await import('@mapbox/search-js-web')
    autofill({
      accessToken: env.PUBLIC_MAPBOX_TOKEN,
      theme: {
        variables: {
          colorText: 'current',
          colorBackground: 'var(--bg-color)',
          borderRadius: '0',
          fontFamily: 'Mulish',
          fontWeight: '300',
        },
      },
    })
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
    <!-- Title -->
    <p class="copy-md mb-16">We are honored and flattened that you want to join us!!</p>
    {#if submitted}
      <!-- Success -->
      <p>You got mail from us 💌</p>
    {:else}
      <fieldset disabled={loading}>
        <form class="flex flex-col gap-16 mb-16" on:submit|preventDefault={submit}>
          <!-- Membership -->
          <div class="flex flex-col gap-4">
            <h2 class="copy-lg">Membership</h2>
            <Radio
              label="What kind of membership do you want?"
              choices={[
                { value: MemberType.Regular, label: 'Active member' },
                { value: MemberType.Sponsor, label: 'Sponsor' },
              ]}
              bind:value={form.type}
            />
            <div class="flex flex-col gap-2 copy-md">
              {#if form.type === MemberType.Sponsor}
                <p>
                  Sponsors do not have voting rights, but want to support us financially.
                  <br />
                  The minimum yearly contribution is 20€.
                </p>
                <Slider label="Annual contribution" suffix="€" bind:value={form.contribution} min={20} max={420} log />
              {:else}
                <p>
                  The yearly contribution is <b>84€</b>.
                  <br />
                  Active members have voting rights and are expected to participate in the daily business of NMS.
                </p>
              {/if}
            </div>
          </div>

          <!-- Base Info -->
          <div>
            <h2 class="copy-lg mb-4">About you</h2>
            <div class="flex flex-col gap-2">
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
          </div>

          <!-- Address -->
          <div>
            <h2 class="copy-lg mb-4">Home</h2>
            <div class="flex flex-col gap-2">
              <TextInput
                bind:value={form.address.street}
                label="Street"
                autocomplete="address-line1"
                error={getError('address.street')}
              />
              <div class="flex gap-2 flex-col md:flex-row">
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
          </div>

          <!-- Button -->
          <div>
            {#if error}
              <p class="text-red-800">{error}</p>
            {/if}
            <Button disabled={!parsed.success} type="submit" label="Register" />
          </div>
        </form>
      </fieldset>
    {/if}
  </Content>
</Page>
