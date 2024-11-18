import React from "react";
import "./stylesheets/SpecialsCard.css";
import icon from "../icons_assets/delivery icon.svg";

export default function SpecialsCard({ props }) {
  return (
    <>
      <div className="specials-card">
        <img src={props.image} alt={props.name} className="specials-img" />
        <div className="specials-title">
          <h4 className="specials-name">{props.name}</h4>
          <h4 className="specials-price">${props.price}</h4>
        </div>
        <p>{props.description}</p>
        <button>
          <span>Order a Delivery</span>
          <span>
            <img src={icon} />
          </span>
        </button>
      </div>
    </>
  );
}
