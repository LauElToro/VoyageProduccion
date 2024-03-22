import React, {useState} from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import hotel1 from "../../imageneshotel/hotel1.jpeg";
import ".././carrouselglobal.css";

function CardHotel() {

  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const descripcion = 'Entire cabin - 10 bed';
  const nomHotel = 'Hotel stanford';
  const precio = '$' + 30;
  const ubicacion = 'Paris';
  const stars = '4.4';
  const reviews = 20;


 
 

  return (
    <div className="container-carrousel">
      
      <Carousel>
        <Carousel.Item>
          <div onClick={toggleFavorite} className={`icon-favorite ${isFavorite ? "active" : ""}`} >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                className="icon-tarjet"
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          </div>
          <img className="img1" src={hotel1} alt="Primera imagen" />
        </Carousel.Item>
        <Carousel.Item>
        <div  onClick={toggleFavorite} className={`icon-favorite ${isFavorite ? "active" : ""}`} >
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
          <img className="img1" src={hotel1} alt="Segunda imagen" />
        </Carousel.Item>
        <Carousel.Item>
        <div  onClick={toggleFavorite} className={`icon-favorite ${isFavorite ? "active" : ""}`} >
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
          <img className="img1" src={hotel1} alt="Tercera imagen" />
        </Carousel.Item>
      </Carousel>
      <div className="header-subtext-carousel">{descripcion}</div>
      <div className="text-carousel"> {nomHotel} </div>
      <div className="header-subtext-carousel">
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
        {ubicacion}
      </div>
      <div className="tarjet-foot">
        <div className="price">
          {precio} <div className="subtext-carousel">/night</div>
        </div>
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
          <div className="score-number">{stars}</div>
          <div className="subtext-carousel">({reviews})</div>
        </div>
      </div>
    </div>
  );
}

export default CardHotel;
