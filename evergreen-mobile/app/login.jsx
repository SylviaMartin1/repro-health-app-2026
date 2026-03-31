import { useState, useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { AuthContext } from "../contexts/authContext";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const { authenticate } = useContext(AuthContext);
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    await authenticate(userName, password);
    router.push("/dashboard"); // redirect after login
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Login</Text>
      <TextInput placeholder="Username" value={userName} onChangeText={setUserName} style={{ borderWidth: 1, marginVertical: 8, padding: 8 }} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={{ borderWidth: 1, marginVertical: 8, padding: 8 }} />
      <Button title="Login" onPress={login} />
    </View>
  );
}