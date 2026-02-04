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
          date={log.date}
          cycleLength={log.cycleLength}
          key={log.id}
        />
      ))}

    
     
    </View>
  );
}
