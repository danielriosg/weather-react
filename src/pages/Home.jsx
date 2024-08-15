import React, { useState, useEffect } from "react";
import WeatherCard from '../components/WeatherCard';
import { fetchWeather } from '../utils/weatherApi.js';
import { storeSearch, getStoredSearches } from "../utils/utilities.js"; 
import "../styles/pages/Home.css";

const Home = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    // Load recent searches when the component mounts
    setRecentSearches(getStoredSearches());
  }, []);

  const handleSearch = async () => {
    const weatherData = await fetchWeather(city);
    setWeather(weatherData);
    storeSearch(city);
    setRecentSearches(getStoredSearches()); // Update recent searches after a new search
  };

  const handleSelectRecent = (city) => {
    setCity(city);
    handleSearch();
  };

  return (
    <div className='home'>
      <h1>Weather App</h1>
      <div className='search-container'>
        <input
          type='text'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder='Enter city name'
          list='recent-searches' // Add this attribute to connect the datalist
        />
        <datalist id='recent-searches'>
          {recentSearches.map((search, index) => (
            <option key={index} value={search} />
          ))}
        </datalist>
        <button className='get-weather-btn' onClick={handleSearch}>
          Search
        </button>
      </div>
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default Home;
