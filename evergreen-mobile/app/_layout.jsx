import { Stack } from "expo-router";
import LogsContextProvider from "../contexts/ReproductiveHealthContext";

export default function RootLayout() {
  return (
    <LogsContextProvider>
      <Stack />
    </LogsContextProvider>
  );
}
