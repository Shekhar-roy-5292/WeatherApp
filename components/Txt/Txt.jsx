import { Text, useWindowDimensions } from "react-native";
import { textstyles } from "./Txt.style";

export function Txt({ children, style, ...restProps }) {
  const fontSize = style?.fontSize || textstyles.txt.fontSize;
  const { height } = useWindowDimensions();
  const ad = 1 / height;
  return (
    <Text
      style={[
        textstyles.txt,
        style,
        { fontSize: Math.round(fontSize * ad * height) },
      ]}
      {...restProps}
    >
      {children}
    </Text>
  );
}
