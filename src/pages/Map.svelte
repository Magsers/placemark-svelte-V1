<script>
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import PlacemarkMap from "../components/PlacemarkMap.svelte";
    import CragMap from "../components/CragMap.svelte";
    import Footer from "../components/Footer.svelte";
  </script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"Maps"} title={"Placemark Services Inc."}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  <div class="columns is-vcentered">
    <div class="column is-one-half">
      <h2 class="tag is-info">Route Map</h2>
  <PlacemarkMap/>
</div>
<div class="column is-one-half">
  <h2 class="tag is-success">Crag Map</h2>
  <CragMap/>
</div>
</div>
<Footer/>