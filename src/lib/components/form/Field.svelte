<script lang="ts">
  export let label: string
  export let error: string | null = null
</script>

<label class="flex flex-col w-full">
  <slot />
  <div class="flex justify-between text-sm">
    <span>{label}</span>
    {#if error}
      <span class="text-red-800">{error}</span>
    {/if}
  </div>
</label>
