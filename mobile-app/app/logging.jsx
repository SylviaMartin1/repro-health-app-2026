import { useState } from 'react';
import { View, Text, TextInput} from 'react-native'

export default function Logging() {
  const [date, setDate] = useState("")
  const [cycleLength, setCycleLength] = useState("")

  return (
    <View>
        <Text>Logging</Text>
        <TextInput 
          value={date}
          onChangeText={setDate}
          style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          borderRadius: 5,
          marginTop: 5,
        }}
        />
        <TextInput 
          value={cycleLength}
          onChangeText={setCycleLength}
          style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          borderRadius: 5,
          marginTop: 5,
        }}
        />
    </View>

  );
}
