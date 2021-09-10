<script lang="ts">
  import rand from 'randomcolor'
  import { onMount } from 'svelte'

  export let text: string
  let letters: { letter: string; color: string }[] | null = null

  onMount(() => {
    letters = text.split('').map((letter) => ({
      letter,
      color: rand({ luminosity: 'dark' }),
    }))
  })
</script>

{#if letters}
  {#each letters as { letter, color }}
    <span style="color: {color}">{letter}</span>
  {/each}
{:else}
  {text}
{/if}
