import { View, Text, Button } from "react-native";
import { useRouter} from "expo-router";
import { colours } from "../theme/colours";

export default function Profile() {
  const router = useRouter();
  return (
    <View style={{ padding: 20, backgroundColor: colours.background.default }}>
      <Text>You must login to see your profile!</Text>
      <Button title="Go to Login" onPress={() => router.push("/login")} />
    </View>
  );
}