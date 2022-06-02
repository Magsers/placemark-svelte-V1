<script>
    // import 'leaflet/dist/leaflet.css';
    import {LeafletMap} from '../services/leaflet-map';
    import {getContext, onMount} from "svelte";

    const placemarkService = getContext("PlacemarkService");  
  
    const cragmapConfig = {
        location: {lat: 52.160858, lng: -7.152420},
        zoom: 8,
        minZoom: 1,
    };

    let cragmap = null;
  
    onMount(async () => {
        cragmap = new LeafletMap("crag-map", cragmapConfig);
        cragmap.showZoomControl();
        cragmap.showLayerControl();
        cragmap.addLayerGroup('All Crags');
  
    const crags = await placemarkService.getCrags();
        crags.forEach(crag => {
            addCragMarker(crag);
        });
    });

    export function addCragMarker(crag) {
        const cragStr = `${crag.title} ${crag.lat} ${crag.lng}  `;
        cragmap.addMarker({lat: crag.lat, lng: crag.lng}, cragStr, "All Crags");
    }
  </script>
  
  <div class="box" id="crag-map" style="height:300px; width:75%">
  </div>