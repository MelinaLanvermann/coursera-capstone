import React from "react";
import "./stylesheets/HeroSection.css";

import citrus from "../icons_assets/Asset 9@4x.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <>
      <div className="hero-section-container">
        <div>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button onClick={(e) => e.preventDefault}>
            <Link to={"/reservation"}>Reserve a table</Link>
          </button>
        </div>
        <img src={citrus} alt="IMG_LL" />
      </div>
    </>
  );
}
