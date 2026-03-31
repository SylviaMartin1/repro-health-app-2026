import { Stack } from "expo-router";
import AuthContextProvider from "../contexts/authContext";
import LogsContextProvider from "../contexts/ReproductiveHealthContext";

export default function RootLayout() {
  return (
    <AuthContextProvider>
    <LogsContextProvider>
      <Stack />
    </LogsContextProvider>
    </AuthContextProvider>
  );
}
