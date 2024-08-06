import { SafeAreaView, ImageBackground } from "react-native";
import Home from "./Pages/Home/Home";
import { Homestyles } from "./Pages/Home/Home.style";
import background from "./assets/background.png";
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { MateoAPI } from "./api/mateo";
import { useFonts } from "expo-font";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Forecast } from "./Pages/Forecasts/Forcasts";
const Stack = createNativeStackNavigator();

const navTheme = {
  colors: {
    background: "transparent",
  },
};
const App = () => {
  const [Pos, setPos] = React.useState();
  const [weather, setWeather] = React.useState();
  const [City, setCity] = React.useState();

  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
  });

  React.useEffect(() => {
    getUserLocation();
  }, []);

  React.useEffect(() => {
    if (Pos) {
      fetchWeatherByCoords(Pos);
      fetchCityByCoords(Pos);
    }
  }, [Pos]);

  async function fetchWeatherByCoords(Pos) {
    const weatherRes = await MateoAPI.fetchWeather(Pos);
    setWeather(weatherRes);
  }

  async function fetchCityByCoords(Pos) {
    const CityRes = await MateoAPI.fetchCity(Pos);
    setCity(CityRes);
  }

  const getUserLocation = async () => {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setPos({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setPos({ lat: "48.85", lng: "2.35" });
    }
  };
  React.useEffect(() => {
    // console.log("Position:", Pos);
    // console.log("Weather:", weather);
    // console.log("City:", City);
  }, [Pos, weather, City]);

  return (
    <NavigationContainer theme={navTheme}>
      <ImageBackground
        imageStyle={Homestyles.img}
        style={Homestyles.backgroundImage}
        source={background}
      >
        <SafeAreaView style={Homestyles.container}>
          {isFontLoaded && weather && City && (
            <Stack.Navigator
              screenOptions={{ headerShown: false, Animation: "fade" }}
              initialRouteName="Home"
            >
              <Stack.Screen name="Home">
                {() => <Home city={City} weather={weather} />}
              </Stack.Screen>
              <Stack.Screen name="Forecast" component={Forecast} />
            </Stack.Navigator>
          )}
        </SafeAreaView>
      </ImageBackground>
    </NavigationContainer>
  );
};
export default App;
