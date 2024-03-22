import React from "react";
import imgsug from "../../imagenes/casa.jpeg";
import "./suggestiondestins.css";

function Suggestion1() {
  const imgSugerencia = imgsug;
  const titulo = 'Enjoy the great cold'
  const propiedades = '37.000 propiertis'
   


  return (
    <div>
      <img className="imgdestin" src={imgSugerencia} alt="" />
      <div className="text">{titulo}</div>
      <div className="propiertis">{propiedades}</div>
    </div>
  );
}

export default Suggestion1;
