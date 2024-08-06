import { StyleSheet } from "react-native";

export const BasicStyles = StyleSheet.create({
  clock: {
    alignItems: "flex-end",
  },
  city: {},
  interpretation_container: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
  },
  interpretation_txt: {
    fontSize: 20,
    color: "white",
    fontFamily: "Alata-Regular",
  },
  temperature_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  temperature_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  temperature: {
    fontSize: 120,
  },
  image: {
    height: 90,
    width: 90,
  },
});
