import React from "react";
import "./stylesheets/Footer.css";

import logo from "../icons_assets/Asset 20@4x.png";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content">
          <img src={logo} alt="LOGO" />
          <div className="navigation-links">
            <h4>Doormat Navigation</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Order Online</li>
              <li>Login</li>
            </ul>
          </div>
          <div className="contact-info">
            <h4>Contact</h4>
            <ul>
              <li>Address</li>
              <li>phone number</li>
              <li>email</li>
            </ul>
          </div>
          <div className="socials-links">
            <h4>Social Media Links</h4>
            <ul>
              <li>FaceBook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
