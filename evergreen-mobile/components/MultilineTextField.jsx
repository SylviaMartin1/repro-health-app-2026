import { View, Text, TextInput } from "react-native";

export default function MultiLineTextField({ label, value, onChange, placeholder = "", numberOfLines = 4}) {
  return (
    <View style={{ marginBottom: 16 }}>

      {label && (
        <Text style={{ marginBottom: 6, fontWeight: "500" }}>
          {label}
        </Text>
      )}

      <TextInput
        value={value}
        onChangeText={onChange}
        multiline={true}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
        placeholderTextColor="#999"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 10,
          padding: 12,
          backgroundColor: "white",
          height: numberOfLines * 20,
          textAlignVertical: "top"
        }}
      />

    </View>
  );
}