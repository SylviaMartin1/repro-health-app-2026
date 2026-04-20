import { View, Text, TextInput, Pressable } from 'react-native';
import DropdownPicker from "../components/DropdownPicker";

export default function MedicineForm(props){
    return(
        <View>
            <Text style={{ marginBottom: 6, fontWeight: "500" }}>  Name</Text>
            <TextInput
                value={props.formState.name}
                onChangeText={(text) => props.change('name', text)}
                placeholder=""
                placeholderTextColor="#999"
                style={{
                    borderWidth:1,
                    borderColor: '#ccc',
                    borderRadius: 10,
                    padding: 12,
                    backgroundColor: 'white'
                }}
            />

            <DropdownPicker 
              label="Category" 
              value={props.formState.category} 
              onChange={(value) => props.change('category', value)} 
              options={["Contraceptive", "Hormone", "Supplement", "Painkiller", "Other"]}
            />

            <Text style={{ marginBottom: 6, fontWeight: "500" }}>  Dosage </Text>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 10,
                backgroundColor: "white",
                paddingHorizontal: 12
            }}>
                <TextInput
                    value={props.formState.dosage}
                    onChangeText={(text) => props.change("dosage", text.replace(/[^0-9]/g, ""))}
                    keyboardType="numeric"
                    style={{ flex: 1, paddingVertical: 12 }}
                    placeholder="50"
                />
                <Text style={{ color: "#666" }}>ml</Text>
            </View>

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

            <Text style={{ marginBottom: 6, fontWeight: "500" }}>  Notes</Text>
            <TextInput
                value={props.formState.notes}
                onChangeText={(text) => props.change('notes', text)}
                multiline
                placeholder=""
                placeholderTextColor="#999"
                style={{
                     borderWidth:1,
                    borderColor: '#ccc',
                    borderRadius: 10,
                    padding: 12,
                    backgroundColor: 'white'
                }}
            />


            <Pressable onPress={props.submit} style={{ backgroundColor: "green", paddingVertical: 14, borderRadius: 12, alignItems: "center"}}>
                    <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}> Submit </Text>
                  </Pressable>  

         
        </View>
    )
}