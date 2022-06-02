<script>
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import RoutesByGrade from "../components/RoutesByGrade.svelte";
    import RoutesByCrag from "../components/RoutesByCrag.svelte";
    import Footer from "../components/Footer.svelte";

</script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"Placemark Analytics"} title={"Placemark Services Inc."}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  
  <div class="columns">
    <div class="column has-text-centered">
      <RoutesByGrade/>
    </div>
    <div class="column has-text-centered">
      <RoutesByCrag/>
    </div>
  </div>
  <Footer/>