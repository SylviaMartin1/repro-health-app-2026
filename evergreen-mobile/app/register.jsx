import { useState, useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { AuthContext } from "../contexts/authContext";
import { useRouter } from "expo-router";

export default function Register() {
  const { register } = useContext(AuthContext);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const registerUser = async () => {
    if (password !== passwordAgain) return alert("Passwords do not match");
    const success = await register(email, password);
    if (success) router.push("/login");
    else alert("Signup failed, username may be taken");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Sign Up</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ borderWidth: 1, marginVertical: 8, padding: 8 }} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={{ borderWidth: 1, marginVertical: 8, padding: 8 }} />
      <TextInput placeholder="Password Again" value={passwordAgain} onChangeText={setPasswordAgain} secureTextEntry style={{ borderWidth: 1, marginVertical: 8, padding: 8 }} />
      <Button title="Register" onPress={registerUser} />
    </View>
  );
}