import { Image, View } from "react-native";
import { Txt } from "../Txt/Txt";
import { BasicStyles } from "./Basic.Style";
import { Clock } from "../Clock/Clock";

export function Basic({ temperature, interpretation, city }) {
  return (
    <>
      <View style={BasicStyles.clock}>
        <Clock />
      </View>
      <View style={BasicStyles.city}>
        <Txt>{city}</Txt>
      </View>
      <View style={BasicStyles.interpretation}>
        <Txt style={BasicStyles.interpretation_txt}>{interpretation.label}</Txt>
      </View>
      <View style={BasicStyles.temperature_box}>
        <Txt style={BasicStyles.temperature}>{temperature}°</Txt>
        <Image style={BasicStyles.image} source={interpretation.image} />
      </View>
    </>
  );
}
