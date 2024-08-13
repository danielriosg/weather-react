// src/services/weatherService.js
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;  // Access the API key from the .env file

export const fetchWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();

    // Adjust the return object to match the OpenWeatherMap API structure
    return {
      city: data.name,
      temperature: data.main.temp,
      condition: data.weather[0].description,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
