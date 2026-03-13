import { useContext } from 'react';
import { View, Text} from 'react-native'
import { LogsContext } from '../contexts/logsContext';

export default function Stats() {
  const { logs } = useContext(LogsContext);

  const totalLogs = logs.length;
  
  return (
    <View>
        <Text>Stats</Text>
        <Text>Total Logs: {totalLogs}</Text>
    </View>
  );
}
