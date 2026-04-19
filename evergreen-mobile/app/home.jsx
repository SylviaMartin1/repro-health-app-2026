import { View, Text, Pressable, Image } from 'react-native';
import { useRouter } from "expo-router";
import { colours } from "../theme/colours";

export default function Start() {
  const router = useRouter();

    return (
        <View style={{ flex: 1, alignItems: "center", backgroundColor: colours.background.default, paddingHorizontal: 20 }}>
            <View style={{alignItems: "center", width: "100%", marginTop: 80}}>
                <Image source={require('../assets/images/evergreenlogo4.png')} style={{ width: 625, height: 305, resizeMode: "contain"}} />
            </View>

            <View style={{ marginTop: 15, alignItems: "center" }}>
            <Pressable 
                onPress={() => router.push("/login")}
                style={{ width: 240, backgroundColor: "green", paddingVertical: 14, borderRadius: 12, marginBottom: 7, alignItems: "center" }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Sign In</Text>
            </Pressable>
            <Pressable 
                onPress={() => router.push("/register")}
                style={{ width: 235, backgroundColor: "green", paddingVertical: 14, borderRadius: 12, alignItems: "center" }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Get Started</Text>
                </Pressable> 
            </View>
        </View>
    );
}
