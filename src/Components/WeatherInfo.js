// WeatherInfo.jsx
import React from "react";

const WeatherInfo = ({ weatherData, unit }) => {
  return (
    <div className="weather-info">
      <h2>{weatherData.name}</h2>
      <p>
        Temperature: {weatherData.main.temp} {unit === "metric" ? "C" : "F"}
      </p>
      <p>Weather: {weatherData.weather[0].description} </p>
      <p>Hunmidity: {weatherData.main.humidity}% </p>
    </div>
  );
};

export default WeatherInfo;
