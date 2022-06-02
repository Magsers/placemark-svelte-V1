<script>
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";
    
    const placemarkService = getContext("PlacemarkService");

    let routesByCrag = {
    labels: [],
    datasets: [
       {
        values: []
       }
      ]
    }

    function populateByCrag(routeList, crags) {
        routesByCrag.labels = [];
        crags.forEach(crag => {
        routesByCrag.labels.push(`${crag.title}`)
        routesByCrag.datasets[0].values.push(0);
    })
        crags.forEach((crag, i) => {
        routeList.forEach(route => {
        if (route.crag._id == crag._id) {
            routesByCrag.datasets[0].values[i] ++;
        }
      });
    });
  }

  export async function refreshChart() {
    let routeList = await placemarkService.getRoutes();
    let crags = await placemarkService.getCrags()
    populateByCrag(routeList, crags);
  }

  onMount(async () => {
        let routeList = await placemarkService.getRoutes();
        let crags = await placemarkService.getCrags();
        populateByCrag(routeList, crags);
    });
</script>

<h1 class="title is-4">Number of Routes per Crag</h1>

<Chart data={routesByCrag} type="pie"/>
