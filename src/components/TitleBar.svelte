<script>
  import climber from "/src/assets/climber.png"
  export let title = "";
  export let subTitle = "";
  import {user} from "../stores.js"
</script>

<div class="box has-text-centered columns m-2">
  <div class="column">
    <img src="{climber}" width="60" alt="img"/>
  </div>
  <div class="column">
    <div class="title is-5"> {title} </div>
    <div class="subtitle is-5"> {subTitle} </div>
  </div>
  <div class="column">
    <i class="fas fa-placemark fa-3x" style="color:rgb(95, 96, 173)" title="Source repo" uk-tooltip></i>
    <!-- pos="bottom" -->
    {#if $user.email}
      <div class="is-size-7">{$user.email} </div>
    {:else}
      <div class="is-size-7">Placemark-Svelte 0.2</div>
    {/if}
  </div>
</div>