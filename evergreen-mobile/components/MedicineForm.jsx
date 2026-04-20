import { ScrollView, Text, TextInput, Pressable } from 'react-native';
import DropdownPicker from "../components/DropdownPicker";
import TextField from "../components/TextField";
import MultiLineTextField from '../components/MultilineTextField';
import NumberField from '../components/NumberField';

export default function MedicineForm(props){
    return(
        <ScrollView>
           <TextField 
            label="Name"
            value={props.formState.name}
            onChange={props.change}
            field="name"
            />

        <DropdownPicker 
              label="Category" 
              value={props.formState.category} 
              onChange={(value) => props.change('category', value)} 
              options={["Contraceptive", "Hormone", "Supplement", "Painkiller", "Other"]}
         />

          <NumberField
            label="Dosage"
            value={props.formState.dosage}
            field="dosage"
            onChange={props.change}
            unit="ml"
          />

            <DropdownPicker 
              label="Frequency" 
              value={props.formState.frequency} 
              onChange={(value) => props.change('frequency', value)} 
              options={["Once daily", "Twice daily", "Three times daily", "Every 8 hours", "Weekly", "As needed", "Other"]}
            />
             {props.formState.frequency === "Other" && (
                <TextInput
                    value={props.formState.frequencyOther}
                    onChangeText={(text) =>
                        props.change("frequencyOther", text)
                    }
                    placeholder="e.g. every 2 days"
                    style={{
                        borderWidth: 1,
                        borderColor: '#ccc',
                        borderRadius: 10,
                        padding: 12,
                        backgroundColor: 'white',
                        marginTop: 1
                    }}
                />
            )}

            <MultiLineTextField
                label="Notes"
                value={props.formState.notes}
                onChange={(text) => props.change("notes", text)}
            />

            <Pressable onPress={props.submit} style={{ backgroundColor: "green", paddingVertical: 14, borderRadius: 12, alignItems: "center"}}>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}> Submit </Text>
            </Pressable>  
        </ScrollView>
    )
}