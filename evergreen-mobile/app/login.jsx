import { useState, useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { AuthContext } from "../contexts/authContext";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const { authenticate } = useContext(AuthContext);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    await authenticate(email, password);
    router.push("/dashboard"); // redirect after login
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Login</Text>
      <TextInput placeholder="Username" value={email} onChangeText={setEmail} style={{ borderWidth: 1, marginVertical: 8, padding: 8 }} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={{ borderWidth: 1, marginVertical: 8, padding: 8 }} />
      <Button title="Login" onPress={login} />
    </View>
  );
}