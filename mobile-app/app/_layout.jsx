import { Tabs } from "expo-router";
import LogsContextProvider from "../contexts/logsContext";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <LogsContextProvider>
       <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#33691E",
          tabBarInactiveTintColor: "grey",
          tabBarStyle: { height: 60, paddingBottom: 5 },
        }}
      >
        <Tabs.Screen
          name="dashboard"
          options={{
            title: "Dashboard",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="logging"
          options={{
            title: "Logging",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-outline" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="stats"
          options={{
            title: "Stats",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="stats-chart-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </LogsContextProvider>
  );
}
