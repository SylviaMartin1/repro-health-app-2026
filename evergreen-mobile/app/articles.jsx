import { useEffect } from "react";
import { View, Text } from "react-native";
import { colours } from "../theme/colours";

export default function Articles() {
  return (
    <View style={{ backgroundColor: colours.background.default }}>
      <Text>Articles Screen</Text>
    </View>
  );
}