import { Image, View } from "react-native";
import { ForecastList } from "./ForecastListItem.style";
import { Txt } from "../Txt/Txt";
export const ForecastListItem = ({ image, day, date, temperature }) => {
  return (
    <View style={ForecastList.container}>
      <Image source={image} style={ForecastList.image} />
      <Txt style={ForecastList.day}>{day}</Txt>
      <Txt style={ForecastList.date}>{date}</Txt>
      <Txt style={ForecastList.temperature}>{temperature}°C</Txt>
    </View>
  );
};
