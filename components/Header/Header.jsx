import { TouchableOpacity, View } from "react-native";
import { HeaderStyle } from "./Header.Style";
import { Txt } from "../Txt/Txt";
import { useNavigation } from "@react-navigation/native";
export function Header({ city }) {
  const nav = useNavigation();
  return (
    <View style={HeaderStyle.container}>
        <TouchableOpacity onPress={() => nav.goBack()}>
          <Txt style={HeaderStyle.backBtn}>{"<"}</Txt>
        </TouchableOpacity>
      <View style={HeaderStyle.headerTxt}>
        <Txt>{city.toUpperCase()}</Txt>
        <Txt style={HeaderStyle.subtitle}>7 Days Forecasts</Txt>
      </View>
    </View>
  );
}
