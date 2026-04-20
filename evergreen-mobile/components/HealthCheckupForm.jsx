import { Text, TextInput, Pressable, ScrollView } from 'react-native';
import DropdownPicker from "../components/DropdownPicker";
import DatePickerField from "../components/DatePickerField";
import TextField from "../components/TextField";
import TimePicker from "../components/TimePicker";
import MultiLineTextField from '../components/MultilineTextField';


export default function HealthCheckupForm(props){
    return(
        <ScrollView>
            <TextField 
                label="Name"
                value={props.formState.name}
                onChange={props.change}
                field="name"
            />

            <DatePickerField 
                label="Date" 
                value={props.formState.date} 
                onChange={(value) => props.change("date", value)}
            />

            <TimePicker
                label="Time"
                value={props.formState.time}
                onChange={(value) => props.change("time", value)}
            />

            <MultiLineTextField
                label="Results"
                value={props.formState.results}
                onChange={(text) => props.change("results", text)}
            />

             <MultiLineTextField
                label="Doctor Notes"
                value={props.formState.doctorNotes}
                onChange={(text) => props.change("doctorNotes", text)}
            />

            <DropdownPicker 
                label="Status" 
                value={props.formState.status} 
                onChange={(value) => props.change('status', value)} 
                options={["Pending", "Scheduled", "Done", "Cancelled"]}
            />
          
            <Pressable onPress={props.submit} style={{ backgroundColor: "green", paddingVertical: 14, borderRadius: 12, alignItems: "center"}}>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}> Submit </Text>
            </Pressable>   
        </ScrollView>
    )
}