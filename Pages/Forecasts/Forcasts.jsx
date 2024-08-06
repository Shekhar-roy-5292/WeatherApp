import { useRoute } from "@react-navigation/native";
import { Txt } from "../../components/Txt/Txt";
import { Forecaststyles } from "./Forecasts.style";
export const Forecast = () => {
  const route = useRoute();
  const { params } = route;
  const { city, dailyWeather } = params;

  console.log("City:", city);
  console.log("Daily Weather:", dailyWeather);

  return <Txt>hii</Txt>;
};
