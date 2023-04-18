<script lang="ts">
  export let choices: { value: string; label: string }[]
  export let value: string
</script>

<div class="flex flex-col gap-1">
  {#each choices as choice}
    <label
      class="flex items-center cursor-pointer bg-[var(--bg-color)] p-1 border-solid border-[0.075rem] text-base border-current"
    >
      <div
        class="border-solid border-[0.075rem] border-current w-4 h-4 m-1 mr-2"
        class:bg-current={value === choice.value}
      />
      <input class="hidden" type="radio" bind:group={value} value={choice.value} />
      {choice.label}
    </label>
  {/each}
</div>
