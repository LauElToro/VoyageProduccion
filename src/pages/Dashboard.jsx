import React from "react";
import BlogForm from "./fetch/fetchBlog";
import PriceHotelForm from "./fetch/hotelPrice";
import RoomRatesForm from "./fetch/Roomrates";
import TituloHotelForm from "./fetch/tituloHotel";
import PriceCarForm from "./fetch/priceCar.jsx";
import PickupForm from "./fetch/pickUp";
import ParametersForm from "./fetch/parameters.jsx";
import Owner from "./fetch/Owner.jsx";
import InfoKnowForm from "./fetch/infoknow.jsx";
import DescriptionForm from "./fetch/description.jsx";
import CarouselForm from "./fetch/Carousel.jsx";
import "./Dashboard.css";
import PriceHotelUpdateComponent from "./PUT/fetchPUT/searchDashboard.jsx";


export const Dashboard =  () => {
  return (
    <>
    <BlogForm />
    <PriceHotelForm />
    <RoomRatesForm />
    <TituloHotelForm />
    <PriceCarForm />
    <PickupForm />
    <ParametersForm />
    <Owner />
    <InfoKnowForm />
    <DescriptionForm />
    <CarouselForm />
    <PriceHotelUpdateComponent />
    </>
    );

}
