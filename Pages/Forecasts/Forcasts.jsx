import { useRoute } from "@react-navigation/native";
import { DAYS, getWeatherIcon } from "../../utils/meteo-utils.js";
import { Header } from "../../components/Header/Header";
import { ForecastListItem } from "../../components/ForecastListItem/ForecastListItem";
import { View } from "react-native";


export const Forecast = () => {
  const route = useRoute();
  const { params } = route;
  const { city, dailyWeather } = params;

  // console.log("City:", city);
  // console.log("Daily Weather:", dailyWeather);

  const forecustList = (
    <View style={{ marginTop: 50 }}>
      {dailyWeather.time.map((time, index) => {
        const weatherCode = dailyWeather.weathercode[index];
        const image = getWeatherIcon(weatherCode).image;
        const temperature = dailyWeather.temperature_2m_max[index];
        const date = new Date(time);
        const dayOfTheWeek = DAYS[date.getDay()];
        const formatedDate = date.toLocaleDateString("default", {
          month: "numeric",
          day: "numeric",
        });
        return (
          <ForecastListItem
            key={time}
            image={image}
            day={dayOfTheWeek}
            date={formatedDate}
            temperature={temperature.toFixed(0)}
          />
        );
      })}
    </View>
  );
  return (
    <>
      <Header city={city} />
      {forecustList}
    </>
  );
};
