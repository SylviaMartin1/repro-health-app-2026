import { useEffect } from "react";
import { View, Image, Text, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { colours } from "../theme/colours";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/home");
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colours.background.default,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10
      }}
    >
      <Image
        source={require("../assets/images/evergreenlogo4.png")}
        style={{
          width: 280,
          height: 280,
          resizeMode: "contain"
        }}
      />

       <Text
        style={{
          fontSize: 16,
          color: "#4A4A4A",
          textAlign: "center",
          marginBottom: 20,
          fontWeight: "600"
        }}
      >
        Prioritising Long Lasting Health 
      </Text>

      <ActivityIndicator size="large" color="#2E5E3E" />
    </View>
  );
}