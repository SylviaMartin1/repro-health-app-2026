import { useContext } from 'react';
import { View, ScrollView, Button} from 'react-native';
import { useRouter } from 'expo-router';
import MenopausalHealthLogCard from './MenopausalHealthLogCard';
import MedicineCard from '../components/MedicineCard';
import HealthCheckupCard from '../components/HealthCheckupCard'
import LifeStyleLogCard from '../components/LifeStyleLogCard'
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';
import { colours } from "../theme/colours";
import { getLatestByDate } from '../utils/helpers';
import SectionHeader from '../components/SectionHeader';
import { AuthContext } from '../contexts/authContext';

export default function MenopausalDashboard() {
const { menopausalHealthLogs, medicines, healthCheckups, lifeStyleLogs } = useContext(ReproductiveHealthContext);
const router = useRouter();

 const { signout} = useContext(AuthContext);

  const handleSignOut = async () => {
    await signout();     
    router.push('/'); 
  };

  const latestMenopausalHealthLog = getLatestByDate(menopausalHealthLogs);
  const latestLifeStyleLog = getLatestByDate(lifeStyleLogs);

  return (
    <ScrollView style={{ flex: 1, padding: 10, backgroundColor: colours.background.default }}>

       <View style={{ marginBottom: 16}}>
            <SectionHeader title="General Health" onPress={() => router.push('/menopausalHealth-logging')}/>
            {latestMenopausalHealthLog && (
              <MenopausalHealthLogCard
               hotFlashQuantity={latestMenopausalHealthLog.hotFlashQuantity}
               hotFlashIntensityScore={latestMenopausalHealthLog.hotFlashIntensityScore}
               nightSweatQuantity={latestMenopausalHealthLog.nightSweatQuantity}
               nightSweatScore={latestMenopausalHealthLog.nightSweatScore}
               symptoms= {latestMenopausalHealthLog.symptoms}
               emotions={latestMenopausalHealthLog.emotions}
               estrogenLevels={latestMenopausalHealthLog.estrogenLevels}
               progesteroneLevels={latestMenopausalHealthLog.progesteroneLevels}
               fshLevels={latestMenopausalHealthLog.fshLevels}
               key={latestMenopausalHealthLog._id}
               _id={latestMenopausalHealthLog._id}
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

            <View style={{ padding: 20, backgroundColor: colours.background.default }}>
                <Button title="Partner Screen" onPress={() => router.push("/partner")}/>
                <Button title="Sign Out" onPress={handleSignOut} color="red" />
              </View>



    </ScrollView>
  );
}
