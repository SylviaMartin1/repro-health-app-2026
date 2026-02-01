import { View, Text, Pressable, Image } from 'react-native';
import { useRouter } from "expo-router";
import { colours } from '../theme/colours'

export default function Index() {
  const router = useRouter();

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colours.background.default }}>
            {/* Logo placeholder */}
            <Image style={{ width: 150, height: 150, marginBottom: 20, backgroundColor: '#ccc' }} />

            {/* Title and tagline */}
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Welcome to the App</Text>
            <Text style={{ marginBottom: 20 }}>Login or Register to continue</Text>

            {/* Buttons side by side */}
            <View style={{ flexDirection: 'row', gap: 10, marginBottom: 10}}>
                <Pressable 
                    onPress={() => router.push("/login")}
                    style={{ backgroundColor: colours.primary.main, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
                </Pressable>

                <Pressable 
                    onPress={() => router.push("/register")}
                    style={{ backgroundColor: colours.primary.main, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Register</Text>
                </Pressable>
            </View>

             {/* Link Buttons */}
            <View style={{ flexDirection: 'row', gap: 10, marginBottom: 10}}>
                <Pressable 
                    onPress={() => router.push("/log")}
                    style={{ backgroundColor: colours.primary.main, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Log</Text>
                </Pressable>

                <Pressable 
                    onPress={() => router.push("/stats")}
                    style={{ backgroundColor: colours.primary.main, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Stats</Text>
                </Pressable>

                 <Pressable 
                    onPress={() => router.push("/dashboard")}
                    style={{ backgroundColor: colours.primary.main, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Dashboard</Text>
                </Pressable>
            </View>

             {/* Link Buttons */}
             <View style={{ flexDirection: 'row', gap: 10}}>
                <Pressable 
                    onPress={() => router.push("/articles")}
                    style={{ backgroundColor: colours.primary.main, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Articles</Text>
                </Pressable>

                <Pressable 
                    onPress={() => router.push("/supplements")}
                    style={{ backgroundColor: colours.primary.main, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Supplements</Text>
                </Pressable>
                </View>
        </View>
    );
}
