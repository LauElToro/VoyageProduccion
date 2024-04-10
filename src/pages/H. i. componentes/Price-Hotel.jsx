import React, { useState , useEffect } from "react";
import Star from "../H. I. SVGS/Star";
import Calendar from "../H. I. SVGS/Calendar";
import DatePicker from "react-datepicker";
import Person from "../H. I. SVGS/Person";
import DashCircle from "../H. I. SVGS/Dash-circle";
import PlusCircle from "../H. I. SVGS/Plus-circle";
import "../hotel-individual.css";




function PriceHotel () {

    
    
    
    const [calendarVisible, setCalendarVisible] = useState(false);
    const [startDate2, setStartDate2] = useState(null);
    const [endDate2, setEndDate2] = useState(null);
    const [showCapacityControls, setShowCapacityControls] = useState(false);

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

const [clasecapacity, setClasecapacity] = useState("capacityform-H-I");

const Capacityclick = () => {
    if (clasecapacity === "capacityform-H-I") {
        setClasecapacity("capacityform-H-I-click");
    } else {
        setClasecapacity("capacityform-H-I");
    }
};

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

const calculateTotalCapacity = () => {
    return capacityAdult + capacityChildren + capacityInfant;
};


  const [priceHotels, setPriceHotels] = useState([]);

  useEffect(() => {
    async function fetchPriceHotels() {
      try {
        const response = await fetch('https://voyagelbackend.onrender.com/PriceHotel');

        if (!response.ok) {
          throw new Error('Error al obtener los datos de precios de hoteles');
        }

        const data = await response.json();
        setPriceHotels(data);
      } catch (error) {
        console.error('Error al obtener los datos de precios de hoteles:', error);
        // Aquí puedes manejar el error de alguna manera, como mostrando un mensaje al usuario
      }
    }

    fetchPriceHotels();
  }, []);

 





return (
  <>
  
  {priceHotels.map((priceHotel) => (
    <div key={priceHotel.id}>
      
  
    <div className="precio-hotel">
    <div className="precio-auto-header">
      <div className="auto-precio-por-dia">
       <p> ${priceHotel.priceDay}</p> <div className="precio-total-de-dias">/day </div>
      </div>
      <div className="punto-de-encuentro-fecha-ciudad ">
        <div className="iconstar">
          <Star />
        </div>
        <div className="score-number">{priceHotel.stars}</div>
        <div className="subtext-carousel">({priceHotel.reviews})</div>
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
      <div onClick={handleCapacityFormClick}>
        <div className={clasecapacity} onClick={Capacityclick}>
          <label htmlFor="capacidad" className="Input-capacity">
            <Person />{" "}
            <input
              value={calculateTotalCapacity()}
              name="capacidad"
              id="capacidad"
              readOnly
              className="Suma-capacity"
            />{" "}
            <label>Guests</label>
          </label>
        </div>
      </div>
    </div>

    <div className="capacity-container-hotel">
      <div
        className={`capacity-controls-hotel ${
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
         <DashCircle />
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
          <PlusCircle />
        </div>
      </div>
      <div
        className={`capacity-controls-hotel ${
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
         <DashCircle />
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
          <PlusCircle />
        </div>
      </div>

      <div
        className={`capacity-controls-hotel ${
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
          <DashCircle />
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
          <PlusCircle />
        </div>
      </div>
    </div>

    <div className="contenedor-precio-total-de-dias">
      <div className="precio-total-de-dias">${priceHotel.priceDay} x {priceHotel.cantNights} nights</div>{" "}
      <div className="precio-total-de-dias">${priceHotel.Total}</div>
    </div>
    <div className="contenedor-precio-total-de-dias">
      <div className="precio-total-de-dias">Service charge</div>{" "}
      <div className="precio-total-de-dias">${priceHotel.serviceCharge}</div>
    </div>
    <hr className="hr-precio-total" />
    <div className="contenedor-precio-auto-total">
      <div className="precio-auto-total">Total</div>{" "}
      <div className="precio-auto-total">${priceHotel.TotalFull}</div>
    </div>
    <div className="precio-auto-boton">Reserve</div>
  </div>
  </div>
  ))}
  </>
);

}


export default PriceHotel;

