import React, { useState, useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./reservador.css";
import PageHotel from "./PageHotel";
import Event from "./Event";
import PageCar from "./Pagecar";

function Reservador() {
  const [selectedSearch, setSelectedSearch] = useState("hotel");

  const [hotelClicked, setHotelClicked] = useState(false);
  const [carClicked, setCarClicked] = useState(false);
  const [eventClicked, setEventClicked] = useState(false);

  const handleHotelClick = () => {
    setHotelClicked(true);
    setCarClicked(false);
    setEventClicked(false);
    setSelectedSearch("hotel");
  };

  const handleAutoClick = () => {
    setCarClicked(true);
    setHotelClicked(false);
    setEventClicked(false);
    setSelectedSearch("car");
  };

  const handleEventoClick = () => {
    setEventClicked(true);
    setHotelClicked(false);
    setCarClicked(false);
    setSelectedSearch("event");
  };


 

  const renderSearchComponent = () => {
    if (selectedSearch === "hotel")
      return (
       <PageHotel/>
      );
    else if (selectedSearch === "car")
      return (
        <PageCar/>
      );
    else if (selectedSearch === "event")
      return (
        <Event/>
      );
  };

  return (
    <div>
      <div className="Searchcontainer">
        <div className="ButtonContainer">
          <button
            onClick={handleHotelClick}
            className={`btns-searchs ${hotelClicked ? "clicked" : ""}`}
          >
            {hotelClicked && <span className="dot">●</span>} Hotel
          </button>
          <button
            onClick={handleAutoClick}
            className={`btns-searchs ${carClicked ? "clicked-car" : ""}`}
          >
            {carClicked && <span className="dot">●</span>} Car
          </button>

          <button
            onClick={handleEventoClick}
            className={`btns-searchs ${eventClicked ? "clicked" : ""}`}
          >
            {eventClicked && <span className="dot">●</span>} Event
          </button>
        </div>

        {renderSearchComponent()}
      </div>
    </div>
  );
}

export default Reservador;
