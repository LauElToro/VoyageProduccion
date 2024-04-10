import "../pagecar.css";
import React, { useState , useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Star from "../H. I. SVGS/Star";
import Calendar from "../H. I. SVGS/Calendar";






function PriceCar () {

    
  
    
  
    //date
  
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


    
    const [priceCars, setPriceCars] = useState([]);
    
      useEffect(() => {
        async function fetchPriceCars() {
          try {
            const response = await fetch('https://voyagelbackend.onrender.com/priceCar');
    
            if (!response.ok) {
              throw new Error('Error al obtener la información de precios de coches');
            }
    
            const data = await response.json();
            setPriceCars(data);
          } catch (error) {
            console.error('Error al obtener la información de precios de coches:', error);
            // Aquí puedes manejar el error de alguna manera, como mostrando un mensaje al usuario
          }
        }
    
        fetchPriceCars();
      }, []);
    
     
   
    



    return (
        <>
         {priceCars.map((priceCar) => (
              <div key={priceCar.id}>
                <p>Precio por día: {priceCar.pricDay}</p>
                <p>Estrellas: {priceCar.stars}</p>
                <p>Reseñas: {priceCar.reviews}</p>
                <p>Cantidad de días: {priceCar.cantDays}</p>
                <p>Total: {priceCar.Total}</p>
              
           <div className="precio-auto">
            <div className="precio-auto-header">
              <div className="auto-precio-por-dia">
                ${priceCar.pricDay} <div className="precio-total-de-dias">/day </div>
              </div>
              <div className="punto-de-encuentro-fecha-ciudad ">
                <div className="iconstar">
                  <Star />
                    
                </div>
                <div className="score-number">{priceCar.stars}</div>
                <div className="subtext-carousel">({priceCar.reviews})</div>
              </div>
            </div>
            <div className="precio-auto-calendario">
              <div onClick={handleDivClick}>
                <div className={clase} onClick={Dateclick}>
                  <Calendar />
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
                      <div className="datecar-text">Pick Up </div>
                      <div className="datecar-text">-</div>
                      <div className="datecar-text">Drop Off</div>
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
            <div className="contenedor-precio-total-de-dias">
              <div className="precio-total-de-dias">$ {priceCar.pricDay} x {priceCar.cantDays} day</div>{" "}
              <div className="precio-total-de-dias">$ {priceCar.Total}</div>
            </div>
            <hr className="hr-precio-total" />
            <div className="contenedor-precio-auto-total">
              <div className="precio-auto-total">Total </div>{" "}
              <div className="precio-auto-total">$ {priceCar.Total}</div>
            </div>
            <div className="precio-auto-boton">Reserve</div>
          </div>
          </div>
            ))}
          
        </>
    );
} 

export default PriceCar;