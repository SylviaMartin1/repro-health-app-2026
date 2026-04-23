import { View, Text, Pressable } from "react-native";

export default function MultiSelectChips({ label, options, selected = [], onChange }) {

  const toggleItem = (item) => {
    const exists = selected.includes(item);

    const updated = exists
      ? selected.filter(i => i !== item)
      : [...selected, item];

    onChange(updated);
  };

  return (
    <View style={{ marginBottom: 16 }}>
      
      <Text style={{ marginBottom: 6, fontWeight: "500" }}>
        {label}
      </Text>

      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {options.map((item) => {
          const isSelected = selected.includes(item);

          return (
            <Pressable
              key={item}
              onPress={() => toggleItem(item)}
              style={{
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 20,
                margin: 4,
                borderWidth: 1,
                borderColor: isSelected ? "green" : "#ccc",
                backgroundColor: isSelected ? "green" : "white"
              }}
            >
              <Text style={{ color: isSelected ? "white" : "black" }}>
                {item}
              </Text>
            </Pressable>
          );
        })}
      </View>

    </View>
  );
}