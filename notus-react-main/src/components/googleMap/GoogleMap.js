// import mapboxgl from 'mapbox-gl'
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxpcmJpMTk5NiIsImEiOiJjbDhmbWZmZDQwcGtrNDJ0ZmRiMHhqbDJ0In0.2Ldpy5E84q7KKMT60ENbKQ'



const GoogleMap = () => {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState( 51.41078054233039);
    const [lat, setLat] = useState(35.74262429194959);
    const [zoom, setZoom] = useState(15);


    // 35.74262429194959, 51.41078054233039
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom
        });
      });

  return (

        <div ref={mapContainer} className="map-container"></div>
  )
}

export default GoogleMap