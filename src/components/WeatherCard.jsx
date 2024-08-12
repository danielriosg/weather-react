import React from "react";
import "../styles/components/WeatherCard.css";

const WeatherCard = ({ weather }) => {
  return (
    <div className='weather-card'>
      <h2>{weather.city}</h2>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Condition: {weather.condition}</p>
    </div>
  );
};

export default WeatherCard;
