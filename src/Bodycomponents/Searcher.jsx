import React from "react";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";

function Searcher() {
  return (
    <Searchcontainer>
      <div>
        <Link to="/reservador">
          <button className="searchbtn">Start your search</button>
        </Link>
        <Outlet />
      </div>
    </Searchcontainer>
  );
}

export default Searcher;

const Searchcontainer = styled.div`
  @media (max-width: 890px) {
    display: block;
    padding-top: 30px;
    margin-left: 25%;
  }

  .searchbtn {
    border-radius: 30px;
    width: 180px;
    height: 70px;
    border: none;
    background-color: #000000;
    font-family: Poppins, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    color: #f9fafb;
    &:hover {
      background-color: #efb810;
    }
  }
`;
