import { useState, useContext } from "react";
import { View, Text, TextInput, Button, Pressable } from "react-native";
import { AuthContext } from "../contexts/authContext";
import { useRouter } from "expo-router";
import { colours } from "../theme/colours";
import { Ionicons } from "@expo/vector-icons";
import DropdownPicker from "../components/DropdownPicker";

export default function Register() {
  const { register } = useContext(AuthContext);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [lifeStage, setLifeStage] = useState("");

  const registerUser = async () => {
    if (password !== passwordAgain) return alert("Passwords do not match");
    const success = await register(email, password, lifeStage);
    if (success) router.push("/login");
    else alert("Signup failed, username may be taken");
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: colours.background.default, paddingTop: 100 }}>
      <Text style={{ fontSize: 26, fontWeight: "700", marginBottom: 20 }}>Register</Text>

      <Text style={{ marginBottom: 6, fontWeight: "500" }}>Email</Text>
      <TextInput placeholder="Enter Email" value={email} onChangeText={setEmail} style={{ borderRadius: 10, marginBottom: 16, padding: 12, backgroundColor: 'white' }} />

      <View style={{ marginBottom: 16 }}>
      <Text style={{ marginBottom: 6, fontWeight: "500" }}>Password</Text>
      <View style={{ backgroundColor: "white",borderRadius: 10, paddingHorizontal: 12, flexDirection: "row", alignItems: "center"}}>
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={!showPassword} style={{ flex:1, paddingVertical:12 }} />
     <Pressable onPress={() => setShowPassword(prev => !prev)}>
      <Ionicons name={showPassword ? "eye-outline" : "eye-off-outline"} size={22} color="#666"/>
    </Pressable>
      </View>
      </View>

       <View style={{ marginBottom: 12 }}>
      <Text style={{ marginBottom: 6, fontWeight: "500" }}>Password Again</Text>
      <View style={{ backgroundColor: "white",borderRadius: 10, paddingHorizontal: 12, flexDirection: "row", alignItems: "center"}}>
      <TextInput placeholder="Password" value={passwordAgain} onChangeText={setPasswordAgain} secureTextEntry={!showPassword} style={{ flex:1, paddingVertical:12 }} />
      <Pressable onPress={() => setShowPassword(prev => !prev)}>
      <Ionicons name={showPassword ? "eye-outline" : "eye-off-outline"} size={22} color="#666"/>
      </Pressable>
      </View>
      </View>

       <DropdownPicker label="Life Stage" value={lifeStage} onChange={setLifeStage} options={["Menstruating", "Menopausal", "Male"]}/>

        <Pressable onPress={registerUser} style={{ backgroundColor: "green", paddingVertical: 14, borderRadius: 12, alignItems: "center"}}>
        <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}> Register </Text>
      </Pressable>

    
    </View>
  );
}