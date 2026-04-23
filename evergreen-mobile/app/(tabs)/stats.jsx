import { useEffect } from "react";
import { View, Text } from "react-native";
import { colours } from "../../theme/colours";
import StatsCard from "../../components/StatsCard";

export default function Stats() {
  return (
    <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 16, backgroundColor: colours.background.default }}>
      <Text>Stats Screen</Text>
      <StatsCard/>
    </View>
  );
}