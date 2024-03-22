import React from "react";
import styled from "styled-components";

function DropdownEvent() {
  return (
    <DropContainer>
      <div className="dropdown-container">
        <div className="dropdown-trigger">
          Event{" "}
          <div className="arrow">
            <ion-icon name="chevron-down-outline" />
          </div>
        </div>
        <ul className="dropdown-menu">
          <li>
            <a className="droplink" href="/">
              Sports
            </a>
          </li>
          <li>
            <a className="droplink" href="/">
              Music
            </a>{" "}
          </li>
          <li>
            <a className="droplink" href="/">
              Entertainment
            </a>{" "}
          </li>
        </ul>
      </div>
    </DropContainer>
  );
}

export default DropdownEvent;

const DropContainer = styled.nav`
  padding-right: 30px;

  .arrow {
    margin-left: 5px;
    margin-top: 4px;
  }
  .dropdown-container {
    position: relative;
    display: inline-block;
  }

  .dropdown-trigger {
    display: flex;
    align-content: center;
    font-family: Poppins, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    font-style: normal;
    font-size: 20px;
    line-height: 24px;
    text-decoration: none;
    padding: 0.2em 0.4em;
    margin-bottom: 5px;
    border-radius: 0.2em;
    border-radius: 10px;
    cursor: pointer;
    color: #111827;
    &:hover {
      background-color: #efb810;
      color: #fafafa;
    }
  }

  .dropdown-menu {
    font-family: Poppins, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    color: #111827;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    text-decoration: none;
    margin-right: 1rem;
    padding: 0.2em 0.4em;
    border-radius: 0.2em;
    border-radius: 10px;
    position: absolute;
    top: 100%;
    left: 0;
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: none;
  }

  .dropdown-container:hover .dropdown-menu {
    display: block;
  }

  .dropdown-menu li {
    padding: 10px;
    &:hover {
      border-radius: 10px;
      background-color: rgba(128, 128, 128, 0.4);
    }
  }

  .dropdown-menu li:last-child {
    border-bottom: none;
  }
  .droplink {
    font-family: Poppins, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    font-style: normal;
    font-size: 14px;
    line-height: 24px;
    text-decoration: none;
    color: #333;
  }
`;
