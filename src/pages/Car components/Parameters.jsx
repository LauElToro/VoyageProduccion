import "../pagecar.css";
import { useState , useEffect } from "react";



function Parameters () {


   





  const [parameters, setParameters] = useState([]);

  useEffect(() => {
    async function fetchParameters() {
      try {
        const response = await fetch('https://voyagelbackend.onrender.com/parameters');

        if (!response.ok) {
          throw new Error('Error al obtener los parámetros de automóviles');
        }

        const data = await response.json();
        setParameters(data);
      } catch (error) {
        console.error('Error al obtener los parámetros de automóviles:', error);
        // Aquí puedes manejar el error de alguna manera, como mostrando un mensaje al usuario
      }
    }

    fetchParameters();
  }, []);




    return (
        <>
         {parameters.map((parameter) => (
          <div key={parameter.id}>
            <p>Velocidad: {parameter.velocidad}</p>
            <p>Motor: {parameter.Motor}</p>
            <p>Audio: {parameter.Audio}</p>
            <p>Luces: {parameter.Lights}</p>
            <p>Propiedad 1: {parameter.Prop1}</p>
            <p>Propiedad 2: {parameter.Prop2}</p>
            <p>Propiedad 3: {parameter.Prop3}</p>
            <p>Propiedad 4: {parameter.Prop4}</p>
          
        <div className="parametros-del-vehiculo">
            <div className="titulo-de-tarjetas-extras">
              Vehicle parameters & utilities
            </div>
            <div className="parametros-del-vehiculo-subtitulo">
              Questions are at the heart of making things great.
            </div>
            <hr className="linea2" />
            <div className="punto-de-encuentro-fecha-ciudad">
              <div className="parametros-del-vehiculo-lista">
                <ul>
                  <li>· {parameter.velocidad}</li>
                  <li>· {parameter.Motor}</li>
                  <li>· {parameter.Audio}</li>
                  <li>· {parameter.Lights}</li>
                </ul>
              </div>
              <div className="parametros-del-vehiculo-lista">
                <ul>
                  <li>
                    . {parameter.Prop1}
                  </li>
                  <li>·  {parameter.Prop2}</li>
                  <li>·  {parameter.Prop3}</li>
                  <li>·  {parameter.Prop4}</li>
                </ul>
              </div>
            </div>
          </div>
          </div>
        ))}
        </>
    );
} 

export default Parameters;