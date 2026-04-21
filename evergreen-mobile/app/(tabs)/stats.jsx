import { useEffect } from "react";
import { View, Text } from "react-native";
import { colours } from "../../theme/colours";

export default function Stats() {
  return (
    <View style={{ backgroundColor: colours.background.default }}>
      <Text>Stats Screen</Text>
    </View>
  );
}