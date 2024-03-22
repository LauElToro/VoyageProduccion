import React from "react";
import { useState, useEffect, useRef } from "react";
import Checkbox from "@mui/material/Checkbox";
import '.././Filters/filter1.css';

function Filter1Event() {
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
     <div className="title-filter"> Type of experiences </div> 
      <div className="arrow-filter">
        <ion-icon name="chevron-down-outline" />
      </div>
      <div className={`dropfilter1 ${showDropFilter1 ? "show" : ""}`} >
        <div onClick={CheckBoxOpen}>
        <div className="checkbox-container" >
          <Checkbox defaultChecked />
          <div className="text-checkbox">
            <div className="title-checkbox-container">Food & drink</div>
            <div className="subtitle-checkbox-container">
            Short description for the experience
            </div>
          </div>
        </div>

        <div className="checkbox-container" >
          <Checkbox defaultChecked />
          <div className="text-checkbox">
            <div className="title-checkbox-container">Art and culture</div>
            <div className="subtitle-checkbox-container">
            Short description for the experience
            </div>
          </div>
        </div>

        <div className="checkbox-container" >
          <Checkbox defaultChecked />
          <div className="text-checkbox">
            <div className="title-checkbox-container">Nature and outdoors</div>
            <div className="subtitle-checkbox-container">
            Short description for the experience
            </div>
          </div>
        </div>

        <div className="checkbox-container" >
          <Checkbox defaultChecked />
          <div className="text-checkbox">
            <div className="title-checkbox-container">Sports</div>
            <div className="subtitle-checkbox-container">
            Short description for the experience
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

export default Filter1Event;
