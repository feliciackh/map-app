// import React, { useState } from "react";
// import MapGL, { GeolocateControl } from "react-map-gl";
//
// // const geolocateStyle = {
// //   float: "left",
// //   margin: "50px",
// //   padding: "10px",
// // };
//
// export default function Map() {
//   const mapContainer = useRef();
//   // const [viewport, setViewport] = useState({
//   //   width: "50%",
//   //   height: "100vh",
//   //   // The latitude and longitude of the center of London
//   //   latitude: 51.5074,
//   //   longitude: -0.1278,
//   //   zoom: 10,
//   // });
//
//   const map = new mapboxgl.Map({
//     container: mapContainer.current,
//     style: "mapbox://styles/mapbox/streets-v11",
//     center: [-121.403732, 40.492392],
//     zoom: 9,
//   });
//
//   map.on("load", function () {
//     map.addSource("geo_data", {
//       type: "geojson",
//       data: "/calculations.js",
//       buffer: 1,
//       maxzoom: 14,
//       generateId: true,
//     });
//   });
//
//   return (
//     <div>
//       Hello
//       {/*<MapGL*/}
//       {/*  container="map"*/}
//       {/*  mapStyle="mapbox://styles/mapbox/streets-v11"*/}
//       {/*  mapboxApiAccessToken="pk.eyJ1IjoiZmVsaWNpYWNraCIsImEiOiJja21pMWFjNmcwY3Z5MnduYTAwbGF1enBjIn0.vdbG9OvOKPyIL-Yrgs9WAw"*/}
//       {/*  {...viewport}*/}
//       {/*  onViewportChange={(nextViewport) => setViewport(nextViewport)}*/}
//       {/*>*/}
//       {/*  <GeolocateControl*/}
//       {/*    style={geolocateStyle}*/}
//       {/*    positionOptions={{ enableHighAccuracy: true }}*/}
//       {/*    trackUserLocation={true}*/}
//       {/*  />*/}
//       {/*</MapGL>*/}
//       Hello again
//     </div>
//   );
// }
