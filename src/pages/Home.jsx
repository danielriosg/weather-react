import React, { useState } from 'react';
import WeatherCard from '../components/WeatherCard';
import { fetchWeather } from '../utils/weatherApi.js';
import "../styles/pages/Home.css";

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');

  const handleSearch = async () => {
    const weatherData = await fetchWeather(city);
    setWeather(weatherData);
  };

  return (
    <div className="home">
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button className='get-weather-btn'onClick={handleSearch}>Get Weather</button>

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default Home;

