import { Stack } from "expo-router";
import LogsContextProvider from "../contexts/logsContext";

export default function RootLayout() {
  return (
    <LogsContextProvider>
      <Stack />
    </LogsContextProvider>
  );
}
