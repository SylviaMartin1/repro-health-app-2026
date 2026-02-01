import { View, Text, Pressable, Image } from 'react-native';
import { useRouter } from "expo-router";
import { colours } from '../theme/colours'

export default function Index() {
  const router = useRouter();

    return (
        <View style={{ flex: 1, alignItems: "center", backgroundColor: colours.background.default }}>
         <View style={{alignItems: "center", marginTop: 120, width: "100%",}}>

            {/* Logo placeholder */}
            <Image  source={require('../assets/images/evergreen.png')} style={{ width: 300, height: 150, marginBottom: 30, backgroundColor: '#ccc' }} />

            {/* Create account button */}
            <Pressable 
                    onPress={() => router.push("/register")}
                    style={{ width: 280, backgroundColor: colours.primary.main, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8, marginBottom: 10, alignItems: "center" }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Create an account</Text>
                </Pressable>

            {/* Login button */}
            <Pressable 
                    onPress={() => router.push("/login")}
                    style={{ width: 280, backgroundColor: colours.primary.main, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8, marginBottom: 10, alignItems: "center" }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
                </Pressable>
                </View>
        </View>
    );
}
