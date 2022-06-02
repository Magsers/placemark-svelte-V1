<script>
  import {getContext, onMount} from 'svelte'
  // export let deleteHandler = null;
  const placemarkService = getContext("PlacemarkService");
  let routeList = [];

  onMount(async () => {
    routeList = await placemarkService.getRoutes();
  });

</script>

<table class="table is-fullwidth">
  <thead>
    <th>Route</th>
    <th>Grade</th>
    <th>Climber</th>
    <th>Crag</th>
  </thead>
  <tbody>
    {#each routeList as route}
      <tr>
        <td>
          {route.name}
        </td>
        <td>
          {route.grade}
        </td>
        <td>
          {route.climber.firstName},  {route.climber.lastName}
        </td>
        <td><a href="/#/crag/{route.crag._id}">
        {route.crag.title}</a>
        </td>
        <!-- <td>
          {#if deleteHandler}
          <button on:click={deleteHandler(route._id)} class="fas fa-trash-alt"></button>
          <a href="/#/crag/{route.crag._id}/deleteoute/{route._id}" class="ui icon button">
                 <i class="fas fa-trash-alt"></i>
             </a> 
         </td> -->
      </tr>
    {/each}
  </tbody>
</table>