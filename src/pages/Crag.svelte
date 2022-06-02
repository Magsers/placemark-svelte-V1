<script>
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import CragImage from "../components/CragImage.svelte";
    import CragInfo from "../components/CragInfo.svelte"; 
    import Footer from "../components/Footer.svelte"; 
    import { getContext, onMount } from "svelte";

    const placemarkService = getContext("PlacemarkService");

    let crag;  
    export let params = {}

   onMount(async () => {
      crag = await placemarkService.getCragById(params.wild);
      console.log(crag.title);
    });

  //   async function deleteImage(img) {
  //   await cloudinary.v2.uploader.destroy(img, {});
  // },

</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"Crag Information"} title={"Climb Ireland"}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
</div>

{#if crag}
<div class="columns is-vcentered">
    <div class="column is-half">
      <h1 class="title is-4">Crag Information</h1>
      <CragInfo title={crag.title} approach={crag.approach}/>
    </div>
    <div class="column is-half">
    <CragImage cragImg={crag.img} title={crag.title}/>
  </div>
</div>
{/if}
<Footer />