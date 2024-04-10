import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./event.css";
import "./reservador.css";
import tokiolago from "../imagenes/tokio-lago.jpg";
import tokiociudad from "../imagenes/tokio-ciudad.jpg";
import tokiotorre from "../imagenes/tokio-torre.jpg";
import Filter2 from "./Filters/Filter2";
import Filter1Event from "./Filters-event/filter1-event";
import Filter2Event from "./Filters-event/filter2-event";
import Carrusel1 from "./Carrusel-imagenes-event/Carrusel1";

function Event() {
  const [showCapacityControls, setShowCapacityControls] = useState(false);

  const [inputValue4, setInputValue4] = useState("");

  const handleChange4 = (e) => {
    setInputValue4(e.target.value);
  };

  const hotelInputRef = useRef(null);

  //capacity carform
  const [capacityAdult2, setCapacityAdult2] = useState(0);

  const handleIncrementCapacityAdult2 = () => {
    if (capacityAdult2 < 10) {
      setCapacityAdult2((prevCapacityAdult2) => prevCapacityAdult2 + 1);
    }
  };

  const handleDecrementCapacityAdult2 = () => {
    if (capacityAdult2 >= 1) {
      setCapacityAdult2((prevCapacityAdult2) => prevCapacityAdult2 - 1);
    }
  };

  const [capacityChildren2, setCapacityChildren2] = useState(0);

  const handleIncrementCapacityChildren2 = () => {
    if (capacityChildren2 < 4) {
      setCapacityChildren2(
        (prevCapacityChildren2) => prevCapacityChildren2 + 1
      );
    }
  };

  const handleDecrementCapacityChildren2 = () => {
    if (capacityChildren2 >= 1) {
      setCapacityChildren2(
        (prevCapacityChildren2) => prevCapacityChildren2 - 1
      );
    }
  };

  const [capacityInfant2, setCapacityInfant2] = useState(0);

  const handleIncrementCapacityInfant2 = () => {
    if (capacityInfant2 < 4) {
      setCapacityInfant2((prevCapacityInfant2) => prevCapacityInfant2 + 1);
    }
  };

  const handleDecrementCapacityInfant2 = () => {
    if (capacityInfant2 >= 1) {
      setCapacityInfant2((prevCapacityInfant2) => prevCapacityInfant2 - 1);
    }
  };

  

  const [calendarVisible, setCalendarVisible] = useState(false);
  const [startDate2, setStartDate2] = useState(null);
  const [endDate2, setEndDate2] = useState(null);

  const handleDivClick = () => {
    setCalendarVisible(true);
  };

  const handleDocumentClick = (event) => {
    if (!event.target.closest(".dateform")) {
      setCalendarVisible(false);
    }
  };

  // Agregar el event listener cuando el componente se monta
  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    // Remover el event listener cuando el componente se desmonta
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

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

  const handleCapacityFormClick = () => {
    setShowCapacityControls(!showCapacityControls);
  };

  

  return (
    <div className="event-container">
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
                value={inputValue4}
                onChange={handleChange4}
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
                  monthsShown={1}
                  dateFormat="MM/dd"
                  className="dateform"
                  dayClassName={dayClassName}
                />
              </div>
            )}
          </div>

          <div className="capacityform" >
            <div onClick={handleCapacityFormClick}>
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
          <button className="btn">
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
            class="bi bi-globe-americas"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
          </svg>
          <div className="subtexticon">1599 experiences</div>
        </div>
      </div>
      <div className="head-images">
        <img src={tokiolago} className="img1-reserv" alt="" />
        <img src={tokiociudad} className="img2-reserv" alt="" />
        <img src={tokiotorre} className="img3-reserv" alt="" />
      </div>

      <div className="capacitycontainer-event">
        <div
          className={`capacity-controls ${showCapacityControls ? "show" : ""}`}
        >
          <div className="capacity-text">
            Adults
            <br />
            <div className="capacity-subtext">Ages 13 or above</div>
          </div>
          <div
            className="capacity-button"
            onClick={handleDecrementCapacityAdult2}
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
            value={capacityAdult2}
            readOnly
            className="inputcapacity"
          />
          <div
            className="capacity-button"
            onClick={handleIncrementCapacityAdult2}
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
          className={`capacity-controls ${showCapacityControls ? "show" : ""}`}
        >
          <div className="capacity-text">
            Children
            <br />
            <div className="capacity-subtext">Ages 2-12</div>
          </div>
          <div
            className="capacity-button"
            onClick={handleDecrementCapacityChildren2}
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
            id="capacidad2"
            name="capacidad"
            value={capacityChildren2}
            readOnly
            className="inputcapacity"
          />
          <div
            className="capacity-button"
            onClick={handleIncrementCapacityChildren2}
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
          className={`capacity-controls ${showCapacityControls ? "show" : ""}`}
        >
          <div className="capacity-text">
            Infants
            <br />
            <div className="capacity-subtext">Ages 0-2</div>
          </div>
          <div
            className="capacity-button"
            onClick={handleDecrementCapacityInfant2}
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
            id="capacidad2"
            name="capacidad"
            value={capacityInfant2}
            readOnly
            className="inputcapacity"
          />
          <div
            className="capacity-button"
            onClick={handleIncrementCapacityInfant2}
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
      <div className="body-event">
        <div className="title-event">Experiences in Tokyo</div>
        <div className="subtitle-event">
          233 experiences · Aug 12 - 18 · 2 Guests
        </div>
        <div className="filters-container">
          <Filter1Event />
          <Filter2 />
          <Filter2Event />
          <div className="filter-event">On sale</div>
        </div>
        <div className="carrusel-container">
          <div className="fila">
            <Carrusel1 />
            <Carrusel1 />
            <Carrusel1 />
          </div>
          <div className="fila">
            <Carrusel1 />
            <Carrusel1 />
            <Carrusel1 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
