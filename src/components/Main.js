import React from "react";
import "../App.css";

//Component imports
import HeroSection from "./HeroSection";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";
// import TableBooking from "./TableBooking";

export default function Main() {
  return (
    <>
      <HeroSection></HeroSection>
      <Highlights></Highlights>
      <Testimonials></Testimonials>
      <About></About>
    </>
  );
}
