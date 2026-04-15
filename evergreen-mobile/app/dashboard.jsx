import { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../contexts/authContext';
import EndUserDashboard from "../components/EndUserDashboard";
import AdminDashboard from "../components/AdminDashboard";

export default function Dashboard() {
const { user } = useContext(AuthContext);

console.log("User:", user);
  if (!user) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading user...</Text>
      </View>
    );
  }

if (user.role === "admin") {
  return <AdminDashboard />;
}

if (user.role === "user") {
  return <EndUserDashboard />;
}
}
