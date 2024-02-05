
import React, { useState } from "react";

const WeatherSearchForm = ({ onSearch, onToggleUnits }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city) {
      onSearch(city);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? handleSearch() : "")}
      />
      <button onClick={handleSearch}>Search</button>
      <button className="toggle-unit-button" onClick={onToggleUnits}>
        Switch Unit
      </button>
    </div>
  );
};

export default WeatherSearchForm;
