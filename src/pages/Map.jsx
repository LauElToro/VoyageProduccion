import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { DivIcon } from "leaflet";
import "./map.css";

function Map() {
  const customMarker = new DivIcon({
    className: "custom-marker",
    html: '<div class="marker-text">$30</div>',
  });

  return (
    <div>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        className="mapa"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]} icon={customMarker}></Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
