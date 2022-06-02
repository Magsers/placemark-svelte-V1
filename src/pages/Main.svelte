<script>
  import climber from "/src/assets/climber.png";
  import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import Footer from "../components/Footer.svelte";
  import {getContext} from "svelte";
  

  const placemarkService = getContext("PlacemarkService");
  placemarkService.logout();

</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar title={"Placemark Climb Ireland"} subTitle={"Sign up or Log in"}/>
  </div>
  <div class="column">
    <WelcomeNavigator/>
  </div>
</div>

<div class="columns is-vcentered content">
  <div class="column has-text-centered">
    <img width="300" src="{climber}" alt="climber">
  </div>
  <div class="column">
    <h1 class="title">Placemark - Climb Ireland</h1>
    <p>Keep track of what routes you have climbed!</p>
  </div>
</div>
<Footer/>