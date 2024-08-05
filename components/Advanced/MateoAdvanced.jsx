import { View } from "react-native";
import {
  AdvanceStyles,
  StyledContainer,
  StyledLabel,
  StyledValue,
} from "./MateoAdvanced.Style";
import { Txt } from "../Txt/Txt";
export function MateoAdvanced({ sunrise, sunset, windspeed }) {
  return (
    <View style={AdvanceStyles.container}>
      <StyledContainer>
        <StyledLabel>{sunrise}</StyledLabel>
        <StyledValue>Sunrise</StyledValue>
      </StyledContainer>
      <StyledContainer>
        <StyledLabel>{sunset}</StyledLabel>
        <StyledValue>Sunset</StyledValue>
      </StyledContainer>
      <StyledContainer>
        <StyledLabel>{windspeed}</StyledLabel>
        <StyledValue>Windspeed</StyledValue>
      </StyledContainer>
    </View>
  );
}
