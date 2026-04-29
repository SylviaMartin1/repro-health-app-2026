import { View, Text, Pressable } from "react-native";

export default function EmojiPicker({ label, value = [], onChange, options = [] }) {

  const toggle = (option) => {
    const exists = value.includes(option);

    const updated = exists
      ? value.filter(e => e !== option)
      : [...value, option];

    onChange(updated);
  };

  return (
    <View style={{ marginVertical: 12 }}>

      <Text style={{ fontWeight: "500", marginBottom: 6 }}>
        {label}
      </Text>

      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {options.map((option) => {
          const selected = value.includes(option);

          return (
            <Pressable
              key={option}
              onPress={() => toggle(option)}
              style={{
                padding: 10,
                marginRight: 8,
                marginBottom: 8,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: selected ? "#4CAF50" : "#ccc",
                backgroundColor: selected ? "#e8f5e9" : "white"
              }}
            >
              <Text style={{ fontSize: 14 }}>
                {option}
              </Text>
            </Pressable>
          );
        })}
      </View>

    </View>
  );
}