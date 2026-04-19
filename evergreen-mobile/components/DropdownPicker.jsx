import { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function DropdownPicker({label, value, onChange, options = []}) {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ marginVertical: 10 }}>

      {/* LABEL */}
      {label && 
      (<Text style={{ marginBottom: 6, fontWeight: "500" }}> {label} </Text>)}

      {/* SELECT FIELD */}
      <Pressable onPress={() => setOpen(prev => !prev)} style={{ backgroundColor: "white", padding: 12, borderRadius: 10, borderWidth: 1, borderColor: "#ddd"}} >
        <Text style={{ color: value ? "black" : "#999" }}> {value || "Select an option"}
        </Text>
      </Pressable>

      {/* OPTIONS */}
      {open && (
        <View
          style={{
            marginTop: 6,
            backgroundColor: "white",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#eee",
            overflow: "hidden"
          }}
        >
          {options.map((option) => (
            <Pressable
              key={option}
              onPress={() => {
                onChange(option);
                setOpen(false);
              }}
              style={{
                padding: 12,
                borderBottomWidth: 1,
                borderBottomColor: "#f2f2f2"
              }}
            >
              <Text>{option}</Text>
            </Pressable>
          ))}
        </View>
      )}

    </View>
  );
}