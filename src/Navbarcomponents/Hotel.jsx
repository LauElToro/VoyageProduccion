import React, { useState } from "react";
import styled from "styled-components";
import paris from "../imagenes/paris.jpg";
import newyork from "../imagenes/Newyork.avif";
import california from "../imagenes/california.jpg";
import angeles from "../imagenes/angeles.jpg";
import jersey from "../imagenes/jersey.jpg";

function DropdownHotel() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <DropContainer>
      <div className="dropdown-container">
        <div className="dropdown-trigger">
          Hotel
          <div className="arrow">
            <ion-icon name="chevron-down-outline" />
          </div>
        </div>
        <div className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
          <div className="dropdown-option">
            <img src={paris} alt="" className="imghotel" />
            <p>France</p>
            <a className="droplink" href="/">
              Paris
            </a>
            <br />
            <a className="droplink" href="/">
              Burdeux
            </a>
            <br />
            <a className="droplink" href="/">
              Lyon
            </a>
            <br />
            <a className="droplink" href="/">
              Marsella
            </a>
            <br />
            <a className="droplink" href="/">
              Nantes
            </a>
          </div>
          <div className="dropdown-option">
            <img src={newyork} alt="" className="imghotel" />
            <p>New York</p>
            <a className="droplink" href="/">
              Manhattan
            </a>
            <br />
            <a className="droplink" href="/">
              Broadway
            </a>
            <br />
            <a className="droplink" href="/">
              Empire state
            </a>
            <br />
            <a className="droplink" href="/">
              Central Park
            </a>
            <br />
            <a className="droplink" href="/">
              Brooklin
            </a>
          </div>
          <div className="dropdown-option">
            <img src={california} alt="" className="imghotel" />
            <p>California</p>
            <a className="droplink" href="/">
              San francisco
            </a>
            <br />
            <a className="droplink" href="/">
              Santa Barbara
            </a>
            <br />
            <a className="droplink" href="/">
              Yosemite
            </a>
            <br />
            <a className="droplink" href="/">
              San Diego
            </a>
            <br />
            <a className="droplink" href="/">
              Disney Land
            </a>
          </div>
          <div className="dropdown-option">
            <img src={angeles} alt="" className="imghotel" />
            <p>Los Angeles</p>
            <a className="droplink" href="/">
              Hollywood
            </a>
            <br />
            <a className="droplink" href="/">
              The Getty Center
            </a>
            <br />
            <a className="droplink" href="/">
              Grand Central
            </a>
            <br />
            <a className="droplink" href="/">
              Universal Studios
            </a>
            <br />
            <a className="droplink" href="/">
              Battleship Museum
            </a>
          </div>
          <div className="dropdown-option">
            <img className="imghotel" src={jersey} alt="" />
            <p>New Jersey</p>
            <a className="droplink" href="/">
              Atlantic City
            </a>
            <br />
            <a className="droplink" href="/">
              Cape May
            </a>
            <br />
            <a className="droplink" href="/">
              Newark
            </a>
            <br />
            <a className="droplink" href="/">
              Ocean city
            </a>
            <br />
            <a className="droplink" href="/">
              Princeton
            </a>
          </div>
        </div>
      </div>
    </DropContainer>
  );
}

export default DropdownHotel;

const DropContainer = styled.nav`
  padding-right: 30px;

  .arrow {
    margin-left: 5px;
    margin-top: 4px;
  }
  .dropdown-container {
    position: relative;
    display: inline-block;
  }

  .dropdown-trigger {
    display: flex;
    align-content: center;
    font-family: Poppins, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    font-style: normal;
    font-size: 20px;
    line-height: 24px;
    text-decoration: none;
    margin-bottom: 5px;
    padding: 0.2em 0.4em;
    border-radius: 10px;
    cursor: pointer;
    color: #111827;
    &:hover {
      background-color: #efb810;
      color: #fafafa;
    }
  }

  .dropdown-menu {
    font-family: Poppins, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    font-style: normal;
    font-size: 14px;
    line-height: 24px;
    text-decoration: none;
    margin-right: 1rem;
    padding: 0.2em 0.4em;
    border-radius: 10px;
    position: absolute;
    top: 40px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: none;
    color: #111827;
  }

  p {
    font-weight: 600;
  }

  img {
    width: 180px;
    border-radius: 10px;
  }

  .dropdown-container:hover .dropdown-menu {
    display: flex;
  }

  .droplink {
    font-family: Poppins, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    font-style: normal;
    font-size: 16px;
    text-decoration: none;
    color: #333;
    &:hover {
      border-radius: 5px;
      background-color: rgba(128, 128, 128, 0.2);
    }
  }

  .dropdown-option {
    padding: 10px;
  }

  @media (max-width: 890px) {
    .dropdown-menu {
      margin-left: -120px;
    }

    .dropdown-container:hover .dropdown-menu {
      display: grid;
      align-items: center;
      text-align: center;
    }
  }
`;
