import { View, Text } from "react-native";
import { LineChart } from "react-native-gifted-charts";

export default function ReusableLineChart({ title, data, color }) {
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        borderRadius: 16,
        marginTop: 12
      }}
    >
      {/* Title */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        {title}
      </Text>

      {/* Chart */}
      <LineChart
        data={data}
        color={color}
        thickness={3}
        spacing={30}
      />
    </View>
  );
}