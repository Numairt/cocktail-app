import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import SingleCocktail from "./pages/SingleCocktail.jsx";
import About from "./pages/About.jsx";
import Error from "./pages/Error.jsx";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AppProvider } from "./Context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
