import React from "react";
import "./stylesheets/Testimonials.css";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rebecca Reviewer",
      rating: 4,
      reviewmsg: "Super friendly staff, and good food :)",
    },
    {
      name: "Randy Random",
      rating: 5,
      reviewmsg: "I really enjoyed the atmosohere.",
    },
    {
      name: "Tom Tester",
      rating: 4,
      reviewmsg: "Will definetly come back with my friends again.",
    },
    {
      name: "Lara Liker",
      rating: 4,
      reviewmsg: "My favourite was the Bruchetta.",
    },
  ];
  return (
    <>
      <div className="testimonials-section">
        <h1>Testimonials</h1>
        <div className="review-grid">
          {reviews.map((review) => (
            <div className="review-card">
              <h3>{review.name}</h3>
              <h4>{review.rating}/5</h4>
              <p>{review.reviewmsg}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
