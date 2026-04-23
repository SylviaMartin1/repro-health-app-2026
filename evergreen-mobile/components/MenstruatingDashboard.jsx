import { useContext } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import CycleCard from '../components/CycleCard';
import MedicineCard from '../components/MedicineCard';
import HealthCheckupCard from '../components/HealthCheckupCard'
import LifeStyleLogCard from '../components/LifeStyleLogCard'
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';
import { colours } from "../theme/colours"
import { getLatestByDate } from '../utils/helpers';
import SectionHeader from '../components/SectionHeader';

export default function MenstruatingDashboard() {
const { cycles, medicines, healthCheckups, lifeStyleLogs } = useContext(ReproductiveHealthContext);

const router = useRouter();

// Display only the latest version of the log
  const latestCycle = getLatestByDate(cycles);
  const latestLifeStyleLog = getLatestByDate(lifeStyleLogs);

  return (
    <ScrollView style={{ flex: 1, padding: 10, backgroundColor: colours.background.default }}>
      <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 16, color: colours.text.primary}}> Your Health Dashboard </Text>

      {/* Cycle Cards */}
      <View style={{ marginBottom: 16}}>
      <SectionHeader title="Cycle" onPress={() => router.push('/logging')}/>
      {latestCycle && (
        <CycleCard
          startDate={latestCycle.startDate}
          endDate={latestCycle.endDate}
          flowLevel={latestCycle.flowLevel}
          painLevel={latestCycle.painLevel}
          symptoms={latestCycle.symptoms}
          emotions={latestCycle.emotions}
          key={latestCycle._id}
          _id={latestCycle._id}
        /> 
      )}
      </View>

      {/* Lifestyle Cards */}
      <View style={{ marginBottom: 16}}>
      <SectionHeader title="Lifestyle" onPress={() => router.push('/lifeStyle-logging')}/>
      {latestLifeStyleLog && (
         <LifeStyleLogCard
          sleepHours={latestLifeStyleLog.sleepHours}
          exerciseMins={latestLifeStyleLog.exerciseMins}
          waterIntakeLevel={latestLifeStyleLog.waterIntakeLevel}
          stressLevel={latestLifeStyleLog.stressLevel}
          dietQuality={latestLifeStyleLog.dietQuality}
          mood={latestLifeStyleLog.mood}
          key={latestLifeStyleLog._id}
          _id={latestLifeStyleLog._id}
        />  
      )}
      </View>

      {/* Medicine Cards*/}
      <SectionHeader title="Medicines" onPress={() => router.push('/medicine-logging')}/>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ flexDirection: 'row', flexWrap: 'nowrap' }}>
      {Array.isArray(medicines) && medicines.map((medicine) => (
        <MedicineCard
          name={medicine.name}
          category={medicine.category}
          dosage={medicine.dosage}
          frequency={medicine.frequency}
          notes={medicine.notes}
          key={medicine._id}
          _id={medicine._id}
        />  
      ))}
      </View>
      </ScrollView>

      {/* Health Checkup Cards*/}
      <SectionHeader title="Checkups" onPress={() => router.push('/healthCheckup-logging')}/>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ flexDirection: 'row', flexWrap: 'nowrap' }}>
      {Array.isArray(healthCheckups) && healthCheckups.map((healthCheckup) => (
        <HealthCheckupCard
          name={healthCheckup.name}
          date={healthCheckup.date}
          time={healthCheckup.time}
          results={healthCheckup.results}
          doctorNotes={healthCheckup.doctorNotes}
          status={healthCheckup.status}
          key={healthCheckup._id}
          _id={healthCheckup._id}
        />  
      ))}
      </View>
      </ScrollView>
    </ScrollView>
  );
}