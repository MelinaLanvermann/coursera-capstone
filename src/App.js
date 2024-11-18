import logo from "./icons_assets/Logo.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

//Reducers
import { useReducer, useState } from "react";
import reservationReducer from "./reducers/reservationReducer";

//Component imports
import HeroSection from "./components/HeroSection";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";
import TableBooking from "./components/TableBooking";
import Main from "./components/Main";
import NavigationBar from "./components/NavigationBar";
import { type } from "@testing-library/user-event/dist/type";

function App() {
  const initialState = {
    reservations: [],
    availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  };

  const [state, dispatch] = useReducer(reservationReducer, initialState);

  return (
    <>
      <Router>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route
            path="/reservation"
            element={
              <TableBooking
                dispatch={dispatch}
                availableTimes={state.availableTimes}
              ></TableBooking>
            }
          ></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
