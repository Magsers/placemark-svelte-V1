<script>
    import RouteList from "../components/RouteList.svelte";
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import RoutesByGrade from "../components/RoutesByGrade.svelte";
    import Footer from "../components/Footer.svelte";
    import { getContext } from "svelte";

    const placemarkService = getContext("PlacemarkService");

    let placemarkMap = null;
    let routes = [];
    let deletedroutes = [];

    function routeAdded(event) {
    placemarkMap.addPlacemarkMarker(event.detail.route);
  }

  async function deleteRoute(_id) {
    const route = await placemarkService.getRouteById((route) => route._id == id);
    const deleteroute = routes[route];
    routes.splice(route, 1);
    routes = [...routes];
    deletedroutes.push(deleteroute);
    deletedroutes = [...deletedroutes];
  }

  </script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"Placemarks so far..."} title={"Placemark - Climb Ireland"}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  
  <div class="columns">
    <div class="column has-text-centered">
      <RoutesByGrade bind:this={placemarkMap}/>
    </div>
    <div class="column box has-text-centered">
      <h1 class="title is-4">Routes Climbed to date</h1>
      <RouteList deleteHandler="{deleteRoute}"/>
    </div>
  </div>
  <Footer/>