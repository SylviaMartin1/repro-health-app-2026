import { useRouter } from "expo-router";
import { Text, ScrollView } from 'react-native';
import { useState, useContext} from 'react'
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';
import { AuthContext } from '../contexts/authContext';
import MedicineForm from '../components/MedicineForm';
import { useLocalSearchParams } from "expo-router";
import { colours } from "../theme/colours";

export default function MedicineLogging() {
const router = useRouter();
const { addMedicine, medicines, updateMedicine} = useContext(ReproductiveHealthContext);
const params = useLocalSearchParams();


const existingMedicine = medicines.find(medicine => String(medicine._id) === String(params.id));

 const [ formState, setFormState ] = useState({
    name: existingMedicine?.name || "", 
    category: existingMedicine?.category || "",
    dosage: existingMedicine?.dosage?.toString() || "",
    frequency: existingMedicine?.frequency || "",
    notes:  existingMedicine?.notes || ""
  })

     const formChangeHandler = (field, value) => {
    setFormState({
      ...formState,
      [field]: value,
    });
  };

    const formSubmitHandler = async () => {
    if (!formState.name || !formState.category || !formState.dosage || !formState.frequency || !formState.notes) return;
    if (existingMedicine) {
    await updateMedicine(existingMedicine._id, formState);
  } else {
    await addMedicine(formState);
  }
    setFormState({ name: '', category:'', dosage:'', frequency:'', notes:''});
     router.push("/dashboard");
  }; 
  

  return (
    <ScrollView style={{ flex: 1, marginTop: 20, backgroundColor: colours.background.default, paddingTop: 60 }}>
      <Text style={{ fontSize: 26, fontWeight: "700", marginBottom: 20}}>Logging</Text>
      <MedicineForm
              formState={formState}
              change={formChangeHandler}
              submit={formSubmitHandler}
          />
    </ScrollView>
  );
}
