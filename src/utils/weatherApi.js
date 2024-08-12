// src/services/weatherService.js
export const fetchWeather = async (city) => {
  const apiKey = "YOUR_API_KEY"; // Replace with your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
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
