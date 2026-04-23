import { View, Text } from "react-native";
import { colours } from "../theme/colours"

export default function AdminDashboard() {
  return (
    <View style={{ padding: 20, backgroundColor: colours.background.default}}>
      <Text>Admin Dashboard</Text>
    </View>
  );
}