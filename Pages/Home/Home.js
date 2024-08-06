import { View, Text } from "react-native";
import { Basic } from "../../components/Basic/Basic";
import { Homestyles } from "../Home/Home.style";
import { getWeatherIcon } from "../../utils/meteo-utils";
import { MateoAdvanced } from "../../components/Advanced/MateoAdvanced";
import { SearchBar } from "../../components/SearchBar/SearchBar";

const Home = ({ weather, city, onSubmitSearch }) => {
  const currentWeather = weather.current_weather;
  const currentInterpretation = getWeatherIcon(currentWeather.weathercode);
  const dailyWeather = weather.daily;

  // console.log("Current Weather:", currentWeather);
  // console.log("City:", city);
  // console.log("daily:", dailyWeather);

  return (
    <>
      <View style={Homestyles.basic}>
        <Basic
          dailyWeather={dailyWeather}
          city={city}
          interpretation={currentInterpretation}
          temperature={Math.round(currentWeather.temperature)}
        />
      </View>
      <View style={Homestyles.searchBar}>
        <SearchBar onSubmit={onSubmitSearch} />
      </View>
      <View style={Homestyles.advanced}>
        <MateoAdvanced
          sunrise={weather.daily.sunrise[0].split("T")[1]}
          sunset={weather.daily.sunrise[0].split("T")[1]}
          windspeed={currentWeather.windspeed}
        />
      </View>
    </>
  );
};

export default Home;
