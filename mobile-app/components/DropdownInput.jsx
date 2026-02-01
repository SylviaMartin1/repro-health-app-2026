import { View, Text, Pressable } from 'react-native';
import { useState } from 'react';

export default function DropDownInput({options = [], placeholder = "Select an option"}){
    const [value, setValue] = useState(''); //stores the selected option
    const [open, setOpen] = useState(''); //stores whether the dropdown is open or not

    const safeOptions = Array.isArray(options) ? options : [];

    return(
        <View>
            {/* Functionality to open or close the dropdown */}    
            <Pressable 
            onPress={() => setOpen(!open)}
            style={{paddingVertical: 14, paddingHorizontal: 12, borderWidth: 1, borderColor: "#999", borderRadius: 8, backgroundColor: "#fff", width: 280}}
            >
            <Text>{value || placeholder}</Text>   
            </Pressable> 

            {/* Functionality to show the options when the dropdown is open */}
            {open && safeOptions.map(option => (
            <Pressable key={option} 
            onPress={() => {setValue(option); setOpen(false); }}
            style={{paddingVertical: 14, paddingHorizontal: 12, borderBottomWidth: 1,borderBottomColor: "#eee",backgroundColor: "#fff"}}
            >
                <Text>{option}</Text>
            </Pressable>
            ))}
        </View>
    );
}