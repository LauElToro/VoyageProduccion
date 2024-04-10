import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./tarjethotelsearch.css";
import angeles from "../../imagenes/angeles.jpg";
import { Link } from "react-router-dom";

function Tarjethotelsearch() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFavoritoEvent, setIsFavoritoEvent] = useState(false);

  const NextArrow = ({ onClick }) => (
    <div className="flecha siguiente" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-arrow-right-short"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
        />
      </svg>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="flecha atras" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-arrow-left-short"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
        />
      </svg>
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const renderCustomDots = () => {
    const slides = Array.from({ length: 3 }, (_, index) => index);
    return (
      <ul className="custom-dots">
        {slides.map((index) => (
          <li key={index} className={index === currentSlide ? "active" : ""}>
            <button onClick={() => setCurrentSlide(index)} />
          </li>
        ))}
      </ul>
    );
  };

  const handleFavoritoClickEvent = () => {
    setIsFavoritoEvent(!isFavoritoEvent);
  };

 const imgResult = angeles;
 const descriResult = 'Entire cabin in 10 anzinger court';
 const tituResult = 'Titulo Resultado Card'
 const guests = 6 ;
 const baths = 6 ;
 const bedrooms = 6 ;
 const beds = 6 ;
 const stars = 4.5;
 const price = '$' + 25;




  return (
    <>
      <div className="tarjet-container">
        <div className="carrusel-container-hotel">
        <Link to="/hotelindividual" className="sin-decoracion">
          <Slider {...settings}>
            <div className="img-container-hotel">
              <img className="img-hotel-carrusel" src={imgResult} alt="" />
            </div>
            <div className="img-container-hotel">
              <img className="img-hotel-carrusel" src={imgResult} alt="" />
            </div>
            <div className="img-container-hotel">
              <img className="img-hotel-carrusel" src={imgResult} alt="" />
            </div>
          </Slider>
          {renderCustomDots()}
          </Link>
          <div
            className={`favorito-icon ${
              isFavoritoEvent ? "favorito-click" : ""
            }`}
            onClick={handleFavoritoClickEvent}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          </div>
        </div>
        <Link to="/hotelindividual" className="sin-decoracion">
        <div className="body-tarjet-content">
          <div className="subtitle-content">
            {descriResult}
          </div>
          <div className="title-content">{tituResult}</div>
          <div className="info-tarjet-container">
            <div className="info-tarjet">· {guests} guests</div>
            <div className="info-tarjet">· {baths} baths</div>
            <div className="info-tarjet">· {bedrooms} bedrooms</div>
          </div>
          <div className="info-tarjet-container">
            <div className="info-tarjet">· {beds} beds</div>
            <div className="info-tarjet">· No smoking</div>
            <div className="info-tarjet">· Wifi</div>
          </div>
          <div className="footer-tarjet-content">
            <div className="score-tarjet">
              <div className="iconstar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <div className="score-number">{stars}</div>
            </div>
            <div className="price-tarjet">
              <div className="price-number">{price}</div>{" "}
              <div className="price-word"> /night </div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    </>
  );
}

export default Tarjethotelsearch;
