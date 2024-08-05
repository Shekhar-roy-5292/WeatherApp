import { View, Text } from "react-native";
import { Basic } from "../components/Basic/Basic";
import { Homestyles } from "./Home.style";
import { getWeatherIcon } from "../utils/meteo-utils";

const Home = ({ weather, city }) => {
  const currentWeather = weather.current_weather;
  const currentInterpretation = getWeatherIcon(currentWeather.weathercode);

  console.log("Current Weather:", currentWeather);
  console.log("City:", city);

  return (
    <>
      <View style={Homestyles.basic}>
        <Basic
          city={city}
          interpretation={currentInterpretation}
          temperature={Math.round(currentWeather.temperature)}
        />
      </View>
      <View style={Homestyles.searchBar}>
        <Text style={Homestyles.txt}>Search bar</Text>
      </View>
      <View style={Homestyles.advanced}>
        <Text style={Homestyles.txt}>Advanced weather info</Text>
      </View>
    </>
  );
};

export default Home;
