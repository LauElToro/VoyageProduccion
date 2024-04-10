import React from "react";
import styled from "styled-components";
import Images from "./images";
import Searcher from "./Searcher";

function Body() {
  return (
    <div>
      <Bodycontainer>
        <div className="title-btn">
          <Textcontiner>
            <h2>Hi There! Where would you like to go?</h2>

            <p>
              Choose any of our best destinations to enjoy and travel <br />
              around the world.
            </p>

            <br />
            <Searcher />
          </Textcontiner>
        </div>
        <Images />
      </Bodycontainer>
    </div>
  );
}

export default Body;

const Bodycontainer = styled.div`
  display: flex;
  align-items: center;
  justify-comtent: center;
  margin: 100px;

  @media (max-width: 890px) {
    display: block;
    padding-top: 50px;
    margin: 20px;
    margin-top: 80px;
  }

  .title-btn {
    display: flex;
    align-items: center;
    justify-comtent: center;
  }

  h2 {
    @media (max-width: 890px) {
      font-style: normal;
      font-size: 36px;
      line-height: 41px;
      text-align: center;
      width: 300px;
      margin-left: 8%;
      margin-bottom: 50px;
    }

    font-family: Poppins, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    font-style: normal;
    font-size: 42px;
    line-height: 80px;
    color: #111827;
    font-weight: bolder;
    margin-top: 0;
    margin-right: 50px;
    width: 500px;
  }
`;

const Textcontiner = styled.div`
  p {
    font-family: Poppins, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    font-style: normal;
    font-size: 18px;
    line-height: 28px;
    color: #6b7280;
    font-weight: 500;
    @media (max-width: 890px) {
      text-align: center;
      width: 300px;
      margin-left: 8%;
    }
  }
`;
