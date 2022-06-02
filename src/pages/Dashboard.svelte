<script>
  import AddRouteForm from "../components/AddRouteForm.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import Footer from "../components/Footer.svelte";
  // import RoutesByCrag from "../components/RoutesByCrag.svelte";
  import PlacemarkMap from "../components/PlacemarkMap.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
  
  let placemarkMap = null;
  let placemarkChart = null;

  function routeAdded(event) {
    console.log(event.detail.route);
    placemarkMap.addPlacemarkMarker(event.detail.route);
    // placemarkChart.refreshChart();
  }

</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Please add a Route"} title={"Placemark Services Inc."}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<div class="columns is-vcentered">
  <div class="column has-text-centered">
    <PlacemarkMap bind:this={placemarkMap}/>
  </div>
  <!-- <div class="column has-text-centered">
    <RoutesByCrag bind:this={placemarkChart}/>
  </div> -->
  <div class="column box has-text-centered">
    <h1 class="title is-4">Tick off your Routes!!</h1>
    <AddRouteForm on:message={routeAdded}/>
  </div>
</div>
<Footer />