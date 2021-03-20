import React from "react";
import ReactMapboxGl, { GeoJSONLayer } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { data } from "../data/boat_ramps.json";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZmVsaWNpYWNraCIsImEiOiJja21pMWFjNmcwY3Z5MnduYTAwbGF1enBjIn0.vdbG9OvOKPyIL-Yrgs9WAw",
});

const mapStyle = {
  flex: 1,
  height: "50vh",
  width: "50vw",
};

const symbolLayout = {
  "text-field": "{place}",
  "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
  "text-offset": [0, 0.6],
  "text-anchor": "top",
};
const symbolPaint = {
  "text-color": "white",
};

const circleLayout = { visibility: "visible" };
const circlePaint = {
  "circle-color": "white",
};

export const TestMap = () => {
  const onClickCircle = (evt) => {
    console.log(evt);
  };

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      center={[153.29, -27.89]}
      containerStyle={mapStyle}
    >
      <GeoJSONLayer
        data={data}
        circleLayout={circleLayout}
        circlePaint={circlePaint}
        onCircleClick={onClickCircle}
        symbolLayout={symbolLayout}
        symbolPaint={symbolPaint}
      />
    </Map>
  );
};
