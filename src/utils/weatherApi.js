// utils/weatherAPI.js

// Function to get latitude and longitude for a given city using Open-Meteo's geocoding API
async function getCoordinates(city) {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
  );
  const data = await response.json();

  if (data.results && data.results.length > 0) {
    const { latitude, longitude } = data.results[0];
    return { lat: latitude, lon: longitude };
  } else {
    throw new Error("City not found");
  }
}

// Function to fetch weather data from Open-Meteo
export async function fetchWeather(city) {
  try {
    const { lat, lon } = await getCoordinates(city); // Use 'lon' here
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();

    // Format the data to match what WeatherCard expects
    const formattedData = {
      city_name: city, // Use the city name directly from the input
      temperature: data.daily.temperature_2m_max[0], // Today's max temperature
      condition: data.daily.weathercode[0], // Today's weather condition
      daily: {
        time: data.daily.time,
        temperature_2m_max: data.daily.temperature_2m_max,
        temperature_2m_min: data.daily.temperature_2m_min,
        weathercode: data.daily.weathercode,
      },
    };

    return formattedData;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}
