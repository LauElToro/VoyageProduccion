import "../pagecar.css";
import Circle from "../H. I. SVGS/Circle";
import { useState, useEffect } from "react";




function Pickup () {

    


   


  const [pickupData, setPickupData] = useState([]);

  useEffect(() => {
    async function fetchPickupData() {
      try {
        const response = await fetch('https://voyagelbackend.onrender.com/pickup');

        if (!response.ok) {
          throw new Error('Error al obtener los datos de recogida de automóviles');
        }

        const data = await response.json();
        setPickupData(data);
      } catch (error) {
        console.error('Error al obtener los datos de recogida de automóviles:', error);
        // Aquí puedes manejar el error de alguna manera, como mostrando un mensaje al usuario
      }
    }

    fetchPickupData();
  }, []);

 





    return (
        <>
        {pickupData.map((pickup) => (
          <div key={pickup.id}>
            
          
            <div className="punto-de-encuentro">
            <div className="punto-de-encuentro-header">
              Pick up and drop off
            </div>

            <div className="punto-de-encuentro-fecha-ciudad">
              <Circle />
              <div className="fecha-ciudad-contenedor">
                <div className="fecha-contenido">{pickup.DatePick}</div>
                <div className="ciudad-contenido">
                  {pickup.LocationPick}
                </div>
              </div>
            </div>
            <div className="punto-de-encuentro-fecha-ciudad">
            <Circle />
              <div className="fecha-ciudad-contenedor">
                <div className="fecha-contenido">{pickup.DateDrop}</div>
                <div className="ciudad-contenido">
                  {pickup.LocationDrop}
                </div>
              </div>
            </div>
          </div>
          </div>
        ))}
        </>
    );
} 

export default Pickup;