<script>
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";
    
    const placemarkService = getContext("PlacemarkService");

    let routesPerUser = {
    labels: [],
    datasets: [
       {
        values: []
       }
      ]
    }

    function populateByUser(routeList, users) {
        routesPerUser.labels = [];
        users.forEach(user => {
        routesPerUser.labels.push(`${user.firstName + " " + user.lastName}`)
        routesPerUser.datasets[0].values.push(0);
    })
        users.forEach((user, i) => {
        routeList.forEach(route => {
        if (route.climber._id == user._id) {
            routesPerUser.datasets[0].values[i] ++;
        }
      });
    });
  }

  export async function refreshChart() {
    let routeList = await placemarkService.getRoutes();
    let users = await placemarkService.getUsers()
    populateByUser(routeList, users);
  }

  onMount(async () => {
        let routeList = await placemarkService.getRoutes();
        let users = await placemarkService.getUsers();
        populateByUser(routeList, users);
    });
</script>

<h1 class="title is-4">Number of Routes per User</h1>

<Chart data={routesPerUser} type="line"/>
