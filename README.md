# Weather App

## Description

The Weather App provides real-time weather updates and a 6-day forecast. Built with React and styled using Bootstrap, this app offers a responsive and user-friendly interface with both light and dark modes. 

The app fetches weather data from the [Open Meteo API](https://open-meteo.com/). It uses React components and props to manage and display data efficiently. 

## Features

- Real-time weather updates
- 6-day weather forecast
- Light and dark mode toggle
- Responsive design
- Fetches data from Open Meteo API

## Installation

To get a local copy of this project up and running, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/danielriosg/weather-react.git
    ```

2. Navigate to the project directory:
    ```bash
    cd weather-react
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:5173` to see the app in action.

## Usage

1. Enter a city name in the search bar to get the current weather and forecast.
2. Use the dark mode toggle button to switch between light and dark themes.
3. Click on "View the code on GitHub" to access the project's repository.

## Technology Stack

- **React**: Frontend framework
- **Vite**: Development server and build tool
- **Bootstrap**: CSS framework for styling
- **Open Meteo API**: Weather data provider



## API

The app uses the [Open Meteo API](https://open-meteo.com/) to retrieve weather data. Specifically, it utilizes the Geocoding API to obtain location coordinates and fetch weather information based on those coordinates.



