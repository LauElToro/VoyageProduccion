import React, { useState } from "react";
import CardHotel from "./Tarjetshotel1/CardHotel"
import styled from "styled-components";

function Tarjets() {
  const [selectedSearchTarjets, setSelectedSearchTarjets] =
    useState("firstUbication");

  const [firstUbicationClicked, setFirstUbicationClicked] = useState(false);
  const [secondUbicationClicked, setSecondUbicationClicked] = useState(false);
  const [thirdUbicationClicked, setThirdUbicationClicked] = useState(false);

  const handleFirstUbicationClick = () => {
    setFirstUbicationClicked(true);
    setSecondUbicationClicked(false);
    setThirdUbicationClicked(false);
    setSelectedSearchTarjets("firstUbication");
  };

  const handleSecondUbicationClick = () => {
    setSecondUbicationClicked(true);
    setFirstUbicationClicked(false);
    setThirdUbicationClicked(false);
    setSelectedSearchTarjets("secondUbication");
  };

  const handleThirdtUbicationClick = () => {
    setThirdUbicationClicked(true);
    setFirstUbicationClicked(false);
    setSecondUbicationClicked(false);
    setSelectedSearchTarjets("thirdUbication");
  };

  const renderTarjetscomponents = () => {
    if (selectedSearchTarjets === "firstUbication")
      return (
        <Tarjetscontainer>
          <Carrouselscontainers>
            <div className="container1">
              <CardHotel />
              <CardHotel />
              <CardHotel />
              <CardHotel />
              
            </div>
            <br />
            <div className="container2">
              <CardHotel />
              <CardHotel />
              <CardHotel />
              <CardHotel />
              
            </div>
          </Carrouselscontainers>
        </Tarjetscontainer>
      );
    else if (selectedSearchTarjets === "secondUbication")
      return (
        <Tarjetscontainer>
          <Carrouselscontainers>
            <div className="container1">
            <CardHotel />
            <CardHotel />
            <CardHotel />
            <CardHotel />
             
            </div>
            <br />
            <div className="container2">
            <CardHotel />
            <CardHotel />
            <CardHotel />
            <CardHotel />
              
            </div>
          </Carrouselscontainers>
        </Tarjetscontainer>
      );
    else if (selectedSearchTarjets === "thirdUbication")
      return (
        <Tarjetscontainer>
          <Carrouselscontainers>
            <div className="container1">
            <CardHotel />
            <CardHotel />
            <CardHotel />
            <CardHotel />
            </div>
            <br />
            <div className="container2">
            <CardHotel />
            <CardHotel />
            <CardHotel />
            <CardHotel />
            </div>
          </Carrouselscontainers>
        </Tarjetscontainer>
      );
  };

  return (
    <Betsellercontainer>
      <Texttarjet>
        <h1>Betsellers Listing</h1>
        Hotel higly rated for thoughtful design
      </Texttarjet>
      <Searchtarjetcontainer>
        <Buttontarjetcontainer>
          <button
            onClick={handleFirstUbicationClick}
            className={`btns-tarjets-searchs ${
              firstUbicationClicked ? "clicked" : ""
            }`}
          >
            New york
          </button>

          <button
            onClick={handleSecondUbicationClick}
            className={`btns-tarjets-searchs ${
              secondUbicationClicked ? "clicked" : ""
            }`}
          >
            Dubai
          </button>

          <button
            onClick={handleThirdtUbicationClick}
            className={`btns-tarjets-searchs ${
              thirdUbicationClicked ? "clicked" : ""
            }`}
          >
            Italia
          </button>
        </Buttontarjetcontainer>
      </Searchtarjetcontainer>
      {renderTarjetscomponents()}
    </Betsellercontainer>
  );
}

export default Tarjets;

const Betsellercontainer = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #f2f2f2;
  border-radius: 30px;
  aling-items: center;
`;

const Texttarjet = styled.div`
  margin-left: 40px;
`;

const Searchtarjetcontainer = styled.div`
  display: flex;
  align-items: center;
  position: static;
`;

const Buttontarjetcontainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  margin-top: 20px;

  .btns-tarjets-searchs {
    font-family: Poppins, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #374151;
    border: none;
    margin-left: 35px;
    cursor: pointer;
    background-color: #f2f2f2;
    width: 90px;
  }

  @media (max-width: 720px) {
    top: 1095px;
  }

  .btns-tarjets-searchs.clicked {
    border-radius: 20px;
    color: #f9fafb;
    background-color: #0511f2;
    width: 90px;
    height: 40px;
  }

  .dot {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    color: #111827;
  }
`;

const Tarjetscontainer = styled.div`
  margin: 20px;
`;

const Carrouselscontainers = styled.div``;
