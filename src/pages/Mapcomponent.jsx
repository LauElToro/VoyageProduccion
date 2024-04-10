import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapComponent = () => {
    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();

  return <div id="map" style={{ height: "500px" }}></div>;
};

export default MapComponent;
