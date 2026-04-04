/**
 * Import useContext() hook from React
 * Import View and Text from React Native
 * Import custom CycleCard component
 * Import ReproductiveHealthContext context file
 */
import { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import CycleCard from '../components/CycleCard';
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';
import { AuthContext } from '../contexts/authContext';


export default function Dashboard() {
const { cycles } = useContext(ReproductiveHealthContext);
const { signout } = useContext(AuthContext);
const router = useRouter();

 const handleSignOut = async () => {
    await signout();     
    router.push('/'); 
  };

  return (
    <View>
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

      <Button title="Go to Logging" onPress={() => router.push('/logging')} />
      <Button title="Sign Out" onPress={handleSignOut} color="red" />
    </View>
  );
}
