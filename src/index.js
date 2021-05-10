import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import UserContextProvider from "./context/UsersContext";
import ToggleContextProvider from "./context/ToggleContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
    <BrowserRouter>
      <GlobalProvider>
        <ToggleContextProvider>
        <App />
        </ToggleContextProvider>
      </GlobalProvider>
    </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
