import React from "react";
import styled from "styled-components";
import Suggestion1 from "./Tarjetssuggestiondestin/Suggestion1";


function Tarjetsuggestiondestins() {
  return (
    <Tarjetstopdestinscontainer>
      <div className="Title">Suggestions for discovery</div>
      <div className="subtitle">
        Popular places to stay that Chisfis recommends for you
      </div>
      <div className="suggestcontainer">
        <Suggestion1 />
        <Suggestion1 />
        <Suggestion1 />
        <Suggestion1 />
      </div>
    </Tarjetstopdestinscontainer>
  );
}

export default Tarjetsuggestiondestins;

const Tarjetstopdestinscontainer = styled.div`
padding-top:100px;
padding-bottom:200px;
background-color:#F2E6D8;
border-radius:30px;
margin-bottom:150px;
display:grid;
.Title{
  display:flex;
  justify-content:center;
  align-items:center;
  font-family:Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight:600;
  line-height:40px;
  font-size:36px;
  color:#111827
  font-style:normal;
  @media (max-width: 720px) {
   text-align: center;
  }
}



.subtitle{
  display:flex;
  justify-content:center;
  align-items:center;
  font-family:Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight:400;
  line-height:28px;
  font-size:20px;
  color:#6b7280;
  font-style:normal;
  @media (max-width: 720px) {
    padding-top: 20px;
    text-align: center;
   }
}

.suggestcontainer{
  display: flex;
  justify-content:space-around;
}
@media (max-width: 720px) { 
  .suggestcontainer{
    display: grid;
    justify-content:space-around;
  }
}
`;
