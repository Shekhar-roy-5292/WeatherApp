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
        <StyledValue>{sunrise}</StyledValue>
        <StyledLabel>Sunrise</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{sunset}</StyledValue>
        <StyledLabel>Sunset</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{windspeed}km/h</StyledValue>
        <StyledLabel>Windspeed</StyledLabel>
      </StyledContainer>
    </View>
  );
}
