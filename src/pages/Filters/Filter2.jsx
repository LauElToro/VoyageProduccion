import { useState, useEffect, useRef } from "react";
import "./filter2.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}$`;
}

function Filter2() {
  const [showDropFilter2, setShowDropFilter2] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]); 
  const filterRef2 = useRef(null);

  const DropFilter2 = () => {
    setShowDropFilter2(!showDropFilter2);
  };

  const handleCheckboxClick2 = (e) => {
    e.stopPropagation();
  };

  const handleChange = (event, newValue) => {
    setPriceRange(newValue); 
  };

  const RangePriceOpen = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleClickOutside2 = (event) => {
      if (filterRef2.current && !filterRef2.current.contains(event.target)) {
        setShowDropFilter2(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside2);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside2);
    };
  }, []);

  return (
    <div className="filter" onClick={DropFilter2}  ref={filterRef2}>
      ${priceRange[0]} - ${priceRange[1]}{" "}
      <div className="arrow-filter">
        <ion-icon name="chevron-down-outline" />
      </div>
      <div className={`dropfilter2 ${showDropFilter2 ? "show" : ""}`}>
      <div onClick={RangePriceOpen}>
        <div className="title-filter2">Price per day</div>
        <div className="barra-container" onClick={handleCheckboxClick2}>
          
          <Box sx={{ width: 450 }}>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={priceRange}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={0}
              max={2000}
            />
          </Box>
        </div>
        <div className="price-range">
          <div>
            {" "}
            <div className="price-word-filter">Min price </div>
            <div className="price-number-filter">${priceRange[0]}</div>
          </div>
          <div>
            <div className="price-word-filter">Max price</div>
            <div className="price-number-filter">${priceRange[1]}</div>
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

export default Filter2;
