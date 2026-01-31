import { View, Text, TextInput, Button, Pressable} from 'react-native'
import { colours } from '../theme/colours'
import { useState } from 'react';

export default function Log() {
  const [date, setDate] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const handleSubmit = () => {
    console.log({
      date,
      symptoms
    });
  };


  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 16, backgroundColor: colours.background.default }}>
        {/* Date input */}
        <Text> Date</Text>
        <TextInput 
            value={date}
            onChangeText={setDate}
            placeholder="YYYY-MM-DD"
            style={{ borderWidth: 1, marginBottom: 10, padding: 6 }}
        />

         {/* Last period date input */}

         {/* Cycle length input */}

         {/* Symptoms input*/}
         <Text> Symptoms</Text>
         <TextInput 
            value={symptoms}
            onChangeText={setSymptoms}
            placeholder="Describe symptoms"
            style={{ borderWidth: 1, marginBottom: 10, padding: 6 }}
          />


         {/* Mood input */}

         {/* Contraceptives input */}

         {/* Supplements input */} 

         {/* Hormones input*/}

         {/* Submit button*/}
         <Pressable onPress={handleSubmit} 
          style={{ backgroundColor: colours.primary.main, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Save</Text>
          </Pressable>

    </View>
  );
}
