<script>
  import { createEventDispatcher, getContext, onMount } from "svelte";
  import Coordinates from "./Coordinates.svelte";

  const dispatch = createEventDispatcher();
  const placemarkService = getContext("PlacemarkService");

  let routeClimbed = "";
  let lat = 52.160858;
  let lng = -7.15242;
  let height = "";
  let cragList = [];
  let selectedCrag = "";
  let grades = [
    "Diff",
    "V Diff",
    "Severe",
    "Hard Severe",
    "Very Severe",
    "Hard Very Severe",
    "E1",
    "E2",
    "E3",
    "E4",
    "E5",
    "E6",
    "E7",
  ];
  let selectedGrade = "";
  let message = "";

  onMount(async () => {
    cragList = await placemarkService.getCrags();
    console.log(cragList);
  });

  async function addRoute() {
    if (selectedCrag && selectedGrade && routeClimbed) {
      const cragNames = selectedCrag.split(",");
      const crag = cragList.find((crag) => crag.title == cragNames[0]);
      const route = {
        name: routeClimbed,
        grade: selectedGrade,
        height: height,
        crag: crag._id,
        lat: lat,
        lng: lng,
      };
      const success = await placemarkService.addRoute(route);
      if (!success) {
        message = "Adding a route not complete - some error occurred";
        return;
      }
      message = `Thanks! You added the route ${route.name} to ${crag.title}`;
      dispatch("message", {
        route: route,
      });
    } else {
      message = "Please select crag, grade and add a route";
    }
  }
</script>

<form on:submit|preventDefault={addRoute}>
  <div class="field">
    <h2 class="title is-2">Add a Route</h2>
  </div>
  <div class="field">
    <label class="label" for="route">Route Name</label>
    <input
      bind:value={routeClimbed}
      class="input"
      id="route"
      name="route"
      type="string"
    />
  </div>
  <div class="field">
    <label class="label" for="route">Height (m) </label>
    <input
      bind:value={height}
      class="input"
      id="height"
      name="height"
      type="string"
    />
  </div>

  <div class="field is-horizontal">
    <div class="container is-fluid">
      <div class="field">
        <label class="label" for="route">Grade</label>
        <div class="control is-expanded has-icons-left">
          <div class="select">
            <select bind:value={selectedGrade}>
              {#each grades as grade}
                <option>{grade}</option>
              {/each}
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="container is-fluid">
      <div class="field">
        <label class="label" for="route">Crag</label>
        <div class="control is-expanded has-icons-right">
          <div class="select">
            <select bind:value={selectedCrag}>
              {#each cragList as crag}
                <option>{crag.title}</option>
              {/each}
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Coordinates bind:lat bind:lng />
  <div class="field">
    <div class="control">
      <button class="button is-link is-primary">Add a route</button>
    </div>
  </div>
  <div class="box-is-centered">
    {message}
  </div>
</form>
