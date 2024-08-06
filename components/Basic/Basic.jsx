import { Image, TouchableOpacity, View } from "react-native";
import { Txt } from "../Txt/Txt";
import { BasicStyles } from "./Basic.Style";
import { Clock } from "../Clock/Clock";
import { useNavigation } from "@react-navigation/native";

export function Basic({ temperature, interpretation, city, dailyWeather }) {
  const nav = useNavigation();
  return (
    <>
      <View style={BasicStyles.clock}>
        <Clock />
      </View>
      <View style={BasicStyles.city}>
        <Txt>{city}</Txt>
      </View>
      <View style={BasicStyles.interpretation_container}>
        <Txt style={BasicStyles.interpretation_txt}>{interpretation.label}</Txt>
      </View>
      <View style={BasicStyles.temperature_box}>
        <TouchableOpacity
          onPress={() => nav.navigate("Forecast", { city, dailyWeather })}
          style={BasicStyles.temperature_container}
        >
          <Txt style={BasicStyles.temperature}>{temperature}°</Txt>
        </TouchableOpacity>
        <Image style={BasicStyles.image} source={interpretation.image} />
      </View>
    </>
  );
}
