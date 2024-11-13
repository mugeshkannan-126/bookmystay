import React from "react";
import "./search.css"; // Make sure to create this CSS file

const Search = () => {
  return (
    <div className="booking-section">
      <div className="booking-box">
        <div className="booking-field">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Enter your hotel location"
          />
        </div>
        <div className="booking-field">
          <label htmlFor="checkin-date">Check-in Date</label>
          <input type="date" id="checkin-date" />
        </div>
        <div className="booking-field">
          <label htmlFor="checkout-date">Check-out Date</label>
          <input type="date" id="checkout-date" />
        </div>
        <div className="booking-field">
          <label htmlFor="rooms">Number of Rooms</label>
          <input type="number" id="rooms" placeholder="1" min="1" />
        </div>
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default Search;
