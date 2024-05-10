import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer theme="dark" position="top-right" autoClose={3000} closeOnClick pauseOnHover={true} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
