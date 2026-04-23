import { View, Text, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";

export default function DatePickerField({ label, value, onChange }) {
  const [open, setOpen] = useState(false);

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toLocaleDateString("en-GB");
  };

  return (
    <View style={{ marginBottom: 16 }}>

      <Text style={{ marginBottom: 6, fontWeight: "500" }}>
        {label}
      </Text>

      <Pressable
        onPress={() => setOpen(true)}
        style={{
          borderWidth: 1,
          borderColor: value ? "#4CAF50" : "#ccc",
          padding: 12,
          borderRadius: 8,
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Text style={{ color: value ? "black" : "#999" }}>
          {value ? formatDate(value) : "Select date"}
        </Text>

        <Text style={{ fontSize: 16 }}>📅</Text>
      </Pressable>

      {open && (
        <DateTimePicker
          value={value ? new Date(value) : new Date()}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setOpen(false);
            if (selectedDate) {
              onChange(selectedDate.toISOString());
            }
          }}
        />
      )}

    </View>
  );
}