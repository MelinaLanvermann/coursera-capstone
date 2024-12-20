import React, { useState } from "react";
import "./stylesheets/TableBooking.css";

export default function TableBooking({ dispatch, availableTimes }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guestNr, setGuestNr] = useState("1");
  const [occasion, setOccasion] = useState("No special occasion");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleDateChange = (dateString) => {
    setDate(dateString);
    dispatch({
      type: "UPDATE_AVAILABILITY",
      payload: dateString,
    });
  };

  const clearForm = () => {
    setDate("");
    setTime("");
    setGuestNr("1");
    setOccasion("No special occasion");
    setName("");
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const reservationData = {
      id: new Date().toISOString,
      date,
      time,
      guestNr,
      occasion,
      name,
      email,
    };

    dispatch({
      type: "ADD_RESERVATION",
      payload: reservationData,
    });

    clearForm();
  };

  return (
    <>
      <div className="reservation-container">
        <h1>Reserve a table</h1>
        <form onSubmit={handleSubmit} className="reservation-form">
          <div className="reservation-input-group">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => handleDateChange(e.target.value)}
            />
          </div>

          <div className="reservation-input-group">
            <label htmlFor="time">Time</label>
            <select
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              {availableTimes.map((time) => (
                <option>{time}</option>
              ))}
            </select>
          </div>

          <div className="reservation-input-group">
            <label htmlFor="guests">Number of Guests</label>
            <input
              id="guests"
              type="number"
              min={1}
              max={10}
              value={guestNr}
              onChange={(e) => setGuestNr(e.target.value)}
            />
          </div>

          <div className="reservation-input-group">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option>No special occasion</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>

          <div className="reservation-input-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="reservation-input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
