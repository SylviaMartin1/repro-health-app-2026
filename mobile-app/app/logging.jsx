import { useRouter } from "expo-router";
import { View, Text } from 'react-native';
import { useState, useContext} from 'react'
import { LogsContext } from '../contexts/logsContext';
import Form from '../components/Form';

export default function Logging() {
const router = useRouter();
const { addLog } = useContext(LogsContext);

 const [ formState, setFormState ] = useState({
    date: "",
    cycleLength:"",
    startDate:"", 
    flowLevel:""
  })

     const formChangeHandler = (field, value) => {
    setFormState({
      ...formState,
      [field]: value,
    });
  };

    const formSubmitHandler = () => {
    if (!formState.date || !formState.cycleLength || !formState.startDate || !formState.flowLevel) return;
    addLog(formState)
    setFormState({ date: '', cycleLength: '', startDate: '', flowLevel:''});
     router.push("/dashboard");
  };

  /*   const formSubmitHandler = async () => {
    if (!formState.date || !formState.cycleLength) return;
    await addLog(formState)
    setFormState({ date: '', cycleLength: '' });
     router.push("/dashboard");
  }; */

  return (
    <View style={{ marginTop: 20 }}>
      <Text>Logging</Text>
      <Form
              formState={formState}
              change={formChangeHandler}
              submit={formSubmitHandler}
          />
    </View>
  );
}
