import { useState, useEffect, useRef } from "react";
import "./filter3.css";

function Filter3() {
  const [showDropFilter3, setShowDropFilter3] = useState(false);
  const filterRef3 = useRef(null);

  const DropFilter3 = () => {
    setShowDropFilter3(!showDropFilter3);
  };


  useEffect(() => {
    const handleClickOutside3 = (event) => {
      if (filterRef3.current && !filterRef3.current.contains(event.target)) {
        setShowDropFilter3(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside3);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside3);
    };
  }, []);

  const [capacityBeds, setCapacityBeds] = useState(0);

  const handleIncrementCapacityBeds = () => {
    if (capacityBeds < 10) {
      setCapacityBeds((prevCapacityBeds) => prevCapacityBeds + 1);
    }
  };

  const handleDecrementCapacityBeds = () => {
    if (capacityBeds >= 1) {
      setCapacityBeds((prevCapacityBeds) => prevCapacityBeds - 1);
    }
  };

  const [capacityBedrooms, setCapacityBedrooms] = useState(0);

  const handleIncrementCapacityBedrooms = () => {
    if (capacityBedrooms < 10) {
      setCapacityBedrooms((prevCapacityBedrooms) => prevCapacityBedrooms + 1);
    }
  };

  const handleDecrementCapacityBedrooms = () => {
    if (capacityBedrooms >= 1) {
      setCapacityBedrooms((prevCapacityBedrooms) => prevCapacityBedrooms - 1);
    }
  };

  const [capacityBathrooms, setCapacityBathrooms] = useState(0);

  const handleIncrementCapacityBathrooms = () => {
    if (capacityBathrooms < 10) {
      setCapacityBathrooms(
        (prevCapacityBathrooms) => prevCapacityBathrooms + 1
      );
    }
  };

  const handleDecrementCapacityBathrooms = () => {
    if (capacityBathrooms >= 1) {
      setCapacityBathrooms(
        (prevCapacityBathrooms) => prevCapacityBathrooms - 1
      );
    }
  };

  const CapacityRoomOpen = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="filter" onClick={DropFilter3} ref={filterRef3}>
      Rooms of Beds{" "}
      <div className="arrow-filter">
        <ion-icon name="chevron-down-outline" />
      </div>
      <div className={`dropfilter3 ${showDropFilter3 ? "show" : ""}`}>
        <div onClick={CapacityRoomOpen}>
          <div className="filter-beds">
            <div className="filter3-text">Beds</div>
            <div className="filter-btns">
              <div
                className="filter3-button"
                onClick={handleDecrementCapacityBeds}
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
                id="beds"
                name="beds"
                value={capacityBeds}
                readOnly
                className="inputcapacity"
              />
              <div
                className="filter3-button"
                onClick={handleIncrementCapacityBeds}
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

          <div className="filter-beds">
            <div className="filter3-text">Bedrooms</div>
            <div className="filter-btns">
              <div
                className="filter3-button"
                onClick={handleDecrementCapacityBedrooms}
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
                id="bedrooms"
                name="bedrooms"
                value={capacityBedrooms}
                readOnly
                className="inputcapacity"
              />
              <div
                className="filter3-button"
                onClick={handleIncrementCapacityBedrooms}
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

          <div className="filter-beds">
            <div className="filter3-text">Bathrooms</div>
            <div className="filter-btns">
              <div
                className="filter3-button"
                onClick={handleDecrementCapacityBathrooms}
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
                id="bathrooms"
                name="bathrooms"
                value={capacityBathrooms}
                readOnly
                className="inputcapacity"
              />
              <div
                className="filter3-button"
                onClick={handleIncrementCapacityBathrooms}
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
          <div className="buttons-filter">
            <button className="btn-clear-filter">Clear</button>
            <button className="btn-aply-filter">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter3;
