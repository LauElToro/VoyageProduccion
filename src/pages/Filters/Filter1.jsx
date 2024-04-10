import React from "react";
import { useState, useEffect, useRef } from "react";
import Checkbox from "@mui/material/Checkbox";
import './filter1.css';

function Filter1() {
  const [showDropFilter1, setShowDropFilter1] = useState(false);
  const filterRef = useRef(null);

  const DropFilter = () => {
    setShowDropFilter1(!showDropFilter1);
  };

  const CheckBoxOpen = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowDropFilter1(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
 

  return (
    <div className="filter" onClick={DropFilter}  ref={filterRef}>
      Type of place{" "}
      <div className="arrow-filter">
        <ion-icon name="chevron-down-outline" />
      </div>
      <div className={`dropfilter1 ${showDropFilter1 ? "show" : ""}`} >
        <div onClick={CheckBoxOpen}>
        <div className="checkbox-container" >
          <Checkbox defaultChecked />
          <div className="text-checkbox">
            <div className="title-checkbox-container">Entire place</div>
            <div className="subtitle-checkbox-container">
              Have a place to yourself
            </div>
          </div>
        </div>

        <div className="checkbox-container" >
          <Checkbox defaultChecked />
          <div className="text-checkbox">
            <div className="title-checkbox-container">Private room</div>
            <div className="subtitle-checkbox-container">
              Have your own room and share some common spaces
            </div>
          </div>
        </div>

        <div className="checkbox-container" >
          <Checkbox defaultChecked />
          <div className="text-checkbox">
            <div className="title-checkbox-container">Hotel room</div>
            <div className="subtitle-checkbox-container">
              Have a private or shared room in a boutique hotel, hostel, and
              more
            </div>
          </div>
        </div>

        <div className="checkbox-container" >
          <Checkbox defaultChecked />
          <div className="text-checkbox">
            <div className="title-checkbox-container">Shared room</div>
            <div className="subtitle-checkbox-container">
              Stay in a shared space, like a common room
            </div>
          </div>
        </div>
        <div className="buttons-filter">
          <button className="btn-clear-filter">Clear</button>
          <button className="btn-aply-filter">Apply</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Filter1;
