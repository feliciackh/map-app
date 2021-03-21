import React, { useState } from "react";
import ReactMapboxGl, { GeoJSONLayer, Popup } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { data } from "../data/boat_ramps.json";
import styled from "styled-components";

const MapboxMap = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZmVsaWNpYWNraCIsImEiOiJja21pMWFjNmcwY3Z5MnduYTAwbGF1enBjIn0.vdbG9OvOKPyIL-Yrgs9WAw",
});

const mapStyle = {
  flex: 1,
  height: "50vh",
  width: "100vw",
};

const symbolLayout = {
  "text-field": "{place}",
  "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
  "text-offset": [0, 0.6],
  "text-anchor": "top",
};
const symbolPaint = {
  "text-color": "pink",
};

const lineLayout = { "line-join": "bevel" };
const linePaint = {
  "line-color": "red",
};

const StyledPopup = styled.div`
  background: white;
  color: #3f618c;
  font-weight: 400;
  padding: 5px;
  border-radius: 2px;
`;

const polygonPaint = {
  "fill-color": "#ff0000",
  "fill-opacity": 0.3,
};

const filteredData = (material) => {
  if (!material) {
    return data;
  }

  const myData = Object.assign({ ...data });

  myData.features = myData.features.filter(
    (feature) => feature.properties.material === material
  );

  myData.totalFeatures = myData.features.length;
  return myData;
};

export const Map = ({ material }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [center, setCenter] = useState([153.399994, -28.016666]);
  const [properties, setProperties] = useState({});

  const geojson = filteredData(material);

  const onClickHandler = (map, evt) => {
    const features = map.queryRenderedFeatures(evt.point);
    if (features && features[0] && features[0].properties.rec_id) {
      setProperties(features[0].properties);
      setCenter([evt.lngLat.lng, evt.lngLat.lat]);
      setShowPopup(true);
    }
  };

  return (
    <>
      <MapboxMap
        style="mapbox://styles/mapbox/streets-v9"
        center={center}
        containerStyle={mapStyle}
        onClick={(map, evt) => {
          onClickHandler(map, evt);
        }}
        flyToOptions={{ speed: 0.8 }}
      >
        <GeoJSONLayer
          data={geojson}
          lineLayout={lineLayout}
          linePaint={linePaint}
          symbolLayout={symbolLayout}
          symbolPaint={symbolPaint}
          fillPaint={polygonPaint}
        />
        {showPopup && (
          <Popup coordinates={center} onClick={() => setShowPopup(false)}>
            <StyledPopup>
              <div>Ramp size: {properties.area_}</div>
              <div>Ramp material: {properties.material}</div>
            </StyledPopup>
          </Popup>
        )}
      </MapboxMap>
    </>
  );
};
