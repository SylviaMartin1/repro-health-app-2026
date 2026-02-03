import { useState } from 'react';
import { View, Text} from 'react-native'
import Log from '../components/Log';

export default function Dashboard() {
  const [ logState, setLogState] = useState({
    logs: [
      { date: "11-12-2024", cycleLength:"28"},
      { date: "16-12-2024", cycleLength:"26"},
      { date: "13-12-2024", cycleLength:"32"}
    ]
  })


  return (
    <View>
        <Text>Dashboard</Text>
        <Log date="11-12-2024" cycleLength="28"/>
        <Log date="16-12-2024" cycleLength="26"/>
        <Log date="13-12-2024" cycleLength="32"/>
    </View>
  );
}
