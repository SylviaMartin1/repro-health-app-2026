import { View, Text} from 'react-native'
import  Symptom  from '../components/Symptom'

export default function Dashboard() {
  return (
    <View>
        <Text>Dashboard</Text>
        <Symptom name = "Cramps"></Symptom>
        <Symptom name = "Headaches"></Symptom>
    </View>
  );
}