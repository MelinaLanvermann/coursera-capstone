import React from "react";
import "./stylesheets/Highlights.css";
import SpecialsCard from "./SpecialsCard";

export default function Highlights() {
  const specials = [
    {
      name: "Greek salad",
      price: 12.99,
      description:
        "The famous greed salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
      image: "icons_assets/greek salad.jpg",
    },
    {
      name: "Bruchetta",
      price: 5.99,
      description:
        "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: "icons_assets/bruchetta.svg",
    },
    {
      name: "Lemon Dessert",
      price: 5.0,
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: "icons_assets/lemon dessert.jpg",
    },
  ];
  return (
    <>
      <div className="specials-container">
        <div className="specials-header">
          <h4>Specials</h4>
          <button>Online Menu</button>
        </div>
        <div className="specials-grid">
          {specials.map((special) => (
            <SpecialsCard props={special}></SpecialsCard>
          ))}
        </div>
      </div>
    </>
  );
}
