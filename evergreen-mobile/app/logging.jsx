import { useRouter } from "expo-router";
import { View, Text } from 'react-native';
import { useState, useContext} from 'react'
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';
import { AuthContext } from '../contexts/authContext';
import Form from '../components/Form';
import { useLocalSearchParams } from "expo-router";

export default function Logging() {
const router = useRouter();
const { addCycle, cycles, updateCycle} = useContext(ReproductiveHealthContext);
const params = useLocalSearchParams();


// const existingCycle = cycles.find(cycle => cycle.id == params.id);
const existingCycle = cycles.find(cycle => String(cycle._id) === String(params.id));

 const [ formState, setFormState ] = useState({
    startDate: existingCycle?.startDate || "", 
    flowLevel: existingCycle?.flowLevel || "",
    painLevel: existingCycle?.painLevel || "",
    symptoms:  existingCycle?.symptoms || "",
    emotions:  existingCycle?.emotions || ""
  })

     const formChangeHandler = (field, value) => {
    setFormState({
      ...formState,
      [field]: value,
    });
  };

  

    const formSubmitHandler = async () => {
    if (!formState.startDate || !formState.flowLevel || !formState.painLevel || !formState.symptoms || !formState.emotions) return;
    if (existingCycle) {
    await updateCycle(existingCycle._id, formState);
  } else {
    await addCycle(formState);
  }
    setFormState({ startDate: '', flowLevel:'', painLevel:'', symptoms:[], emotions:[]});
     router.push("/dashboard");
  }; 
  

  /* const formSubmitHandler = async () => {
    if (!formState.startDate || !formState.flowLevel || !formState.painLevel || !formState.symptoms || !formState.emotions) return;
    await addLog(formState)
    setFormState({ date: '', cycleLength: '', startDate: '', flowLevel:'', painLevel:'', symptoms:'', emotions:'' });
     router.push("/dashboard");
  };  */

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
