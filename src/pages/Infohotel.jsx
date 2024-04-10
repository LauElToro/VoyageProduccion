import React from "react";
import "./infohotel.css";
import Map from "./Map";
import Tarjethotelsearch from "././Tarjetshotelsearcher/Tarjethotelsearch";

import Filter1 from "./Filters/Filter1";
import Filter2 from "./Filters/Filter2";
import Filter3 from "./Filters/Filter3";
import Filter4 from "./Filters/Filter4";
function Infohotel() {
  return (
    <div className="info-container">
      <div className="mapa-container">
        <Map />
      </div>
      <div className="hotel-title">Stays in Tokyo</div>
      <div className="hotel-subtitle">233 stays·Aug 12 - 18 · 2 Guests</div>

      <div className="filters">
        <Filter1 />
        <Filter2 />
        <Filter3 />
        <Filter4 />
      </div>
        <Tarjethotelsearch />
        <Tarjethotelsearch />
        <Tarjethotelsearch />
        <Tarjethotelsearch />
        
    </div>
  );
}

export default Infohotel;
