import { useRouter } from "expo-router";
import { View, Text, ScrollView  } from 'react-native';
import { useState, useContext} from 'react'
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';
import MenopausalHealthLogForm from '../components/MenopausalHealthLogForm';
import { useLocalSearchParams } from "expo-router";
import { colours } from "../theme/colours";

export default function MenopausalHealthLogging() {
const router = useRouter();
const { addMenopausalHealthLog, menopausalHealthLogs, updateMenopausalHealthLog} = useContext(ReproductiveHealthContext);
const params = useLocalSearchParams();

const existingMenopausalHealthLog = menopausalHealthLogs.find(menopausalHealthLog => String(menopausalHealthLog._id) === String(params.id));

 const [ formState, setFormState ] = useState({
    hotFlashQuantity: existingMenopausalHealthLog?.hotFlashQuantity ?? 0, 
    hotFlashIntensityScore: existingMenopausalHealthLog?.hotFlashIntensityScore ?? 0,
    nightSweatQuantity: existingMenopausalHealthLog?.nightSweatQuantity ?? 0,
    nightSweatScore: existingMenopausalHealthLog?.nightSweatScore ?? 0,
    symptoms: existingMenopausalHealthLog?.symptoms || [],
    emotions: existingMenopausalHealthLog?.emotions || [],
    estrogenLevels: existingMenopausalHealthLog?.estrogenLevels ?? 0,
    progesteroneLevels: existingMenopausalHealthLog?.progesteroneLevels ?? 0,
    fshLevels: existingMenopausalHealthLog?.fshLevels ?? 0
  })

     const formChangeHandler = (field, value) => {
    setFormState({
      ...formState,
      [field]: value,
    });
  };

    const formSubmitHandler = async () => {
    if (!formState.hotFlashQuantity || !formState.hotFlashIntensityScore || !formState.nightSweatQuantity || !formState.nightSweatScore || !formState.symptoms  || !formState.emotions  || !formState.estrogenLevels  || !formState.progesteroneLevels  || !formState.fshLevels) return;
    if (existingMenopausalHealthLog) {
    await updateMenopausalHealthLog(existingMenopausalHealthLog._id, formState);
  } else {
    await addMenopausalHealthLog(formState);
  }
    setFormState({ hotFlashQuantity: 0, hotFlashIntensityScore:0, nightSweatQuantity:0, nightSweatScore:0, symptoms:[], emotions:[], estrogenLevels:0, progesteroneLevels:0, fshLevels:0});
     router.push("/dashboard");
  }; 
  

  return (
    <ScrollView style={{ flex: 1, padding: 10, backgroundColor: colours.background.default }}>
      <Text style={{ fontSize: 26, fontWeight: "700", marginBottom: 20}}>Logging</Text>
      <MenopausalHealthLogForm
              formState={formState}
              change={formChangeHandler}
              submit={formSubmitHandler}
          />
     </ScrollView>
  );
}
