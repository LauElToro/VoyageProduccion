import "../pagecar.css";
import { useState , useEffect } from "react";



function InfoKnow () {

  
    
 
    const [infoList, setInfoList] = useState([]);
  
    useEffect(() => {
      async function fetchInfoKnow() {
        try {
          const response = await fetch('/infoKnow');
  
          if (!response.ok) {
            throw new Error('Error al obtener la información de la tabla infoKnow');
          }
  
          const data = await response.json();
          setInfoList(data);
        } catch (error) {
          console.error('Error al obtener la información de la tabla infoKnow:', error);
          // Aquí puedes manejar el error de alguna manera, como mostrando un mensaje al usuario
        }
      }
  
      fetchInfoKnow();
    }, []);
  
   
  
  


    return (
        <>
        {infoList.map((info) => (
            <div key={info.id}>
             
           
          <div className="parametros-del-vehiculo">
            <div className="titulo-de-tarjetas-extras">Things to know</div>
            <hr className="linea2" />
            <div className="titulo-de-tarjetas-extras2">
              Cancellation policy
            </div>
            <div className="punto-de-encuentro-fecha-ciudad">
              <div className="parametros-del-vehiculo-subtitulo">
                <p>
                  {info.InfoCancelPolicy}
                </p>
              </div>
            </div>
            <hr className="linea2" />
            <div className="titulo-de-tarjetas-extras2">Special Note</div>
            <div className="punto-de-encuentro-fecha-ciudad">
              <div className="parametros-del-vehiculo-subtitulo">
                <p>
                  {info.InfoSpecial}
                </p>
              </div>
            </div>
          </div>
          </div>
          ))}
        </>
    );
} 

export default InfoKnow;