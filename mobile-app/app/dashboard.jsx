
import { useState } from 'react';
import { View, Text} from 'react-native'
import Symptom from '../components/Symptom';

export default function Dashboard() {
  const [ symptomState, setSymptomState ] = useState({
          symptoms: [
            { id:1, name:"cramps" },
            { id:2, name:"muscle aches" },
            { id:3, name:"irritability" }
          ]
         });    

  return (
    <View>
        <Text>Dashboard</Text>
        {symptomState.symptoms.map((symptom) => (
          <Symptom
            name={symptom.name}
            key={symptom.id}
            />
        ))}
    </View>
  );
}