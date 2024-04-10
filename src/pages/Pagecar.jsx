import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./pagecar.css";
import auto1 from "../imagenescar/auto1.jpg";
import auto2 from "../imagenescar/auto2.jpg";
import auto3 from "../imagenescar/auto3.jpg";
import auto4 from "../imagenescar/auto4.jpg";
import Ubication from "./H. I. SVGS/Ubication";
import Calendar from "./H. I. SVGS/Calendar";
import Search from "./H. I. SVGS/Search";
import Owner from "./Car components/Owner";
import Parameters from "./Car components/Parameters";
import Description from "./Car components/Description";
import InfoKnow from "./Car components/Info-car";
import Pickup from "./Car components/Pickup";
import PriceCar from "./Car components/Price-car";

function PageCar() {
  const [inputValue2, setInputValue2] = useState("");

  const handleChange2 = (e) => {
    setInputValue2(e.target.value);
  };

  const [inputValue3, setInputValue3] = useState("");

  const handleChange3 = (e) => {
    setInputValue3(e.target.value);
  };

  const carInputRef1 = useRef(null);

  const carInputRef2 = useRef(null);

  //date

  
  const [calendarVisible1, setCalendarVisible1] = useState(false);
  

  const [startDate3, setStartDate3] = useState(null);
  const [endDate3, setEndDate3] = useState(null);

  

  const handleDivClick1 = () => {
    setCalendarVisible1(true);
  };

  const handleDocumentClick = (event) => {
    if (!event.target.closest(".dateform")) {
      setCalendarVisible1(false);
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

  

  const handleDateChange3 = (dates) => {
    const [start, end] = dates;
    setStartDate3(start);
    setEndDate3(end);
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
  

  const isSelectedDate3 = (date) => {
    return (
      (startDate3 && startDate3.toDateString() === date.toDateString()) ||
      (endDate3 && endDate3.toDateString() === date.toDateString())
    );
  };

  

  const dayClassName3 = (date) => {
    return isSelectedDate3(date) ? "selected-date" : "";
  };

  const [clase, setClase] = useState("precio-auto-calendario-fechas");

  const Dateclick = () => {
    if (clase === "precio-auto-calendario-fechas") {
      setClase("precio-auto-calendario-fechas-click");
    } else {
      setClase("precio-auto-calendario-fechas");
    }
  };

  return (
    <div className="pagecar-container">
      <div className="formcar">
        {
          <form className="form">
            <div
              className="locationform"
              onClick={() => {
                carInputRef1.current.focus();
              }}
            >
              <div className="iconinputhotel">
               <Ubication/>{" "}
                <input
                  type="text"
                  id="ubicacion2"
                  name="ubicacion2"
                  placeholder="City or Airport"
                  className="hotelinput"
                  ref={carInputRef1}
                  value={inputValue2}
                  onChange={handleChange2}
                />
              </div>
              <div className="locationtext">Pick up location</div>
            </div>
            <div
              className="locationform"
              onClick={() => {
                carInputRef2.current.focus();
              }}
            >
              <div className="iconinputhotel">
                <Ubication/>{" "}
                <input
                  type="text"
                  id="ubicacion"
                  name="ubicacion"
                  placeholder="City or Airport"
                  className="hotelinput"
                  ref={carInputRef2}
                  value={inputValue3}
                  onChange={handleChange3}
                />
              </div>
              <div className="locationtext2">Drop off location</div>
            </div>

            <div className="dateform">
              <div onClick={handleDivClick1}>
                <div className="fechas-container" onClick={Dateclick}>
                  <Calendar />
                  <div>
                    <div className="precio-auto-date">
                      <input
                        type="text"
                        value={formatDate(startDate3)}
                        readOnly
                        className="precio-auto-date"
                      />
                      <input
                        type="text"
                        value={formatDate(endDate3)}
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
              {calendarVisible1 && (
                <div className="dateform-car">
                  <DatePicker
                    selected={startDate3}
                    onChange={handleDateChange3}
                    startDate={startDate3}
                    endDate={endDate3}
                    selectsRange
                    inline
                    monthsShown={1}
                    dateFormat="MM/dd"
                    className="dateform"
                    dayClassName={dayClassName3}
                  />
                </div>
              )}
            </div>

            <button className="btn">
              <Search />
            </button>
          </form>
        }
      </div>
      <div className="head-pagecar">
        <img className="img-auto1" src={auto1} alt="" />
        <img className="img-auto2" src={auto2} alt="" />
        <div className="head2-pagecar">
          <img className="img-auto3" src={auto3} alt="" />
          <img className="img-auto4" src={auto4} alt="" />
        </div>
      </div>

      <div className="carta-auto-contenedor">
        <div>
          <Owner />
          <Parameters />
          <Description />
          <InfoKnow />
        </div>
        <div>
          <Pickup />
          <PriceCar />
        </div>
      </div>
    </div>
  );
}

export default PageCar;
