import React, { useState , useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import explore from "../../imagenes/explore.jpg";
import "./carrusels.css";

function Carrusel1() {
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

  


  
    const [carouselItems, setCarouselItems] = useState([]);
  
    useEffect(() => {
      async function fetchCarouselItems() {
        try {
          const response = await fetch('https://voyagelbackend.onrender.com/carousel');
  
          if (!response.ok) {
            throw new Error('Error al obtener la información del carrusel');
          }
  
          const data = await response.json();
          setCarouselItems(data);
        } catch (error) {
          console.error('Error al obtener la información del carrusel:', error);
          // Aquí puedes manejar el error de alguna manera, como mostrando un mensaje al usuario
        }
      }
  
      fetchCarouselItems();
    }, []);
  
   
  
  
  


  return (
    <>
    
    {carouselItems.map((item, index) => (
      <div key={index} className="carousel-item">
       
     
    <div>
      <div className="carrusel-container-event">
        <Slider {...settings}>
          <div className="img-container">
            <img className="img-event-carrusel" src={explore} alt="" />
          </div>
          <div className="img-container">
            <img className="img-event-carrusel" src={explore} alt="" />
          </div>
          <div className="img-container">
            <img className="img-event-carrusel" src={explore} alt="" />
          </div>
        </Slider>
        {renderCustomDots()}
        <div
          className={`favorito-icon ${isFavoritoEvent ? "favorito-click" : ""}`}
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

      <div className="footer-carrusel">
        <div className="footer-header-carrusel">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-geo-alt"
            viewBox="0 0 16 16"
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>{" "}
          {item.ubicacion}
        </div>
        <div className="footer-body-carrusel"> {item.tituEvent} </div>
        <div className="footer-footer-carrusel">
          <div className="flex">
            <div className="price">{item.precio}</div>
            <div className="subtext-carousel">/person</div>
          </div>
          <div className="flex">
            <div className="score">
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
              <div className="score-number">{item.stars}</div>
              <div className="subtext-carousel">({item.reviews})</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    ))}
    </>
  );
}

export default Carrusel1;
