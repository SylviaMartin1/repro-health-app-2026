import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colours } from '../theme/colours';

export default function KpiCard({ icon, value, label, color }) {
  return (
    <View
      style={{
        width: "47%",
        backgroundColor: "white",
        padding: 16,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 12,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
      }}
    >
      {/* Icon */}
      <Ionicons name={icon} size={26} color={color || "#333"} />

      {/* Value */}
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: colours.text.primary,
          marginTop: 8,
        }}
      >
        {value}
      </Text>

      {/* Label */}
      <Text style={{ fontSize: 12, color: colours.text.secondary, marginTop: 2 }}>
        {label}
      </Text>
    </View>
  );
}