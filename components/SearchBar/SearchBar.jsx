import { TextInput } from "react-native";
import { SearchStyles } from "./Searchbar.style";

export function SearchBar({ onSubmit }) {
  return (
    <TextInput
      onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
      placeholder="Search a city..."
      style={SearchStyles.input}
    />
  );
}
