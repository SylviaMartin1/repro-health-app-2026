import { View, Text, TextInput } from "react-native";

export default function TextField({ label, value, onChange, field }) {
  return (
    <View style={{ marginBottom: 16 }}>

      {label && (
        <Text style={{ marginBottom: 6, fontWeight: "500" }}>
          {label}
        </Text>
      )}

      <TextInput
        value={value}
        onChangeText={(text) => onChange(field, text)}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 10,
          padding: 12,
          backgroundColor: "white"
        }}
      />

    </View>
  );
}