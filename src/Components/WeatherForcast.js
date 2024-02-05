import React, { useState } from "react";
import WeatherSearchForm from "./WeatherSearchForm";
import WeatherInfo from "./WeatherInfo";
import './WeatherApp.css'

const WeatherForcast = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const apikey = "bf4cc3f764166aa7160f5c1fd59948d3";
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=${unit}&appid=${apikey}`;

  const fetchWeatherData = async (city) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiurl}&q=${city}`);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeatherData(data);
      setError(false);
    } catch (error) {
      setError(true);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleUnits = () => {
    setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
  };

  return (
    <div className="weather-container">
      <WeatherSearchForm onSearch={fetchWeatherData} onToggleUnits={handleToggleUnits} />

      {loading && <p>Loading...</p>}
      {error && <p className="error-message">City cannot be found </p>}

      {weatherData && <WeatherInfo weatherData={weatherData} unit={unit} />}
    </div>
  );
};

export default WeatherForcast;
