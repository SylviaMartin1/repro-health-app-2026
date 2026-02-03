import { useState } from 'react';
import { View, Text } from 'react-native';
import Log from '../components/Log';
import Form from '../components/Form';
import { v4 as uuidv4 } from 'uuid';

export default function Dashboard() {
  const [ logs, setLogs] = useState([
      {id:1, date:"13-11-2024", cycleLength:"26"},
      {id:2, date:"12-11-2024", cycleLength:"28"},
      {id:3, date:"10-11-2024", cycleLength:"30"}
  ])

  //Form
  const [ formState, setFormState ] = useState({
    date: "",
    cycleLength:""
  })

    const formChangeHandler = (field, value) => {
    setFormState({
      ...formState,
      [field]: value,
    });
  };

    const formSubmitHandler = () => {
    if (!formState.date || !formState.cycleLength) return;
    const newLogs = ([...logs, { ...formState, id: uuidv4() }]);
    setLogs(newLogs);
    console.log(newLogs)
    setFormState({ date: '', cycleLength: '' });
  };

  return (
    <View>
      <Text>Dashboard</Text>
      {logs.map((log) =>(
        <Log 
          date={log.date}
          cycleLength={log.cycleLength}
          key={log.id}
        />
      ))}

      <Form
        formState={formState}
        change={formChangeHandler}
        submit={formSubmitHandler}
      />
     
    </View>
  );
}
