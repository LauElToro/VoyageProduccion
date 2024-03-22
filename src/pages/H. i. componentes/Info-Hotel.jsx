import "../hotel-individual.css";



function InfoHotel(){

const infoText = 'texto de descripcion del hotel y la estadia'





return (
<>
    <div className="parametros-del-vehiculo">
            <div className="titulo-de-tarjetas-extras">Stay information</div>

            <hr className="linea2" />
            <div className="punto-de-encuentro-fecha-ciudad">
              <div className="parametros-del-vehiculo-subtitulo">
                <p>
                  {infoText}
                </p>
                
              </div>
            </div>
</div>
</>
        );
}

export default InfoHotel;