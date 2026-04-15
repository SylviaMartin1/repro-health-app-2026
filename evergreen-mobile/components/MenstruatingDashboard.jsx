import { useContext } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import CycleCard from '../components/CycleCard';
import MedicineCard from '../components/MedicineCard';
import HealthCheckupCard from '../components/HealthCheckupCard'
import LifeStyleLogCard from '../components/LifeStyleLogCard'
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';
import { AuthContext } from '../contexts/authContext';

export default function MenstruatingDashboard() {
const { cycles, medicines, healthCheckups, lifeStyleLogs } = useContext(ReproductiveHealthContext);
const { signout} = useContext(AuthContext);
const router = useRouter();

 const handleSignOut = async () => {
    await signout();     
    router.push('/'); 
  };

  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>

      <Text>Cycles</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {Array.isArray(cycles) && cycles.map((cycle) => (
        <CycleCard
          startDate={cycle.startDate}
          endDate={cycle.endDate}
          flowLevel={cycle.flowLevel}
          painLevel={cycle.painLevel}
          symptoms={cycle.symptoms}
          emotions={cycle.emotions}
          key={cycle._id}
          _id={cycle._id}
        />  
      ))}
      </View>

       <Text>Medicines</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
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

      <Text>Health Checkups</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
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

      <Text>Life Style</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {Array.isArray(lifeStyleLogs) && lifeStyleLogs.map((lifeStyleLog) => (
        <LifeStyleLogCard
          sleepHours={lifeStyleLog.sleepHours}
          exerciseMins={lifeStyleLog.exerciseMins}
          waterIntakeLevel={lifeStyleLog.waterIntakeLevel}
          stressLevel={lifeStyleLog.stressLevel}
          dietQuality={lifeStyleLog.dietQuality}
          mood={lifeStyleLog.mood}
          key={lifeStyleLog._id}
          _id={lifeStyleLog._id}
        />  
      ))}
      </View>

      

     
      <Button title="Log Cycles" onPress={() => router.push('/logging')} />
      <Button title="Log Medicines" onPress={() => router.push('/medicine-logging')} />
      <Button title="Log Health Checkups" onPress={() => router.push('/healthCheckup-logging')} />
      <Button title="Log LifeStyle Logs" onPress={() => router.push('/lifeStyle-logging')} />
      <Button title="Sign Out" onPress={handleSignOut} color="red" />

      

    </ScrollView>
  );
}
