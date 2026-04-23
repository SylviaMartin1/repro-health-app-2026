import { View, Text } from "react-native";
import { useContext } from "react";
import { ReproductiveHealthContext } from "../contexts/ReproductiveHealthContext";

import { getMostCommonSymptom, getMostCommonEmotion,
  getAverageFlowLevel,
  getAveragePainLevel,
  getNextPeriod,
  getOvulationDate
} from "../utils/cycleStats";

export default function StatsCard() {
  const { cycles } = useContext(ReproductiveHealthContext);

  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 20,
        borderRadius: 16
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 12 }}>
        Cycle Summary
      </Text>

      <Text>Most Common Symptom: {getMostCommonSymptom(cycles)}</Text>
      <Text>Most Common Emotion: {getMostCommonEmotion(cycles)}</Text>

      <Text>Average Flow: {getAverageFlowLevel(cycles)}</Text>
      <Text>Average Pain: {getAveragePainLevel(cycles)}</Text>

      <Text>Ovulation: {getOvulationDate(cycles)?.toDateString()}</Text>
      <Text>Next Period: {getNextPeriod(cycles)?.toDateString()}</Text>
      
    </View>
  );
}