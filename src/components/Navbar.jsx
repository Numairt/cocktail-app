import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <Link to="/">
            <img src={Logo} alt="cocktail db logo" className="logo" />
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;