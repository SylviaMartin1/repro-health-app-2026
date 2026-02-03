import { useState } from 'react';
import { View, Text} from 'react-native'

export default function Logging() {
  const [date, setDate] = useState("")
  const [cycleLength, setCycleLength] = useState("")


  return (
    <View>
        <Text>Logging</Text>
    </View>
  );
}
