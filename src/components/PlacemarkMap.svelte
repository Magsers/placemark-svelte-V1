<script>
    // import 'leaflet/dist/leaflet.css';
    import {LeafletMap} from '../services/leaflet-map';
    import {getContext, onMount} from "svelte";
  
  
    const placemarkService = getContext("PlacemarkService");

    const mapConfig = {
        location: {lat: 52.160858, lng: -7.152420},
        zoom: 8,
        minZoom: 1,
    };

    let map = null;
    
    onMount(async () => {
        map = new LeafletMap("placemark-map", mapConfig);
        map.showZoomControl();
        map.addLayerGroup('Diff');
        map.addLayerGroup('V Diff');
        map.addLayerGroup('Severe');
        map.addLayerGroup('Hard Severe');
        map.addLayerGroup('Very Severe');
        map.addLayerGroup('Hard Very Severe');
        map.addLayerGroup('E1');
        map.addLayerGroup('E2');
        map.addLayerGroup('E3');
        map.addLayerGroup('E4');
        map.addLayerGroup('E5');
        map.addLayerGroup('E6');
        map.addLayerGroup('E7');
        map.showLayerControl();
                
        const routes = await placemarkService.getRoutes();
        routes.forEach(route => {
            addPlacemarkMarker(route);
        });
    });

    export function addPlacemarkMarker(route) {
        const routeStr = `${route.crag.title} ${route.name} ${route.grade}  `;
        if (route.grade =='Diff') {
            map.addMarker({lat: route.lat, lng: route.lng, grade: route.grade}, routeStr, "Diff");
        } else if (route.grade =='V Diff') { 
            map.addMarker({lat: route.lat, lng: route.lng, grade: route.grade}, routeStr, "V Diff");
        } else if (route.grade =='Severe') { 
            map.addMarker({lat: route.lat, lng: route.lng, grade: route.grade}, routeStr, "Severe");
        } else if (route.grade =='Hard Severe') { 
            map.addMarker({lat: route.lat, lng: route.lng, grade: route.grade}, routeStr, "Hard Severe");
        } else if (route.grade =='Very Severe') { 
            map.addMarker({lat: route.lat, lng: route.lng, grade: route.grade}, routeStr, "Very Severe");
        } else if (route.grade =='Hard Very Severe') { 
            map.addMarker({lat: route.lat, lng: route.lng, grade: route.grade}, routeStr, "Hard Very Severe");
        } else if (route.grade =='E1') { 
            map.addMarker({lat: route.lat, lng: route.lng, grade: route.grade}, routeStr, "E1");
        } else if (route.grade =='E2') { 
            map.addMarker({lat: route.lat, lng: route.lng, grade: route.grade}, routeStr, "E2");
        } else if (route.grade =='E3') { 
            map.addMarker({lat: route.lat, lng: route.lng, grade: route.grade}, routeStr, "E3");
        } else if (route.grade =='E4') { 
            map.addMarker({lat: route.lat, lng: route.lng, grade: route.grade}, routeStr, "E4");
        } else if (route.grade =='E5') { 
            map.addMarker({lat: route.lat, lng: route.lng, grade: route.grade}, routeStr, "E5");
        } else if (route.grade =='E6') { 
            map.addMarker({lat: route.lat, lng: route.lng, grade: route.grade}, routeStr, "E6");
        } else if (route.grade =='E7') {  
            map.addMarker({lat: route.lat, lng: route.lng, grade: route.grade}, routeStr, "E7");          
        } 
        map.moveTo(11, {lat: route.lat, lng: route.lng});
    }

  </script>
  
  <div class="box" id="placemark-map" style="height:300px; width:75%">
  </div>