import { View, Text, Pressable } from 'react-native';
import DropdownPicker from "../components/DropdownPicker";
import MultiSelectChips from "../components/MultiSelectChips";
import DatePickerField from "../components/DatePickerField";

export default function Form(props){
    return(
        <View>
          <DatePickerField label="Start Date" value={props.formState.startDate} onChange={(value) => props.change("startDate", value)}/>
          <DatePickerField label="End Date" value={props.formState.endDate}onChange={(value) => props.change("endDate", value)}/>
          <DropdownPicker label="Flow Level" value={props.formState.flowLevel} onChange={(value) => props.change('flowLevel', value)} options={["Low", "Medium", "High"]}/>
          <DropdownPicker label="Pain Level" value={props.formState.painLevel} onChange={(value) => props.change('painLevel', value)} options={["Low", "Medium", "High"]}/>
          <MultiSelectChips label="Symptoms" options={["Cramps", "Headache", "Fatigue", "Bloating"]} selected={props.formState.symptoms} onChange={(value) => props.change("symptoms", value)}/>
          <MultiSelectChips label="Emotions" options={["Happy", "Sad", "Anxious", "Irritable", "Tired"]} selected={props.formState.emotions} onChange={(value) => props.change("emotions", value)}/> 
        <Pressable onPress={props.submit} style={{ backgroundColor: "green", paddingVertical: 14, borderRadius: 12, alignItems: "center"}}>
        <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}> Submit </Text>
      </Pressable>  
        </View>
    )
}