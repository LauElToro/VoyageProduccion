import "../hotel-individual.css";

import { useState , useEffect } from "react";
 




function RoomRates () {
    


 
  const [roomRates, setRoomRates] = useState([]);

  useEffect(() => {
    async function fetchRoomRates() {
      try {
        const response = await fetch('https://voyagelbackend.onrender.com/roomRates');

        if (!response.ok) {
          throw new Error('Error al obtener las tarifas de habitación');
        }

        const data = await response.json();
        setRoomRates(data);
      } catch (error) {
        console.error('Error al obtener las tarifas de habitación:', error);
        // Aquí puedes manejar el error de alguna manera, como mostrando un mensaje al usuario
      }
    }

    fetchRoomRates();
  }, []);

  






    return (
      <>
      {roomRates.map((roomRate) => (
        
        <div key={roomRate.id}>
          
       
        <div className="parametros-del-vehiculo">
        <div className="titulo-de-tarjetas-extras">Room Rates</div>
        <div className="parametros-del-vehiculo-subtitulo">
          Prices may increase on weekends or holidays
        </div>
        <hr className="linea2" />
        <div className="lista-room-rates">
          <div className="texto-lista">Monday - Thursday</div>
          <div className="texto-lista">$ {roomRate.priceMonThu}</div>
        </div>
        <div className="lista-room-rates2">
          <div className="texto-lista">Monday - Thursday</div>
          <div className="texto-lista">$ {roomRate.priceMonThu}</div>
        </div>
        <div className="lista-room-rates">
          <div className="texto-lista">Friday - Sunday</div>
          <div className="texto-lista">$ {roomRate.priceFriSun}</div>
        </div>
        <div className="lista-room-rates2">
          <div className="texto-lista">Rent by month</div>
          <div className="texto-lista">-{roomRate.DescMonth} %</div>
        </div>
        <div className="lista-room-rates">
          <div className="texto-lista">Minimum number of nights</div>
          <div className="texto-lista">{roomRate.minNights} night</div>
        </div>
        <div className="lista-room-rates2">
          <div className="texto-lista">Max number of nights</div>
          <div className="texto-lista">{roomRate.maxNights} nights</div>
        </div>
      </div>
      </div>
      ))}
      </>
    );
}

export default RoomRates;