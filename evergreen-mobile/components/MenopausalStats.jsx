import { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { colours } from "../theme/colours";
import KpiCard from "./KPICard";
import { ReproductiveHealthContext } from "../contexts/ReproductiveHealthContext";
import { getAverageExerciseMins, getAverageSleepHours, getAverageStressLevel, getAverageWaterIntakeLevel} from "../utils/lifestyleStats";
import ReusableLineChart from "./ReusableLineChart";
import { getAverageHotFlashQuantity, getAverageHotFlashIntensityScore, getAverageNightSweatQuantity, getAverageNightSweatIntensityScore, getMostCommonSymptom, getMostCommonEmotion, getAverageEstrogenLevel, getAverageProgesteroneLevel, getAverageFSHLevel } from "../utils/menopausalStats";

export default function MenopausalStats() {
     const { menopausalHealthLogs, lifeStyleLogs } = useContext(ReproductiveHealthContext);

      const hotFlashData = menopausalHealthLogs.map(menopausalHealthLog => ({
        value: menopausalHealthLog.hotFlashIntensityScore
      }));

        const nightSweatData = menopausalHealthLogs.map(menopausalHealthLog => ({
        value: menopausalHealthLog.nightSweatScore
      }));

      const sleepData = lifeStyleLogs.map(lifeStyleLog => ({
        value: lifeStyleLog.sleepHours
      }));
    
      const exerciseData = lifeStyleLogs.map(lifeStyleLog => ({
        value: lifeStyleLog.exerciseMins
      }));
    
      const stressData = lifeStyleLogs.map(lifeStyleLog => ({
        value: lifeStyleLog.stressLevel
      }));
    
      return (
        <ScrollView style={{ flex: 1, padding: 10, backgroundColor: colours.background.default }}>
          <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 5, marginTop:2 }}> Your Insights </Text>

          <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 15 }}>General Health Insights</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 10 }}>
          <KpiCard
            icon="flame-outline"
            value={getAverageHotFlashQuantity(menopausalHealthLogs)}
            label="Avg Hot Flash Quantity"
            color="#4da3ff"
          />

           <KpiCard
            icon="flame-outline"
            value={getAverageHotFlashIntensityScore(menopausalHealthLogs)}
            label="Avg Hot Intensity"
            color="#4da3ff"
          />

          <KpiCard
            icon="flame-outline"
            value={getAverageNightSweatQuantity(menopausalHealthLogs)}
            label="Avg Hot Intensity"
            color="#4da3ff"
          />

          <KpiCard
            icon="flame-outline"
            value={getAverageNightSweatIntensityScore(menopausalHealthLogs)}
            label="Avg Hot Intensity"
            color="#4da3ff"
          />

            <KpiCard
                  icon="medical-outline"
                  value={getMostCommonSymptom(menopausalHealthLogs)}
                  label="Common Symptom"
                  color="#ffa502"
            />
          
           <KpiCard
                  icon="happy-outline"
                  value={getMostCommonEmotion(menopausalHealthLogs)}
                  label="Common Emotion"
                  color="#2ed573"
           />
          </View>

          <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 15 }}>Hormone Insights</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 10 }}>
          <KpiCard
            icon="moon-outline"
            value={getAverageEstrogenLevel(menopausalHealthLogs)}
            label="Avg Sleep Hrs"
            color="#4da3ff"
          />

          <KpiCard
            icon="moon-outline"
            value={getAverageProgesteroneLevel(menopausalHealthLogs)}
            label="Avg Sleep Hrs"
            color="#4da3ff"
          />

          <KpiCard
            icon="moon-outline"
            value={getAverageFSHLevel(menopausalHealthLogs)}
            label="Avg Sleep Hrs"
            color="#4da3ff"
          />

          <KpiCard
            icon="moon-outline"
            value={getAverageSleepHours(lifeStyleLogs)}
            label="Avg Sleep Hrs"
            color="#4da3ff"
          />
          </View>

          
    
        <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 15 }}>Lifestyle Insights</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 10 }}>
          <KpiCard
            icon="moon-outline"
            value={getAverageSleepHours(lifeStyleLogs)}
            label="Avg Sleep Hrs"
            color="#4da3ff"
          />
    
          <KpiCard
            icon="walk-outline"
            value={getAverageExerciseMins(lifeStyleLogs)}
            label="Avg Exercise Mins"
            color="#4da3ff"
          />
    
          <KpiCard
            icon="water-outline"
            value={getAverageWaterIntakeLevel(lifeStyleLogs)}
            label="Average Water Intake"
            color="#ffa502"
          />
    
          <KpiCard
            icon="pulse-outline"
            value={getAverageStressLevel(lifeStyleLogs)}
            label="Average Stress Level"
            color="#2ed573"
          />
        </View>
    
      <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 15 }}>Trends</Text>
      <ReusableLineChart
        title="Sleep Trends"
        data={sleepData}
        color="#ff6b6b"
      />
    
      <ReusableLineChart
        title="Exercise Trends"
        data={exerciseData}
        color="#ff6b6b"
      />
    
    
      <ReusableLineChart
        title="Stress Trends"
        data={stressData}
        color="#ff6b6b"
      />

       <ReusableLineChart
        title="Hot Flash Trends"
        data={hotFlashData}
        color="#ff6b6b"
      />

      <ReusableLineChart
        title="Night Sweat Trends"
        data={nightSweatData}
        color="#ff6b6b"
      />
    
      </ScrollView>
      );
    }
