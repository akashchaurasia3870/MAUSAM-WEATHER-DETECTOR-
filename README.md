# Weather App

A simple Weather App built with React and Vite that fetches weather data using a weather API and displays the current weather information for a searched city or the user's current location. The app uses React Context for state management.

## Features

- **Search Weather**: Search for the current weather information of any city.
- **Current Location Weather**: Automatically fetches and displays the weather for the user's current location.
- **Weather Details**: Displays detailed weather information including temperature, city name, weather condition, wind speed, humidity, and visibility.
- **React Context**: Uses React Context to manage and store weather data across the application.
- **Responsive Design**: The app is designed to be responsive and works well on different screen sizes.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast and optimized development.
- **Tailwind CSS**: For styling the components.
- **Weather API**: For fetching weather data.
- **Geolocation API**: For fetching the user's current location.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **Git**: Ensure you have Git installed. You can download it from [git-scm.com](https://git-scm.com/).

## Getting Started

Follow these steps to clone the project from GitHub and run it locally on your system.

### Clone the Repository

```sh
git clone https://github.com/your-username/weather-app.git
cd weather-app

npm install

npm run dev


weather-app/
├── public/
│   └── index.html
├── src/
│   ├── API/
│   │   └── index.js
│   ├── Components/
│   │   ├── Cards.jsx
│   │   └── Search.jsx
│   ├── Context/
│   │   └── Weather.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── tailwind.config.js
└── vite.config.js
