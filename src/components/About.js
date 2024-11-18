import React from "react";
import "./stylesheets/About.css";

import logo from "../icons_assets/Asset 7@4x.png";

export default function About() {
  return (
    <>
      <div className="about-section">
        <div className="about-section-col">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.{" "}
          </p>
        </div>
        <img src={logo} alt="IMG_LEMON" />
      </div>
    </>
  );
}
