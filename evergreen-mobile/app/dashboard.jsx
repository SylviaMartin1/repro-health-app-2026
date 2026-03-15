import { useContext } from 'react';
import { View, Text } from 'react-native';
import CycleCard from '../components/CycleCard';
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';

export default function Dashboard() {
const { cycles } = useContext(ReproductiveHealthContext);

  return (
    <View>
      <Text>Dashboard</Text>

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
        />  
      ))}
      </View>
    </View>
  );
}
