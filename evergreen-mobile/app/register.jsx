import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Sign Up Page</Text>

      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ borderWidth: 1, marginVertical: 5, padding: 5 }} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={{ borderWidth: 1, marginVertical: 5, padding: 5 }} />
      <TextInput placeholder="Confirm Password" value={password2} onChangeText={setPassword2} secureTextEntry style={{ borderWidth: 1, marginVertical: 5, padding: 5 }} />

      <Button title="Register" onPress={() => alert("Register pressed")} />
      <Button title="Go to Login" onPress={() => router.push("/login")} />
    </View>
  );
}