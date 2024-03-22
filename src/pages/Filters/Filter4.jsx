import React, { useState, useEffect } from "react";
import "./filter4.css";
import Checkbox from "@mui/material/Checkbox";

function Filter4() {
  const [showDropFilter4, setShowDropFilter4] = useState(false);

  const DropFilter4 = () => {
    setShowDropFilter4(!showDropFilter4);
  };

  const Btnclose = () => {
    setShowDropFilter4();
  }

  const CapacityMoreFiltersOpen = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (showDropFilter4) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showDropFilter4]);

  return (
    <div>
      <div
        className={`overlay ${showDropFilter4 ? "show" : ""}`}
        onClick={DropFilter4}
      ></div>
      <div className="filter" onClick={DropFilter4}>
        More filters
        <div
          className={`dropfilter4 ${showDropFilter4 ? "show" : ""}`}
          onClick={CapacityMoreFiltersOpen}
        >
          <div className="filter4-header">
            <div className="filter4-close" onClick={Btnclose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </div>
            <div className="filter4-title-header">More filters</div>
          </div>
          <div>
            <hr />
          </div>
          <div className="container">
            <div className="filter4-title">Amenities</div>
            <div className="filter4-column-container">
              <div className="filter4-column">
                <label htmlFor="kitchen" className="individual-filter">
                  <Checkbox defaultChecked id="kitchen" />
                  Kitchen
                </label>
                <label htmlFor="Air conditioning" className="individual-filter">
                  <Checkbox defaultChecked id="Air conditioning" />
                  Air conditioning
                </label>
                <label htmlFor="Heating" className="individual-filter">
                  <Checkbox defaultChecked id="Heating" />
                  Heating
                </label>
                <label htmlFor="Dryer" className="individual-filter">
                  <Checkbox defaultChecked id="Dryer" />
                  Dryer
                </label>
                <label htmlFor="Washer" className="individual-filter">
                  <Checkbox defaultChecked id="Washer" />
                  Washer
                </label>
              </div>
              <div className="filter4-column">
                <label htmlFor="Wifi" className="individual-filter">
                  <Checkbox defaultChecked id="Wifi" />
                  Wifi
                </label>
                <label htmlFor="Indoor fireplace" className="individual-filter">
                  <Checkbox defaultChecked id="Indoor fireplace" />
                  Indoor fireplace
                </label>
                <label htmlFor="Breakfast" className="individual-filter">
                  <Checkbox defaultChecked id="Breakfast" />
                  Breakfast
                </label>
                <label htmlFor="Hair dryer" className="individual-filter">
                  <Checkbox defaultChecked id="Hair dryer" />
                  Hair dryer
                </label>
                <label
                  htmlFor="Dedicated workspace"
                  className="individual-filter"
                >
                  <Checkbox defaultChecked id="Dedicated workspace" />
                  Dedicated workspace
                </label>
              </div>
            </div>
            <hr />
            <div className="filter4-title">Facilities</div>
            <div className="filter4-column-container">
              <div className="filter4-column">
              <label
                  htmlFor="Free parking on premise"
                  className="individual-filter"
                >
                  <Checkbox defaultChecked id="Free parking on premise" />
                  Free parking on premise
                </label>
                <label
                  htmlFor="Hot tub"
                  className="individual-filter"
                >
                  <Checkbox defaultChecked id="Hot tub" />
                  Hot tub
                </label>
                <label
                  htmlFor="Gym"
                  className="individual-filter"
                >
                  <Checkbox defaultChecked id="Gym" />
                  Gym
                </label>
              </div>
              <div className="filter4-column">
              <label
                  htmlFor="Pool"
                  className="individual-filter"
                >
                  <Checkbox defaultChecked id="Pool" />
                  Pool
                </label>
                <label
                  htmlFor="EV charger"
                  className="individual-filter"
                >
                  <Checkbox defaultChecked id="EV charger" />
                  EV charger
                </label>
              </div>
            </div>
            <hr />
            <div className="filter4-title">Property Type</div>
            <div className="filter4-column-container">
              <div className="filter4-column">
              <label
                  htmlFor="House"
                  className="individual-filter"
                >
                  <Checkbox defaultChecked id="House" />
                  House
                </label>
                <label
                  htmlFor="Bed and breakfast"
                  className="individual-filter"
                >
                  <Checkbox defaultChecked id="Bed and breakfast" />
                  Bed and breakfast
                </label>
                <label
                  htmlFor="Apartment"
                  className="individual-filter"
                >
                  <Checkbox defaultChecked id="Apartment" />
                  Apartment
                </label>
                <label
                  htmlFor="Boutique hotel"
                  className="individual-filter"
                >
                  <Checkbox defaultChecked id="Boutique hotel" />
                  Boutique hotel
                </label>
                <label
                  htmlFor="Bungalow"
                  className="individual-filter"
                >
                  <Checkbox defaultChecked id="Bungalow" />
                  Bungalow
                </label>
              </div>
              <div className="filter4-column">
              <label
                  htmlFor="Chalet"
                  className="individual-filter"
                >
                  <Checkbox defaultChecked id="Chalet" />
                  Chalet
                </label>
                <label
                  htmlFor="Condominium"
                  className="individual-filter"
                >
                  <Checkbox defaultChecked id="Condominium" />
                  Condominium
                </label>
                <label
                  htmlFor="Cottage"
                  className="individual-filter"
                >
                  <Checkbox defaultChecked id="Cottage" />
                  Cottage
                </label>
                <label
                  htmlFor="Guest suite"
                  className="individual-filter"
                >
                  <Checkbox defaultChecked id="Guest suite" />
                  Guest suite
                </label>
                <label
                  htmlFor="Guesthouse"
                  className="individual-filter"
                >
                  <Checkbox defaultChecked id="Guesthouse" />
                  Guesthouse
                </label>
              </div>
            </div>
            <hr />
            <div className="filter4-house-rules">
              <div className="filter4-title">House rules</div>
              <div className="filter4-column-container">
                <div className="filter4-column">
                <label
                  htmlFor="Pets allowed"
                  className="individual-filter"
                >
                  <Checkbox defaultChecked id="Pets allowed" />
                  Pets allowed
                </label>
                </div>
                <div className="filter4-column">
                <label
                  htmlFor="Smoking allowed"
                  className="individual-filter"
                >
                  <Checkbox defaultChecked id="Smoking allowed" />
                  Smoking allowed
                </label>
                </div>
              </div>
            </div>
          </div>
          <div className="filter4-footer">
            <button className="btn-clear-filter">Clear</button>
            <button className="btn-aply-filter">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter4;
