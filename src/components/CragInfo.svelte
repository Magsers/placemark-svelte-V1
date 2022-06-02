<script>
  import {getContext, onMount} from 'svelte'
  import AddRouteForm from "../components/AddRouteForm.svelte";
  export let title;
	export let approach;

  const placemarkService = getContext("PlacemarkService");
  let routeList = [];

  onMount(async () => {
    routeList = await placemarkService.getRoutes();
  });

</script>

<table class="table is-fullwidth">
  <thead>
    <th>Crag Name</th>
    <th>Approach</th>
  </thead>
  <tbody>
      <tr>
        <td>
          {title}
        </td>
        <td>
          {approach}
        </td>
      </tr>
    </tbody>
    </table>
      <table class="table is-fullwidth">
        <thead>
          <th>Route Name</th>
          <th>Grade</th>
          <th>Height (m) </th>
          <th>Description</th>
        </thead>
        <tbody>
          {#each routeList as route}
          {#if route.crag.title == title}
          <tr>
            <td>
              {route.name}
            </td>
            <td>
              {route.grade}
            </td>
            <td>
              {route.height}
            </td>
            <td>
              {route.description}
            </td>
          </tr>  
          {/if}
          {/each}
  </tbody>
</table>