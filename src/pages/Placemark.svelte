<script>
    import climber2 from "/src/assets/climber2.jpg";
    import AddCrag from "./Dashboard.svelte";
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
  </script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"Add a Crag that you have climbed in"} title={"Placemark - Climb Ireland"}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  
  <div class="columns is-vcentered">
    <div class="column has-text-centered">
      <img alt="Climber2" src={climber2} width="300"/>
    </div>
    <div class="column box has-text-centered">
      <h1 class="title is-4">Add a Crag</h1>
      <AddCrag/>
    </div>
  </div>