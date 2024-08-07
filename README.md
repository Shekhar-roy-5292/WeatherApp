# Weather Forecast App

A weather forecast application built with React Native and Expo. This app provides current weather information and forecasts based on the user's location or a searched city.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Features

- Displays current weather information based on user location or searched city.
- Provides weather forecasts including temperature, wind speed, sunrise, and sunset times.
- User can search for weather information by city name.
- Clean and modern UI design.

## Screenshots

<!-- Add screenshots of your app here -->
![Home Screen](path/to/home_screen.png)
![Search Screen](path/to/search_screen.png)

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/Shekhar-roy-5292/WeatherApp.git
    cd WeatherApp
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Install Expo CLI:**
    ```sh
    npm install -g expo-cli
    ```

4. **Run the application:**
    ```sh
    expo start
    ```

## Usage

1. **Start the application:**
    ```sh
    expo start
    ```

2. **Open the app in Expo Go:**
    - Scan the QR code with Expo Go app (available on iOS and Android).

3. **Features:**
    - The app will request location permission to provide weather data for your current location.
    - You can search for weather information by entering a city name in the search bar.

## API

This project uses the following APIs:

1. **Open-Meteo API for weather data:**
    - Endpoint: `https://api.open-meteo.com/v1/forecast`
    - Parameters: `latitude`, `longitude`, `daily`, `timezone`, `current_weather`

2. **Open-Meteo API for geocoding:**
    - Endpoint: `https://geocoding-api.open-meteo.com/v1/search`
    - Parameters: `name`, `count`, `language`, `format`

3. **Nominatim API for reverse geocoding:**
    - Endpoint: `https://nominatim.openstreetmap.org/reverse`
    - Parameters: `format`, `lat`, `lon`

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the repository.**
2. **Create a new branch:**
    ```sh
    git checkout -b feature-branch
    ```

3. **Make your changes and commit them:**
    ```sh
    git commit -m "Add some feature"
    ```

4. **Push to the branch:**
    ```sh
    git push origin feature-branch
    ```

5. **Submit a pull request.**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

