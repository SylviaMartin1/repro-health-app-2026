import { useRouter } from "expo-router";
import { View, Text } from 'react-native';
import { useState, useContext} from 'react'
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';
import LifeStyleLogForm from '../components/LifeStyleLogForm';
import { useLocalSearchParams } from "expo-router";
import { colours } from "../theme/colours";

export default function LifeStyleLogging() {
const router = useRouter();
const { addLifeStyleLog, lifeStyleLogs, updateLifeStyleLog} = useContext(ReproductiveHealthContext);
const params = useLocalSearchParams();

const existingLifeStyleLog = lifeStyleLogs.find(lifeStyleLog => String(lifeStyleLog._id) === String(params.id));

 const [ formState, setFormState ] = useState({
   sleepHours: existingLifeStyleLog?.sleepHours ?? 0,
   exerciseMins: existingLifeStyleLog?.exerciseMins ?? 0,
   waterIntakeLevel: existingLifeStyleLog?.waterIntakeLevel ?? 0,
   stressLevel: existingLifeStyleLog?.stressLevel ?? 0,
   dietQuality: existingLifeStyleLog?.dietQuality || "",
   mood:  existingLifeStyleLog?.mood || ""
  })

     const formChangeHandler = (field, value) => {
    setFormState({
      ...formState,
      [field]: value,
    });
  };

    const formSubmitHandler = async () => {
    if (
      formState.sleepHours === "" ||
      formState.exerciseMins === "" ||
      !formState.waterIntakeLevel ||
      !formState.stressLevel ||
      !formState.dietQuality ||
      !formState.mood
    ) return;
    if (existingLifeStyleLog) {
    await updateLifeStyleLog(existingLifeStyleLog._id, formState);
  } else {
    await addLifeStyleLog(formState);
  }
    setFormState({ sleepHours: '', exerciseMins:'', waterIntakeLevel:'', stressLevel:'', dietQuality:'', mood:''});
     router.push("/dashboard");
  }; 
  

  return (
    <View style={{ marginTop: 20, backgroundColor: colours.background.default}}>
      <Text>Logging</Text>
      <LifeStyleLogForm
              formState={formState}
              change={formChangeHandler}
              submit={formSubmitHandler}
          />
    </View>
  );
}
