import { View, Text, TextInput } from "react-native";

export default function NumberField({ label, value, onChange, field, unit = "", placeholder = "0"}) 
{
  return (
    <View style={{ marginBottom: 12 }}>

      {/* Label */}
      <Text style={{ marginBottom: 6, fontWeight: "500" }}>
        {label}
      </Text>

      {/* Input Row */}
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
          value={value}
          onChangeText={(text) =>
            onChange(field, text.replace(/[^0-9]/g, ""))
          }
          keyboardType="numeric"
          style={{ flex: 1, paddingVertical: 12 }}
          placeholder={placeholder}
        />

        {unit !== "" && (
          <Text style={{ color: "#666" }}>
            {unit}
          </Text>
        )}

      </View>

    </View>
  );
}