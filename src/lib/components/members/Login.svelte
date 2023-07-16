<script lang="ts">
  import TextInput from '$lib/components/form/TextInput.svelte'
  import Button from '../form/Button.svelte'

  let email: string
  let submitted: boolean = false

  async function submit() {
    fetch('/members/login', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
    })
    submitted = true
  }
</script>

<div class="flex flex-col gap-4 copy-md">
  {#if submitted}
    <p>You got mail from us 💌</p>
  {:else}
    <div class="copy-lg">Login</div>
    <form class="flex flex-col gap-2" on:submit|preventDefault={submit}>
      <TextInput type="email" label="E-Mail" bind:value={email} />
      <Button type="submit" label="Login" />
    </form>
    <p>or <a href="/join">join here</a>.</p>
  {/if}
</div>
