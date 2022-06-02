<script>
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";
  
    const placemarkService = getContext("PlacemarkService");
    
    let totalByGrade = {
      labels: ["Diff", "V Diff", "Severe", "Hard Severe", "Very Severe", "Hard Very Severe", "E1", "E2", "E3", "E4", "E5", "E6", "E7"],
      datasets: [
        {
          values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
      ]
    };

    function populateByGrade(routeList) {
    routeList.forEach(route => {
       if (route.grade == "Diff") {
        totalByGrade.datasets[0].values[0] ++
    }  if (route.grade == "V Diff") {
        totalByGrade.datasets[0].values[1] ++
    }  if (route.grade == "Severe") {
        totalByGrade.datasets[0].values[2] ++
    }  if (route.grade == "Hard Severe") {
        totalByGrade.datasets[0].values[3] ++
    }  if (route.grade == "Very Severe") {
        totalByGrade.datasets[0].values[4] ++
    }  if (route.grade == "Hard Very Severe") {
        totalByGrade.datasets[0].values[5] ++
    }  if (route.grade == "E1") {
        totalByGrade.datasets[0].values[6] ++
    }  if (route.grade == "E2") {
        totalByGrade.datasets[0].values[7] ++
    }  if (route.grade == "E3") {
        totalByGrade.datasets[0].values[8] ++
    }  if (route.grade == "E4") {
        totalByGrade.datasets[0].values[9] ++
    }  if (route.grade == "E5") {
        totalByGrade.datasets[0].values[10] ++
    }  if (route.grade == "E6") {
        totalByGrade.datasets[0].values[11] ++
    } else if (route.grade == "E7") {
        totalByGrade.datasets[0].values[12] ++
      }
  });
}
onMount(async () => {
    let routeList = await placemarkService.getRoutes();
    populateByGrade(routeList);
  });

</script>

<h1 class="title is-4">Routes By Grade</h1>
<Chart data={totalByGrade} type="bar"/>
