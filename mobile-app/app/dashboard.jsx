import { useState } from 'react';
import { View, Text} from 'react-native'
import Log from '../components/Log';

export default function Dashboard() {
  const [ logState, setLogState] = useState({
    logs: [
      { date: "11-12-2024", cycleLength:"28", id:1},
      { date: "16-12-2024", cycleLength:"26", id:2},
      { date: "13-12-2024", cycleLength:"32", id:3}
    ]
  })


  return (
    <View>
        <Text>Dashboard</Text>
        {logState.logs.map((log) => (
          <Log 
            date={log.date}
            cycleLength={log.cycleLength}
            key={log.id}
          />
        ))}
    </View>
  );
}
