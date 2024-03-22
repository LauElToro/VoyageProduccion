import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./reservador.css";
import tokiolago from "../imagenes/tokio-lago.jpg";
import tokiociudad from "../imagenes/tokio-ciudad.jpg";
import tokiotorre from "../imagenes/tokio-torre.jpg";
import Infohotel from "./Infohotel";

function PageHotel() {
  const [showCapacityControls, setShowCapacityControls] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const hotelInputRef = useRef(null);

  //date
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const [calendarVisible, setCalendarVisible] = useState(false);
  const [startDate2, setStartDate2] = useState(null);
  const [endDate2, setEndDate2] = useState(null);

  const handleDivClick = () => {
    setCalendarVisible(!calendarVisible);
  };

  const handleDateChange2 = (dates) => {
    const [start, end] = dates;
    setStartDate2(start);
    setEndDate2(end);
  };

  const formatDate = (date) => {
    if (date) {
      return date.toLocaleDateString(undefined, {
        month: "short",
        day: "2-digit",
      });
    }
    return "";
  };

  //nuevooo
  const isSelectedDate = (date) => {
    return (
      (startDate2 && startDate2.toDateString() === date.toDateString()) ||
      (endDate2 && endDate2.toDateString() === date.toDateString())
    );
  };

  const dayClassName = (date) => {
    return isSelectedDate(date) ? "selected-date" : "";
  };

  const [clase, setClase] = useState("precio-auto-calendario-fechas");

  const Dateclick = () => {
    if (clase === "precio-auto-calendario-fechas") {
      setClase("precio-auto-calendario-fechas-click");
    } else {
      setClase("precio-auto-calendario-fechas");
    }
  };

  //capacity
  const [capacityAdult, setCapacityAdult] = useState(0);

  const handleIncrementCapacityAdult = () => {
    if (capacityAdult < 10) {
      setCapacityAdult((prevCapacityAdult) => prevCapacityAdult + 1);
    }
  };

  const handleDecrementCapacityAdult = () => {
    if (capacityAdult >= 1) {
      setCapacityAdult((prevCapacityAdult) => prevCapacityAdult - 1);
    }
  };

  const [capacityChildren, setCapacityChildren] = useState(0);

  const handleIncrementCapacityChildren = () => {
    if (capacityChildren < 4) {
      setCapacityChildren((prevCapacityChildren) => prevCapacityChildren + 1);
    }
  };

  const handleDecrementCapacityChildren = () => {
    if (capacityChildren >= 1) {
      setCapacityChildren((prevCapacityChildren) => prevCapacityChildren - 1);
    }
  };

  const [capacityInfant, setCapacityInfant] = useState(0);

  const handleIncrementCapacityInfant = () => {
    if (capacityInfant < 4) {
      setCapacityInfant((prevCapacityInfant) => prevCapacityInfant + 1);
    }
  };

  const handleDecrementCapacityInfant = () => {
    if (capacityInfant >= 1) {
      setCapacityInfant((prevCapacityInfant) => prevCapacityInfant - 1);
    }
  };

  const handleCapacityFormClick = () => {
    setShowCapacityControls(!showCapacityControls);
  };

  const handleSearch = () => {
    const filteredResults = tusDatos.filter((item) => {
      return (
        item.ubicacion.includes(inputValue) &&
        item.capacidadAdult >= capacityAdult &&
        item.capacidadChildren >= capacityChildren &&
        item.capacidadInfant >= capacityInfant &&
        item.startDate <= startDate &&
        item.endDate >= endDate
      );
    });

    setSearchResults(filteredResults);
  };

  return (
    <div className="Pagehotel-container">
      <div className="search-event-page">
        <form className="form">
          <div
            className="locationform"
            onClick={() => {
              hotelInputRef.current.focus();
            }}
          >
            <div className="iconinputhotel">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                class="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>{" "}
              <input
                type="text"
                id="ubicacion"
                name="ubicacion"
                placeholder="Location"
                className="hotelinput"
                ref={hotelInputRef}
                value={inputValue}
                onChange={handleChange}
              />
            </div>
            <div className="locationtext">Where are you going?</div>
          </div>

          <div className="dateform">
            <div onClick={handleDivClick}>
              <div className="fechas-container" onClick={Dateclick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-calendar4"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"
                    className="calendar-icon"
                  />
                </svg>
                <div>
                  <div className="precio-auto-date">
                    <input
                      type="text"
                      value={formatDate(startDate2)}
                      readOnly
                      className="precio-auto-date"
                    />
                    <input
                      type="text"
                      value={formatDate(endDate2)}
                      readOnly
                      className="precio-auto-date"
                    />
                  </div>
                  <div className="datecar-text">
                    <div className="datecar-text">Check in </div>
                    <div className="datecar-text">-</div>
                    <div className="datecar-text">Check out</div>
                  </div>
                </div>
              </div>
            </div>
            {calendarVisible && (
              <div className="dateform-car">
                <DatePicker
                  selected={startDate2}
                  onChange={handleDateChange2}
                  startDate={startDate2}
                  endDate={endDate2}
                  selectsRange
                  inline
                  monthsShown={2}
                  dateFormat="MM/dd"
                  className="dateform"
                  dayClassName={dayClassName}
                />
              </div>
            )}
          </div>

          <div className="capacityform" onClick={handleCapacityFormClick}>
            <label htmlFor="capacidad" className="hover-label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
              </svg>{" "}
              Capacity
            </label>
          </div>
          <button className="btn" onClick={handleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
          <div className="capacitycontainer">
            <div
              className={`capacity-controls ${
                showCapacityControls ? "show" : ""
              }`}
            >
              <div className="capacity-text">
                Adults
                <br />
                <div className="capacity-subtext">Ages 13 or above</div>
              </div>
              <div
                className="capacity-button"
                onClick={handleDecrementCapacityAdult}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-dash-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                </svg>
              </div>
              <input
                type="number"
                inputMode="none"
                id="capacidad"
                name="capacidad"
                value={capacityAdult}
                readOnly
                className="inputcapacity"
              />
              <div
                className="capacity-button"
                onClick={handleIncrementCapacityAdult}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </div>
            </div>
            <div
              className={`capacity-controls ${
                showCapacityControls ? "show" : ""
              }`}
            >
              <div className="capacity-text">
                Children
                <br />
                <div className="capacity-subtext">Ages 2-12</div>
              </div>
              <div
                className="capacity-button"
                onClick={handleDecrementCapacityChildren}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-dash-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                </svg>
              </div>
              <input
                type="number"
                inputMode="none"
                id="capacidad"
                name="capacidad"
                value={capacityChildren}
                readOnly
                className="inputcapacity"
              />
              <div
                className="capacity-button"
                onClick={handleIncrementCapacityChildren}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </div>
            </div>

            <div
              className={`capacity-controls ${
                showCapacityControls ? "show" : ""
              }`}
            >
              <div className="capacity-text">
                Infants
                <br />
                <div className="capacity-subtext">Ages 0-2</div>
              </div>
              <div
                className="capacity-button"
                onClick={handleDecrementCapacityInfant}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-dash-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                </svg>
              </div>
              <input
                type="number"
                inputMode="none"
                id="capacidad"
                name="capacidad"
                value={capacityInfant}
                readOnly
                className="inputcapacity"
              />
              <div
                className="capacity-button"
                onClick={handleIncrementCapacityInfant}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="head">
        <div className="title">Tokyo, Jappan</div>
        <div className="subtext">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="bi bi-map"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
            />
          </svg>
          <div className="subtexticon">Jappan </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-house"
            viewBox="0 0 16 16"
          >
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
          </svg>
          <div className="subtexticon"> 20 properties</div>
        </div>
      </div>
      <div className="head-images">
        <img src={tokiolago} className="img1-reserv" alt="" />
        <img src={tokiociudad} className="img2-reserv" alt="" />
        <img src={tokiotorre} className="img3-reserv" alt="" />
      </div>

      <div className="infohotel-container">
        <Infohotel />
      </div>
    </div>
  );
}

export default PageHotel;
