import { View, Text, Button } from "react-native";
import { useRouter} from "expo-router"

export default function Profile() {
  const router = useRouter();

  return (
    <View style={{ padding: 20 }}>
      <Text>You must login to see your profile!</Text>
      <Button title="Go to Login" onPress={() => router.push("/login")} />

    </View>
  );
}