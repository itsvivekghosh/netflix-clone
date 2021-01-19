import React from "react";
import { render } from "react-dom";
import App from "./App";
import "normalize.css";
import GlobalStyles from "./globalStyles.js";

render(
  <div>
    <GlobalStyles />
    <App />
  </div>,
  document.getElementById("root")
);
