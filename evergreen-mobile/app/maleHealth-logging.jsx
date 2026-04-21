import { useRouter } from "expo-router";
import { View, Text, ScrollView  } from 'react-native';
import { useState, useContext} from 'react'
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';
import MaleHealthLogForm from '../components/MaleHealthLogForm';
import { useLocalSearchParams } from "expo-router";
import { colours } from "../theme/colours";

export default function MaleHealthLogging() {
const router = useRouter();
const { addMaleHealthLog, maleHealthLogs, updateMaleHealthLog} = useContext(ReproductiveHealthContext);
const params = useLocalSearchParams();

const existingMaleHealthLog = maleHealthLogs.find(maleHealthLog => String(maleHealthLog._id) === String(params.id));

 const [ formState, setFormState ] = useState({
    spermVolume: existingMaleHealthLog?.spermVolume ?? 0 , 
    spermConcentration: existingMaleHealthLog?.spermConcentration ?? 0,
    spermMotility: existingMaleHealthLog?.spermMotility ?? 0,
    spermMorphology: existingMaleHealthLog?.spermMorphology ?? 0,
    symptoms: existingMaleHealthLog?.symptoms || [],
    emotions: existingMaleHealthLog?.emotions || [],
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
     router.push("/(tabs)/dashboard");
  }; 
  

  return (
    <ScrollView style={{ flex: 1, padding: 16, backgroundColor: colours.background.default,  }}>
      <Text style={{ fontSize: 26, fontWeight: "700", marginBottom: 20}}>General Health 👩</Text>
      <MaleHealthLogForm
              formState={formState}
              change={formChangeHandler}
              submit={formSubmitHandler}
          />
     </ScrollView>
  );
}
