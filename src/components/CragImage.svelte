<script>
// import Crag from "src/pages/Crag.svelte";
export let cragImg; 
export let title; 
// export let cragId; 
    // export let deleteHandler = null;
</script>

   
       <div class="columns is-centered">
        <img src="{cragImg}" width="450" height="300" alt="img"/></div>
        <div class="columns is-centered">
            <caption>{title}</caption>
            </div>
        <!-- <a href="/crag/{cragId}/deleteimage/{cragImg}" class="ui icon button">
            <i class="fas fa-trash-alt"></i>
        </a> -->
        <!-- {#if deleteHandler}
            <button on:click={deleteHandler(cragImg)} class="button">Delete</button>
          {/if} -->

   