import { useState } from 'react';
import { View, Text, TextInput, Button} from 'react-native'
import Log from '../components/Log';
import { v4 as uuidv4 } from 'uuid';

export default function Dashboard() {
  const [ logs, setLogs] = useState([
      { date: "11-12-2024", cycleLength:"28", id:1},
      { date: "16-12-2024", cycleLength:"26", id:2},
      { date: "13-12-2024", cycleLength:"32", id:3}
    ])


   // Form state
  const [date, setDate] = useState('');
  const [cycleLength, setCycleLength] = useState('');

  // Add log handler
  const addLog = () => {
    if (!date || !cycleLength) return;
    setLogs(prevLogs => [...prevLogs, { date, cycleLength, id: uuidv4() }]);
    setDate('');
    setCycleLength('');
  };


  return (
    <View>
        <Text>Dashboard</Text>
        {logs.map((log) => (
          <Log 
            date={log.date}
            cycleLength={log.cycleLength}
            key={log.id}
          />
        ))}

        
      {/* Form */}
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 20 }}>Add New Log</Text>

      <Text>Date:</Text>
      <TextInput
        value={date}
        onChangeText={setDate}
        placeholder="DD-MM-YYYY"
        style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginTop: 5 }}
      />

      <Text>Cycle Length:</Text>
      <TextInput
        value={cycleLength}
        onChangeText={setCycleLength}
        placeholder="Enter cycle length"
        keyboardType="numeric"
        style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginTop: 5 }}
      />

      <Button title="Add Log" onPress={addLog} color="#4CAF50" />


    </View>
  );
}
