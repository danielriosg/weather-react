// components/WeatherCard.jsx
import React from "react";

const WeatherCard = ({ weather }) => {
  const getWeatherIcon = (weatherCode) => {
    switch (weatherCode) {
      case 0:
        return "☀️"; // Clear sky
      case 1:
      case 2:
      case 3:
        return "⛅"; // Partly cloudy
      case 45:
      case 48:
        return "🌫"; // Fog
      case 51:
      case 53:
      case 55:
        return "🌦"; // Drizzle
      case 61:
      case 63:
      case 65:
        return "🌧"; // Rain
      case 71:
      case 73:
      case 75:
        return "❄️"; // Snow
      case 80:
      case 81:
      case 82:
        return "🌧"; // Rain showers
      case 95:
        return "⛈"; // Thunderstorm
      default:
        return "❓"; // Unknown
    }
  };

  return (
  <div className='weather-card'>
    <h2>{weather.city_name}</h2>
    <div className='forecast'>
      {weather.daily && weather.daily.time.length > 0 ? (
        weather.daily.time.map((day, index) => (
          <div key={index} className='forecast-day'>
            <p>{new Date(day).toLocaleDateString()}</p> {/* Convert the date string to a readable format */}
            <p>{getWeatherIcon(weather.daily.weathercode[index])}</p>
            <p>
              {weather.daily.temperature_2m_min[index]}°C /{" "}
              {weather.daily.temperature_2m_max[index]}°C
            </p>
          </div>
        ))
      ) : (
        <p>Loading forecast data...</p> 
      )}
    </div>
  </div>
);
};

export default WeatherCard;
