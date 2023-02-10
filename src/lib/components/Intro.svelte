<script lang="ts">
  import type { PageData } from "../../routes/(web)/events/$types";
  import UpcomingEvent from "./UpcomingEvent.svelte";

  export let data: PageData;
</script>

<p class="text-center mb-0">_ music, art, ...more *</p>
<div class="mt-32" />
<UpcomingEvent {data} />

<style>
  p {
    font-size: max(3vw, 3vh);
    font-variation-settings: "wght" 201;
    max-width: initial;
  }
</style>
