import { View, Text, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";

export default function TimePickerField({ label, value, onChange }) {
  const [open, setOpen] = useState(false);

  const formatTime = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit"
    });
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
          borderColor: "#ccc",
          padding: 12,
          borderRadius: 8,
          backgroundColor: "white"
        }}
      >
        <Text style={{ color: value ? "black" : "#999" }}>
          {value ? formatTime(value) : "Select time"}
        </Text>
      </Pressable>

      {open && (
        <DateTimePicker
          value={value ? new Date(value) : new Date()}
          mode="time"
          is24Hour={true}
          onChange={(event, selectedTime) => {
            setOpen(false);
            if (selectedTime) {
              onChange(selectedTime.toISOString());
            }
          }}
        />
      )}

    </View>
  );
}