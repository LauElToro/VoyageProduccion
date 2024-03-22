import React from "react";
import ReactDOM from "react-dom";
import { AppRouter } from "./router/AppRouter";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter /> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);