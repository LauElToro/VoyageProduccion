
import "../hotel-individual.css";





function Amenities () {

    
    return (

        <>
        <div className="caracteristicas-hotel">
            <div className="titulo-de-tarjetas-extras">Amenities</div>
                <div className="parametros-del-vehiculo-subtitulo">
                        About the propertys amenities and services
                </div>
                <hr className="linea2" />
                <div className="flex">
                    <div className="parametros-del-vehiculo-lista">
                        <ul>
                            <li>
                            <span className="material-icons">vpn_key</span>{" "}
                            <div className="item-lista">la-key</div>
                             </li>
                             <li>
                            <span className="material-icons">smoking_rooms</span>
                            <div className="item-lista">la-smoking</div>
                            </li>
                            <li>
                            <span className="material-icons">work_outline</span>
                            <div className="item-lista"> la-suitcase</div>
                             </li>
                            <li>
                            <span className="material-icons">waves</span>
                            <div className="item-lista">la-swimming-pool </div>
                            </li>
                        </ul>
                    </div>
                    <div className="parametros-del-vehiculo-lista">
                            <ul>
                                <li>
                                    <span className="material-icons">luggage</span>{" "}
                                    <div className="item-lista">la-luggage-cart</div>
                                </li>
                                <li>
                                    <span className="material-icons">ac_unit</span>
                                    <div className="item-lista">la-snowflake </div>
                                </li>
                                <li>
                                    <span className="material-icons">cases</span>
                                    <div className="item-lista">la-suitcase-rolling</div>
                                </li>
                                <li>
                                    <span className="material-icons">personal_video</span>{" "}
                                    <div className="item-lista">la-tv</div>
                                </li>
                            </ul>
                    </div>
                        <div className="parametros-del-vehiculo-lista">
                            <ul>
                            <li>
                                <span className="material-icons">shower</span>{" "}
                                <div className="item-lista">la-shower</div>
                            </li>
                            <li>
                                <span className="material-icons">spa</span>{" "}
                                <div className="item-lista">la-spa</div>
                            </li>
                            <li>
                                <span className="material-icons">pool</span>{" "}
                                <div className="item-lista">la-swimmer</div>
                            </li>
                            <li>
                                <span className="material-icons">beach_access</span>
                                <div className="item-lista"> la-umbrella-beach</div>
                            </li>
                            </ul>
                        </div>
            </div>
        </div>
        </>
);
}

export default Amenities;