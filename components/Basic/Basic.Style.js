import { StyleSheet } from "react-native";

export const BasicStyles = StyleSheet.create({
  clock: {
    alignItems: "flex-end",
  },
  city: {},
  interpretation: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
  },
  interpretation_txt:{
    fontSize: 20,
    color: "white",
    fontFamily: "Alata-Regular",
  },
  temperature_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    borderBlockColor: "black",
  },
  temperature: {
    fontSize: 130,
  },
  image: {
    height: 100,
    width: 100,
  },
});
