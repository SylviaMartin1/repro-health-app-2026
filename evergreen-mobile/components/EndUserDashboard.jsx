import { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../contexts/authContext';
import MenstruatingDashboard from "../components/MenstruatingDashboard";
import MenopausalDashboard from "../components/MenopausalDashboard";
import MaleDashboard from "../components/MaleDashboard";

export default function EndUserDashboard() {
const { user } = useContext(AuthContext);
const lifeStage = user?.lifeStage;

console.log("User:", user);
console.log("Life Stage:", lifeStage);

if (!user) {
  return (
    <View>
      <Text>Loading user...</Text>
    </View>
  );
}


  if (!user || !lifeStage) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading user...</Text>
      </View>
    );
  }

 if (lifeStage === "Menstruating") {
    return <MenstruatingDashboard />;
  }

  if (lifeStage === "Menopausal") {
    return <MenopausalDashboard />;
  }

  if (lifeStage === "Male") {
    return <MaleDashboard />;
  }
}
