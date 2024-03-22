import imgHotelindividual from "../imagenes/img-hotel-individual.jpg";
import "./hotel-individual.css";
import React, { useState, useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./pagecar.css";
import TituloHotel from "./H. i. componentes/Titulo-Hotel";
import InfoHotel from "./H. i. componentes/Info-Hotel";
import Amenities from "./H. i. componentes/Amenities";
import RoomRates from "./H. i. componentes/Room-rates";
import PriceHotel from "./H. i. componentes/Price-Hotel";

function Hotelindividual() {
  

  

  return (
    <div className="H-I-body">
      <div className="H-I-img-container">
        <div>
          <img
            className="img-hotel-individual1"
            src={imgHotelindividual}
            alt=""
          />
        </div>
        <div className="H-I-columna-img">
          <img
            className="img-hotel-individual2"
            src={imgHotelindividual}
            alt=""
          />
          <img
            className="img-hotel-individual2"
            src={imgHotelindividual}
            alt=""
          />
        </div>
        <div className="H-I-columna-img">
          <img
            className="img-hotel-individual2"
            src={imgHotelindividual}
            alt=""
          />
          <img
            className="img-hotel-individual2"
            src={imgHotelindividual}
            alt=""
          />
        </div>
      </div>
      <div className="carta-auto-contenedor">
        <div>
          <TituloHotel />
          <InfoHotel />
          <Amenities />
          <RoomRates />

         
         
        </div>
        <div>
          
          <PriceHotel />
        </div>
        
      </div>
    </div>
  );
}

export default Hotelindividual;
