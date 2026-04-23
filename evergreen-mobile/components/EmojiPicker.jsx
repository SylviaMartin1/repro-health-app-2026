import { View, Text, Pressable } from "react-native";

export default function EmojiPicker({ label, value, onChange,options = []}) 
{
  return (
    <View style={{ marginVertical: 12 }}>

      {/* Label */}
      <Text style={{ fontWeight: "500", marginBottom: 6 }}>
        {label}
      </Text>

      {/* Emoji Row */}
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {options.map((option) => {
          const selected = value === option;

          return (
            <Pressable
              key={option}
              onPress={() => onChange(option)}
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