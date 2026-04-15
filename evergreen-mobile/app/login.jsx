import { useState, useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { AuthContext } from "../contexts/authContext";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const { authenticate } = useContext(AuthContext);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const login = async () => {
    await authenticate(email, password);
    router.push("/dashboard"); // redirects here after a successful login
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Login</Text>
      <TextInput placeholder="Username" value={email} onChangeText={setEmail} style={{ borderWidth: 1, marginVertical: 8, padding: 8 }} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={!showPassword} style={{ borderWidth: 1, marginVertical: 8, padding: 8 }} />
      <Button 
  title={showPassword ? "Hide Password" : "Show Password"}
  onPress={() => setShowPassword(prev => !prev)}
/>
      <Button title="Login" onPress={login} />
    </View>
  );
}