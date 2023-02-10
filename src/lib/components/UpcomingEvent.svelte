<script lang="ts">
  import Icon from "./Icon.svelte";
  import { _ } from "svelte-i18n";
  import type { PageData } from "../../routes/(web)/$types";

  export let data: PageData;
</script>

<!-- <h1>Upcoming Event</h1> -->
<h1 class="mb-10 h-line"><span>Upcoming Event</span></h1>
<a href={`/events/${data.events[0].event.slug}`}>
  <div class="wrapper py-8 flex justify-center items-end">
    <div class="details mono">
      <div><Icon inline name="date" /> {data.events[0].event.date}</div>
      <div><Icon inline name="location" /> {data.events[0].event.location}</div>
      <div>
        <Icon inline name="type" />
        {$_(`events.types.${data.events[0].event.type}`)}
      </div>
    </div>
    <div class="text">
      <h2>{$_(data.events[0].keys.title)}</h2>
    </div>
    <div class="icon flex">
      <Icon name="arrow_right" />
    </div>
  </div>
</a>

<style>
  h1 {
    font-variation-settings: "wght" 300;
    font-size: max(2vw, 2rem);
  }
  .h-line {
    line-height: 0;
    text-align: center;
  }
  .h-line span {
    display: inline-block;
    position: relative;
  }
  .h-line span:before,
  .h-line span:after {
    content: "";
    position: absolute;
    height: 1px;
    border-top: 1px solid #000;
    top: 0;
    width: 100%;
  }
  .h-line span:before {
    right: 100%;
    margin-right: 12px;
  }

  @media (max-width: 480px) {
    .h-line span:before,
    .h-line span:after {
      content: "";
      border: none;
      position: static;
    }

    .h-line span {
      background: inherit;
      position: static;
    }
  }

  .wrapper {
    box-shadow: 0 var(--line-size) 0 0 currentColor;
    transition: var(--transition);
  }
  a:hover .wrapper {
    box-shadow: 0 calc(var(--line-size) * 2) 0 0 currentColor;
    transform: translateY(-0.5rem);
  }

  .details {
    width: 16rem;
  }

  .icon {
    font-size: 2rem;
    width: 2rem;
  }

  .text {
    padding: 0 1rem;
    flex: 1;
  }
  @media (max-width: 70rem) {
    .wrapper {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
  @media (max-width: 50rem) {
    .wrapper {
      flex-direction: column;
      align-items: flex-start;
    }
    .wrapper > div {
      margin: 0;
      text-align: left;
    }
    h2 {
      margin-left: -0.075em;
      margin-top: 0.75rem;
      font-size: max(10vw, 2.5rem) !important;
    }
    .icon {
      display: none;
    }
    .text {
      padding: 0;
    }
  }

  h2 {
    font-variation-settings: "wght" 300;
    font-size: min(4vw, 4rem);
  }
</style>
