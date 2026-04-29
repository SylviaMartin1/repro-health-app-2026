import { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { colours } from "../theme/colours";
import KpiCard from "./KPICard";
import { ReproductiveHealthContext } from "../contexts/ReproductiveHealthContext";
import { getAverageExerciseMins, getAverageSleepHours, getAverageStressLevel, getAverageWaterIntakeLevel} from "../utils/lifestyleStats";
import ReusableLineChart from "./ReusableLineChart";
import { getAverageSpermConcentration, getAverageSpermVolume, getMostCommonSymptom, getMostCommonEmotion } from "../utils/maleStats";

export default function MaleStats() {
     const { maleHealthLogs, lifeStyleLogs } = useContext(ReproductiveHealthContext);
    
      const sleepData = lifeStyleLogs.map(lifeStyleLog => ({
        value: lifeStyleLog.sleepHours
      }));

      const exerciseData = lifeStyleLogs.map(lifeStyleLog => ({
        value: lifeStyleLog.exerciseMins
      }));
    
      const stressData = lifeStyleLogs.map(lifeStyleLog => ({
        value: lifeStyleLog.stressLevel
      }));

      const spermVolumeData = maleHealthLogs.map(maleHealthLog=> ({
        value: maleHealthLog.spermVolume
      }));

       const spermConcentrationData = maleHealthLogs.map(maleHealthLog => ({
        value: maleHealthLog.spermConcentration
      }));
    
      return (
        <ScrollView style={{ flex: 1, padding: 10, backgroundColor: colours.background.default }}>
          <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 5, marginTop:2 }}> Your Insights </Text>

          <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 15 }}>General Health Insights</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 10 }}>
          <KpiCard
            icon="beaker-outline"
            value={getAverageSpermVolume(maleHealthLogs)}
            label="Avg Sperm Volume"
            color="black"
          />

          <KpiCard
            icon="analytics"
            value={getAverageSpermConcentration(maleHealthLogs)}
            label="Avg Sperm Conc"
            color="green"
          />

          <KpiCard
            icon="medical-outline"
            value={getMostCommonSymptom(maleHealthLogs)}
            label="Common Symptom"
            color="red"
          />

          <KpiCard
            icon="happy-outline"
            value={getMostCommonEmotion(maleHealthLogs)}
            label="Common Emotion"
            color="black"
          />      
        
        </View>
    
        <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 15 }}>Lifestyle Insights</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 10 }}>
          <KpiCard
            icon="moon-outline"
            value={getAverageSleepHours(lifeStyleLogs)}
            label="Avg Sleep Hrs"
            color="blue"
          />
    
          <KpiCard
            icon="walk-outline"
            value={getAverageExerciseMins(lifeStyleLogs)}
            label="Avg Exercise Mins"
            color="black"
          />
    
          <KpiCard
            icon="water-outline"
            value={getAverageWaterIntakeLevel(lifeStyleLogs)}
            label="Average Water Intake"
            color="blue"
          />
    
          <KpiCard
            icon="pulse-outline"
            value={getAverageStressLevel(lifeStyleLogs)}
            label="Average Stress Level"
            color="red"
          />
        </View>
    
      <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 15 }}>Trends</Text>
      <ReusableLineChart
        title="Sleep Trends"
        data={sleepData}
        color={colours.accent.dark}
      />
    
      <ReusableLineChart
        title="Exercise Trends"
        data={exerciseData}
        color={colours.accent.dark}
      />
    
      <ReusableLineChart
        title="Stress Trends"
        data={stressData}
        color={colours.accent.dark}
      />

      <ReusableLineChart
        title="Sperm Volume Trends"
        data={spermVolumeData}
        color={colours.accent.dark}
      />

      <ReusableLineChart
        title="Sperm Concentration Trends"
        data={spermConcentrationData}
        color={colours.accent.dark}
      />
    
      </ScrollView>
      );
    }
