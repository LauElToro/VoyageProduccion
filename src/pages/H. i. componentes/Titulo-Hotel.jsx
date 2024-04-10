import { useState , useEffect } from "react";
import silueta from "../H. i. componentes/silueta.jpg"
import Share from "../H. I. SVGS/Share";
import Heart from "../H. I. SVGS/Heart";
import Ubication from "../H. I. SVGS/Ubication";
import Star from "../H. I. SVGS/Star";
import "../hotel-individual.css";




function TituloHotel () {

   
      const [tituloHotels, setTituloHotels] = useState([]);
    
      useEffect(() => {
        async function fetchTituloHotels() {
          try {
            const response = await fetch('https://voyagelbackend.onrender.com/tituloHotel');
    
            if (!response.ok) {
              throw new Error('Error al obtener la información del hotel');
            }
    
            const data = await response.json();
            setTituloHotels(data);
          } catch (error) {
            console.error('Error al obtener la información del hotel:', error);
            // Aquí puedes manejar el error de alguna manera, como mostrando un mensaje al usuario
          }
        }
    
        fetchTituloHotels();
      }, []);
    
    



    return (
        <>
         {tituloHotels.map((tituloHotel) => (
              <div key={tituloHotel.id}>
             
             

        <div className="propietario-auto">
            <div className="propietario-auto-header">
              <div className="propietario-auto-modelo">
                {tituloHotel.Title}
              </div>
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
              <div className="score-number">{tituloHotel.stars}</div>
              <div className="subtext-carousel">({tituloHotel.reviews})</div>
              <div className="ubicacion">
               <Ubication /> {" "}
                {tituloHotel.ubicacion}
              </div>
            </div>
            <div className="propietario-auto-body">
              <img src={silueta} alt="" className="propietario-auto-img" />
              <div className="propietario-auto-nombre">{tituloHotel.NombreProp}</div>
            </div>
            <hr className="linea" />
            <div className="propietario-auto-footer">
              <div className="items-footer">
                <div className="icon-pagecar">
                  <span className="material-icons">people_alt</span>
                </div>
                {tituloHotel.cantPerson} people
              </div>
              <div className="items-footer">
                <div className="icon-pagecar">
                  <i className="material-icons">bed</i>
                </div>
                Bed
              </div>
              <div className="items-footer">
                <div className="icon-pagecar">
                  <span className="material-icons">bathtub</span>
                </div>
                {tituloHotel.cantBaths} baths
              </div>
              <div className="items-footer">
                <div className="icon-pagecar">
                  <span className="material-icons">meeting_room</span>
                </div>
                {tituloHotel.cantBeds} bedrooms
              </div>
            </div>
          </div>
          </div>
            ))}

        </>
);
}


export default TituloHotel;