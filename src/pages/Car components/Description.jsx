import "../pagecar.css";
import { useState , useEffect } from "react";



function Description () {

   
    

   
     const [descriptions, setDescriptions] = useState([]);
   
     useEffect(() => {
       async function fetchDescriptions() {
         try {
           const response = await fetch('https://voyagelbackend.onrender.com/Description');
   
           if (!response.ok) {
             throw new Error('Error al obtener la información de la tabla Description');
           }
   
           const data = await response.json();
           setDescriptions(data);
         } catch (error) {
           console.error('Error al obtener la información de la tabla Description:', error);
           // Aquí puedes manejar el error de alguna manera, como mostrando un mensaje al usuario
         }
       }
   
       fetchDescriptions();
     }, []);
   
    
   


    return (
        <>
        {descriptions.map((description) => (
             <div key={description.id}>
               
          
            <div className="parametros-del-vehiculo">
            <div className="titulo-de-tarjetas-extras">Car descriptions</div>
            <hr className="linea2" />
            <div className="punto-de-encuentro-fecha-ciudad">
              <div className="parametros-del-vehiculo-subtitulo">
                <p>
                  {description.carDescrip}
                </p>
                <p>
                  {description.carInfo}
                </p>
              </div>
            </div>
          </div>
          </div>
           ))}
        </>
    );
} 

export default Description;