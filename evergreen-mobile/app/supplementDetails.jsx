import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { colours } from "./../theme/colours";


export default function SupplementDetails() {
  const { title, description } = useLocalSearchParams();

  return (
    <View style={{ padding: 16, backgroundColor: colours.background.default, flex:1}}>

      <Text style={{ fontSize: 22, fontWeight: "700" }}>
        {title}
      </Text>

      <Text style={{ marginTop: 12, fontSize: 16, color: "#333" }}>
        {description}
      </Text>

      <Text style={{ marginTop: 20, color: "#666" }}>
        Source: Wikipedia (educational content)
      </Text>

    </View>
  );
}