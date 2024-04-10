import React from "react";
import CardBlog from "./Card-blog";
import "./perfil.css";


export default function Blog(){
  return (
    <>
    
    <section className="seccion-perfil-usuario">
      
        <div className="perfil-usuario-body">
            <div className="perfil-usuario-bio">
                <h3 className="titulo">Blog</h3>
                <p className="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <CardBlog />
           
        </div>
    </section>
    </>

);
  
}

