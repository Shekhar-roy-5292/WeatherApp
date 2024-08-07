export const WEATHER_INTERPRETATION = [
  {
    codes: [0],
    image: require("../assets/sun.png"),
    label: "Sunny",
  },
  {
    codes: [1, 2, 3, 45, 48],
    image: require("../assets/clouds.png"),
    label: "Cloudy",
  },
  {
    codes: [51, 53, 55, 56, 57, 61, 63, 65, 67, 80, 81, 82, 85, 86],
    image: require("../assets/rain.png"),
    label: "Rainy",
  },
  {
    codes: [71, 73, 75, 77],
    image: require("../assets/snow.png"),
    label: "Snowy",
  },
  {
    codes: [95, 96, 99],
    image: require("../assets/thunder.png"),
    label: "Thunderstorm",
  },
];

export function getWeatherIcon(code) {
  return WEATHER_INTERPRETATION.find((interpretation) =>
    interpretation.codes.includes(code)
  );
}

export const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
