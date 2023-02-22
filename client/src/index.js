import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ContextStore } from "./ContextStore";
import App from "./App";

ReactDOM.render(
  <ContextStore>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextStore>,
  document.getElementById("root")
);
