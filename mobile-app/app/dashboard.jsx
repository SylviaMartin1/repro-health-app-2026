import { View, Text} from 'react-native'
import Log from '../components/Log';

export default function Dashboard() {
  return (
    <View>
        <Text>Dashboard</Text>
        <Log date="11-12-2026" cycleLength="28"/>
        <Log date="15-12-2026" cycleLength="26"/>
        <Log date="13-12-2026" cycleLength="32"/>
    </View>
  );
}
