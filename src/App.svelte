<script>
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Dashboard from "./pages/Dashboard.svelte";
  import Report from "./pages/Report.svelte";
  import Router from "svelte-spa-router";
  import Crag from "./pages/Crag.svelte";
  import {PlacemarkService} from "./services/placemark-service";
  import {setContext} from "svelte";
  import Map from "./pages/Map.svelte";
  import Chart from "./pages/Chart.svelte";

  setContext("PlacemarkService", new PlacemarkService("https://infinite-eyrie-16203.herokuapp.com"));

  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/main": Main,
    "/dashboard": Dashboard,
    "/report": Report,
    "/map": Map,
    "/charts": Chart,
    "/crag/*" : Crag,
    "/logout": Main,
    "/crag/*/deleteroute/*" : Crag

  }

</script>

<div class="container">
  <Router {routes}/>
</div>