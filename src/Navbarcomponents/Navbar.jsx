import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import voyage from "../imagenes/voyage-united.png";
import MenuMobile from "../imagenes/menu.png";
import Hotel from "./Hotel";
import Space from "./Space";
import Tour from "./Tour";
import Car from "./Car";
import Event from "./Event";
import BlogNav from "./BlogNav";
import styled from "styled-components";

export const Navbar = ({ isLoggedIn, onLogout }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      const response = await fetch("https://voyagelbackend.onrender.com/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        localStorage.removeItem("token");
        onLogout();
        console.log("Sesión cerrada exitosamente");
      } else {
        const data = await response.json();
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Navcontainer>
        <header>
          <Link to="/" state={{ logged: isLoggedIn }}>
            <img className="imgvoyage" src={voyage} alt="" />
          </Link>
          <div className="nav-components" id="opennav">
            <>
              <Hotel />
              <Space />
              <Tour />
              <Car />
              <Event />
              <BlogNav />
            </>
          </div>
          <Link>
            <img
              className="img-menu active "
              src={MenuMobile}
              alt=""
              id="hamburger"
              onClick={() => setMenuOpen(true)}
            />
          </Link>
          <div className="inactive equis" id="cerrar" onClick={() => setMenuOpen(false)}>
            <h1> X </h1>
          </div>
        </header>

        {isLoggedIn ? (
          <div>
            <div className="buttonmenu" onClick={toggleMenu}>
              Menu
              {menuOpen && (
                <div className="menu">
                  <Link
                    className="itemsmenu"
                    to="/Perfil"
                    state={{ logged: state?.logged }}
                  >
                    <div>Perfil</div>
                  </Link>
                  
                 
                  <div className="itemsmenu" onClick={handleLogout}>
                    Log Out
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <nav>
            <Link to="login">
              <button className="navbutton">Sign Up</button>
            </Link>
          </nav>
        )}
      </Navcontainer>
    </>
  );
};

const Navcontainer = styled.div`
  display: flex;
  background-color: #fafafa;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 200;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-components {
    display: flex;
    margin-top: 30px;
    margin-left: 130px;
    > * {
      margin-right: 10px;
    }
  }

  .img-menu {
    display: none;
  }


  @media (max-width: 890px) {
    display: flex;
    background-color: #fafafa;
    padding-bottom: 30px;
    border-radius: 0px;
    width: 100%;
    position: relative;

    .navbutton {
      display: none;
    }

    .nav-components {
  
      display: none;
      margin-top: 300px;
      align-items: center;
      margin-left:250px;
    }

    .img-menu {
      display: none;
      height: 30px;
      margin-top: 20px;
      margin-left: 150px;
    }

    .active {
    display: none;
    }
  }

  .inactive {
    display: none;
  }

  .equis{
    margin-left: 170px;
    margin-top: 20px;
    font-size: 25px;
    font-weight: bolder;
  }

  .imgvoyage {
    height: 80px;
    margin-left: 50px;
    margin-top: 5px;
    border-radius: 15px;
    color: #000000;
  }

  
  .navbutton {
    font-family: Poppins, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    font-style: normal;
    font-size: 15px;
    line-height: 20px;
    text-decoration: none;
    padding: 0.2em 0.4em;
    border-radius: 30px;
    margin-right: 20px;
    margin-left: 50px;
    margin-top: 20px;
    width: 110px;
    weight: 500;
    color: #f9fafb;
    padding: 17px;
    background-color: #000000;
    border: none;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      background-color: #efb810;
    }
  }

  .buttonmenu {
    display: flex;
    justify-content: center;
    font-family: Poppins, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    font-style: normal;
    font-size: 20px;
    line-height: 10px;
    border-radius: 30px;
    margin-right: 10px;
    width: 110px;
    weight: 500;
    color: #f9fafb;
    padding: 17px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    background-color: #efb810;
    &:hover {
    }
  }

  .menu {
    text-decoration: none;
    position: absolute;
    top: 70px;
    right: 5px;
    background-color: #ffff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    min-width: 150px;
    z-index: 1;
    color: black;

    
       

    .itemsmenu {
      text-decoration: none;
      justify-content:center;
    font-family: Poppins, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
      font-style: normal;
      font-size: 18px;
      line-height: 14px;
      padding: 20px;
      font-weight: 500;
      cursor: pointer;
      color:#111827;
      &:hover {
        background-color: #f0f0f0;
      }
  }

  
`;
