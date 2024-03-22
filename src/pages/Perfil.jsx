import React from "react";

import voyage from "../imagenes/silueta.jpg"; 
import edit from "../imagenes/camara.png"
import "./perfil.css";


export const Perfil = () => {
  return (
    <>
    
    <section className="seccion-perfil-usuario">
        <div className="perfil-usuario-header">
            <div className="perfil-usuario-portada">
                <div className="perfil-usuario-avatar">
                    <img src={voyage} alt="img-avatar" />
                    <button type="button" className="boton-avatar">
                        <img src={edit} alt="edit-btn" className="pencil"/>
                    </button>
                </div>
                
            </div>
        </div>
        <div className="perfil-usuario-body">
            <div className="perfil-usuario-bio">
                <h3 className="titulo">User 2024</h3>
                <p className="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="perfil-usuario-footer">
                <ul className="lista-datos">
                    <li><i className="icono fas fa-map-signs"></i> Adress:</li>
                    <li><i className="icono fas fa-phone-alt"></i> Phone:</li>
                    <li><i className="icono fas fa-briefcase"></i> E-mail:</li>
                    <li><i className="icono fas fa-building"></i> Country</li>
                </ul>
                <ul className="lista-datos">
                    <li><i className="icono fas fa-map-marker-alt"></i> Location:</li>
                    <li><i className="icono fas fa-calendar-alt"></i> Birthday:</li>
                    <li><i className="icono fas fa-user-check"></i> Languaje;</li>
                    <li><i className="icono fas fa-share-alt"></i> Car</li>
                </ul>
                <button type="button" className="boton-portada">
                    <i className="fas fa-image"></i> Edit
                </button>
            </div>
            <div className="perfil-usuario-footer">
              <h3 className="titulo"> Booking History</h3>
                <ul className="lista-datos">
                    <li><i className="icono fas fa-map-signs"></i> Destiny:</li>
                    <li><i className="icono fas fa-phone-alt"></i> Date:</li>
                    <li><i className="icono fas fa-briefcase"></i> Hotel:</li>
                    <li><i className="icono fas fa-building"></i> Bill:</li>
                </ul>
                <ul className="lista-datos">
                    <li><i className="icono fas fa-map-marker-alt"></i> Events:</li>
                    <li><i className="icono fas fa-calendar-alt"></i> Car:</li>
                    
                </ul>
            </div>
           
        </div>
    </section>
    </>

);
  
};


