import { View, Text} from 'react-native'
import  Symptom  from '../components/Symptom'

export default function Dashboard() {
  return (
    <View>
        <Text>Dashboard</Text>
        <Symptom name = "Symptoms">
          Headaches, Cramps, Muscle Aches
        </Symptom>
    </View>
  );
}