/**
 * Import useContext() hook from React
 * Import View and Text from React Native
 * Import custom CycleCard component
 * Import ReproductiveHealthContext context file
 */
import { useContext } from 'react';
import { View, Text } from 'react-native';
import CycleCard from '../components/CycleCard';
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';

/**
 * Dashboard screen declared as functional component
 * Declares the cycles array from the context file
 * Returns a view with the cycles mapped into cards for each
 */
export default function Dashboard() {
const { cycles } = useContext(ReproductiveHealthContext);

  return (
    <View>
      <Text>Cycles</Text>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {cycles.map((cycle) =>(
        <CycleCard
          startDate={cycle.startDate}
          endDate={cycle.endDate}
          flowLevel={cycle.flowLevel}
          painLevel={cycle.painLevel}
          symptoms={cycle.symptoms}
          emotions={cycle.emotions}
          key={cycle.id}
          id={cycle.id}
        />  
      ))}
      </View>
    </View>
  );
}
