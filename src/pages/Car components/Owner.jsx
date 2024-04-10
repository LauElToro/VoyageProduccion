import "../pagecar.css";
import Share from "../H. I. SVGS/Share";
import Heart from "../H. I. SVGS/Heart";
import Ubication from "../H. I. SVGS/Ubication";
import Star from "../H. I. SVGS/Star";
import silueta from "../H. i. componentes/silueta.jpg"
import Person from "../H. I. SVGS/Person";
import CarFront from "../H. I. SVGS/Car-Front";
import Bags from "../H. I. SVGS/Bags";
import { useState , useEffect } from "react";


function Owner (){

  

 

  const [owner, setOwner] = useState([]);

  useEffect(() => {
    async function fetchOwners() {
      try {
        const response = await fetch('/owner');

        if (!response.ok) {
          throw new Error('Error al obtener la información del propietario del auto');
        }

        const data = await response.json();
        setOwner(data);
      } catch (error) {
        console.error('Error al obtener la información del propietario del auto:', error);
        // Aquí puedes manejar el error de alguna manera, como mostrando un mensaje al usuario
      }
    }

    fetchOwners();
  }, []);






  return (

      <>
       {owner.map((owner) => (
          <li key={owner.id}>
            <p>Título del auto: {owner.TitleCar}</p>
            <p>Estrellas: {owner.stars}</p>
            <p>Reseñas: {owner.reviews}</p>
            <p>Ubicación: {owner.location}</p>
            <p>Propietario: {owner.Propiet}</p>
            <p>Asientos: {owner.Seats}</p>
            <p>Clase de auto: {owner.claseAuto}</p>
            <p>Tamaño del baúl: {owner.Baul}</p>
          </li>
        ))}
      <div className="propietario-auto">
            <div className="propietario-auto-header">
              <div className="propietario-auto-modelo">{owner.TitleCar}</div>
              <div className="share-save">
                <div className="propietario-auto-share">
                  <div className="icon-pagecar">
                   <Share />
                  </div>
                  Share
                </div>
                <div className="propietario-auto-save">
                  <div className="icon-pagecar">
                    <Heart />
                  </div>
                  Save
                </div>
              </div>
            </div>
            <div className="puntaje-ubicacion">
              <div className="iconstar">
                <Star />
              </div>
              <div className="score-number">{owner.stars}</div>
              <div className="subtext-carousel">({owner.reviews})</div>
              <div className="ubicacion">
                <Ubication />{" "}
                {owner.location}
              </div>
            </div>
            <div className="propietario-auto-body">
              <img src={silueta} alt="" className="propietario-auto-img" />
              <div className="propietario-auto-nombre">{owner.Propiet}</div>
            </div>
            <hr className="linea" />
            <div className="propietario-auto-footer">
              <div className="items-footer">
                <div className="icon-pagecar">
                  <Person />
                </div>
                {owner.Seats} Seats
              </div>
              <div className="items-footer">
                <div className="icon-pagecar">
                  <CarFront />
                </div>
                {owner.claseAuto}
              </div>
              <div className="items-footer">
                <div className="icon-pagecar">
                  <Bags />
                </div>
                {owner.Baul} Bags
              </div>
            </div>
          </div>
        </>
        );
     }


     export default Owner;