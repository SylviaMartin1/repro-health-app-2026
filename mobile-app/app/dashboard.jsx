import { useContext } from 'react';
import { View, Text } from 'react-native';
import Log from '../components/Log';
import { LogsContext } from '../contexts/logsContext';

export default function Dashboard() {
const { logs } = useContext(LogsContext);

  return (
    <View>
      <Text>Dashboard</Text>
      {logs.map((log) =>(
        <Log 
          startDate={log.startDate}
          flowLevel={log.flowLevel}
          painLevel={log.painLevel}
          symptoms={log.symptoms}
          emotions={log.emotions}
          key={log.id}
        />
      ))}
    </View>
  );
}
