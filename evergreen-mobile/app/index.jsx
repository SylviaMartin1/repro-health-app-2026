/**
 * Import View, Text, Pressable, and Image from React Native
 * Import useRouter() hook from Expo to provide navigation through links
 * Import custom colour theme file
 */
import { View, Text, Pressable, Image } from 'react-native';
import { useRouter } from "expo-router";
import { colours } from "../theme/colours";

/**
 * Index screen declared as functional component
 * Declare useRouter() hook to make navigation possible
 * Return logo, tagline, and buttons which link to the dashboard and logging screens
 * 
 */
export default function Index() {
  const router = useRouter();

    return (
        <View style={{ flex: 1, alignItems: "center", backgroundColor: colours.background.default }}>
            <View style={{alignItems: "center", marginTop: 120, width: "100%"}}>
                <Image source={require('../assets/images/evergreen.png')} style={{ width: 300, height: 150, marginBottom: 30, backgroundColor: '#ccc' }} />
            </View>
            <Pressable 
                onPress={() => router.push("/login")}
                style={{ width: 280, backgroundColor: "green", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8, marginBottom: 5, alignItems: "center" }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
            </Pressable>
            <Pressable 
                onPress={() => router.push("/register")}
                style={{ width: 280, backgroundColor: "green", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8, marginBottom: 5, alignItems: "center" }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Register</Text>
                </Pressable> 
            <Pressable 
                onPress={() => router.push("/dashboard")}
                style={{ width: 280, backgroundColor: "green", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8, marginBottom: 5, alignItems: "center" }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Dashboard</Text>
            </Pressable>
            <Pressable 
                onPress={() => router.push("/profile")}
                style={{ width: 280, backgroundColor: "green", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8, marginBottom: 5, alignItems: "center" }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Profile</Text>
            </Pressable>  
                
        </View>
    );
}
