import { useRouter } from "expo-router";
import { View, Text } from 'react-native';
import { useState, useContext} from 'react'
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';
import HealthCheckupForm from '../components/HealthCheckupForm';
import { useLocalSearchParams } from "expo-router";
import { colours } from "../theme/colours";


export default function HealthCheckupLogging() {
const router = useRouter();
const { addHealthCheckup, healthCheckups, updateHealthCheckup} = useContext(ReproductiveHealthContext);
const params = useLocalSearchParams();


const existingHealthCheckup = healthCheckups.find(healthCheckup => String(healthCheckup._id) === String(params.id));

 const [ formState, setFormState ] = useState({
    name: existingHealthCheckup?.name || "", 
    date: existingHealthCheckup?.date || "",
    time: existingHealthCheckup?.time || "",
    results: existingHealthCheckup?.results || "",
    doctorNotes:  existingHealthCheckup?.doctorNotes || "",
    status:  existingHealthCheckup?.status || ""
  })

     const formChangeHandler = (field, value) => {
    setFormState({
      ...formState,
      [field]: value,
    });
  };

    const formSubmitHandler = async () => {
    if (!formState.name || !formState.date || !formState.time || !formState.results || !formState.doctorNotes  || !formState.status) return;
    if (existingHealthCheckup) {
    await updateHealthCheckup(existingHealthCheckup._id, formState);
  } else {
    await addHealthCheckup(formState);
  }
    setFormState({ name: '', date:'', time:'', results:'', doctorNotes:'', status:''});
     router.push("/dashboard");
  }; 
  

  return (
    <View style={{ flex: 1, marginTop: 20, backgroundColor: colours.background.default, paddingTop: 60 }}>
      <Text>Logging</Text>
      <HealthCheckupForm
              formState={formState}
              change={formChangeHandler}
              submit={formSubmitHandler}
          />
    </View>
  );
}
