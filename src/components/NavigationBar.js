import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./stylesheets/NavigationBar.css";

import logo from "../icons_assets/Logo.svg";
import hamburger from "../icons_assets/🦆 icon _hamburger menu.svg";

export default function NavigationBar() {
  const [closed, setClosed] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setClosed(true);
  }, [location]);
  return (
    <>
      <div className="navbar-bar">
        <div className="navbar-icon">
          <Link to={"/"}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="navbar-bar-links">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Menu</Link>
          </li>
          <li>
            <Link to={"/reservation"}>Reservations</Link>
          </li>
          <li>
            <Link>Order Online</Link>
          </li>
          <li>
            <Link>Login</Link>
          </li>
        </ul>
        <button
          className="navbar-menu-button"
          onClick={() => setClosed(!closed)}
        >
          <img src={hamburger} alt="MENU" className="hamburger" />
        </button>
        <div className="navbar-dropdown" hidden={closed}>
          <ul className="navbar-button-links">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Menu</Link>
            </li>
            <li>
              <Link to={"/reservation"}>Reservations</Link>
            </li>
            <li>
              <Link>Order Online</Link>
            </li>
            <li>
              <Link>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
