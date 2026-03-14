import { useContext } from 'react';
import { View, Text } from 'react-native';
import CycleCard from '../components/CycleCard';
import { LogsContext } from '../contexts/ReproductiveLogsContext';

export default function Dashboard() {
const { logs } = useContext(LogsContext);

  return (
    <View>
      <Text>Dashboard</Text>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {logs.map((log) =>(
        <CycleCard
          startDate={log.startDate}
          endDate={log.endDate}
          flowLevel={log.flowLevel}
          painLevel={log.painLevel}
          symptoms={log.symptoms}
          emotions={log.emotions}
          key={log.id}
        />  
      ))}
      </View>
    </View>
  );
}
