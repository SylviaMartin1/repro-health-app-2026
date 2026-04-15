import { Stack } from "expo-router";
import AuthContextProvider from "../contexts/authContext";
import ReproductiveHealthContextProvider from "../contexts/ReproductiveHealthContext";

export default function RootLayout() {
  return (
    <AuthContextProvider>
    <ReproductiveHealthContextProvider>
      <Stack />
    </ReproductiveHealthContextProvider>
    </AuthContextProvider>
  );
}
