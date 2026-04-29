import { Text, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { colours } from "./../theme/colours";

export default function ArticleDetails() {
  const { title, description } = useLocalSearchParams();

  return (
    <ScrollView style={{ padding: 16, backgroundColor: colours.background.default }}>

      <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 12 }}>
        {title}
      </Text>

      <Text style={{ fontSize: 16, lineHeight: 22, color: "#444" }}>
        {description}
      </Text>

      <Text style={{ marginTop: 20, fontSize: 12, color: "#888" }}>
        Source: Wikipedia API
      </Text>

    </ScrollView>
  );
}