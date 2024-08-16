import React, { useState, useEffect } from "react";
import WeatherCard from "../components/WeatherCard";
import { fetchWeather } from "../utils/weatherApi.js";
import { storeSearch, getStoredSearches } from "../utils/utilities.js";
import "../styles/pages/Home.css";

const Home = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Load recent searches when the component mounts
    setRecentSearches(getStoredSearches());
  }, []);

  const handleSearch = async () => {
    try {
      const weatherData = await fetchWeather(city);
      if (weatherData) {
        setWeather(weatherData);
        storeSearch(city);
        setRecentSearches(getStoredSearches());
        setError(""); // Clear any previous error messages
      } else {
        setError(
          "Unable to retrieve weather data. Please check the city name for spelling errors and try again."
        );
        setWeather(null); // Clear the weather data if there's an error
      }
    } catch (err) {
      setError(
        "An error occurred while fetching weather data. Please try again later."
      );
      setWeather(null); // Clear the weather data if there's an error
    }
  };

  const handleSelectRecent = (city) => {
    setCity(city);
    handleSearch();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className='home'>
      <h1>Weather App</h1>
      <div className='search-container'>
        <input
          type='text'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder='Enter city name'
          list='recent-searches'
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
      {error && <p className='error-message'>{error}</p>}{" "}
      {/* Display error message if there's an error */}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default Home;
