import { useRouter } from "expo-router";
import { View, Text, ScrollView  } from 'react-native';
import { useState, useContext} from 'react'
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';
import MaleHealthLogForm from '../components/MaleHealthLogForm';
import { useLocalSearchParams } from "expo-router";

export default function MaleHealthLogging() {
const router = useRouter();
const { addMaleHealthLog, maleHealthLogs, updateMaleHealthLog} = useContext(ReproductiveHealthContext);
const params = useLocalSearchParams();

const existingMaleHealthLog = maleHealthLogs.find(maleHealthLog => String(maleHealthLog._id) === String(params.id));

 const [ formState, setFormState ] = useState({
    spermVolume: existingMaleHealthLog?.spermVolume || "", 
    spermConcentration: existingMaleHealthLog?.spermConcentration || "",
    spermMotility: existingMaleHealthLog?.spermMotility || "",
    spermMorphology: existingMaleHealthLog?.spermMorphology|| "",
    symptoms: existingMaleHealthLog?.symptoms || "",
    emotions: existingMaleHealthLog?.emotions || "",
  })

     const formChangeHandler = (field, value) => {
    setFormState({
      ...formState,
      [field]: value,
    });
  };

    const formSubmitHandler = async () => {
    if (!formState.spermVolume || !formState.spermConcentration || !formState.spermMotility|| !formState.spermMorphology || !formState.symptoms  || !formState.emotions) return;
    if (existingMaleHealthLog) {
    await updateMaleHealthLog(existingMaleHealthLog._id, formState);
  } else {
    await addMaleHealthLog(formState);
  }
    setFormState({ spermVolume: '', spermConcentration:'', spermMotility:'', spermMorphology:'', symptoms:'', emotions:''});
     router.push("/dashboard");
  }; 
  

  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      <Text>Logging</Text>
      <MaleHealthLogForm
              formState={formState}
              change={formChangeHandler}
              submit={formSubmitHandler}
          />
     </ScrollView>
  );
}
