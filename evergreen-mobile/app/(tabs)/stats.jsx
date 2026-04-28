import { useEffect, useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { colours } from "../../theme/colours";
import StatsCard from "../../components/StatsCard";
import KpiCard from "../../components/KPICard";
import PredictionCard from "../../components/PredictionCard";
import { ReproductiveHealthContext } from "../../contexts/ReproductiveHealthContext";
import { getMostCommonSymptom,getMostCommonEmotion, getAverageFlowLevel, getAveragePainLevel, 
getNextPeriod,getOvulationDate,getFertileWindowStartDate, getFertileWindowEndDate} from "../../utils/cycleStats";

export default function Stats() {
  const { cycles } = useContext(ReproductiveHealthContext);
  return (
    <ScrollView style={{ flex: 1, padding: 10, backgroundColor: colours.background.default }}>
      <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 5}}> Your Insights </Text>

     <PredictionCard
     nextPeriod={getNextPeriod(cycles)}
     ovulation={getOvulationDate(cycles)}
     fertileStart={getFertileWindowStartDate(cycles)}
     fertileEnd={getFertileWindowEndDate(cycles)}
     />

      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 10 }}>
      <KpiCard
        icon="water-outline"
        value={getAverageFlowLevel(cycles)}
        label="Average Flow Level"
        color="#4da3ff"
      />

      <KpiCard
        icon="flame-outline"
        value={getAveragePainLevel(cycles)}
        label="Average Pain Level"
        color="#ff6b6b"
      />

      <KpiCard
        icon="medical-outline"
        value={getMostCommonSymptom(cycles)}
        label="Common Symptom"
        color="#ffa502"
      />

      <KpiCard
        icon="happy-outline"
        value={getMostCommonEmotion(cycles)}
        label="Common Emotion"
        color="#2ed573"
      />

    </View>
  </ScrollView>
  );
}