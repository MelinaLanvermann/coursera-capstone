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
      <h1>Testimonials</h1>
      <div>
        <h4>Rating</h4>
        <img src="" alt="ICN_STAR" />
        <h4>REVIEW_NAME</h4>
        <p>REVIEW_COMMENT</p>
      </div>
    </>
  );
}
