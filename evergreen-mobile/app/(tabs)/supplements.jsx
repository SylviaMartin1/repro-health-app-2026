import { useEffect, useState } from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { fetchSupplements } from "../../api/supplements";
import { colours } from "../../theme/colours";

export default function SupplementsScreen() {
  const [supplements, setSupplements] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await fetchSupplements("vitamin");
      setSupplements(data);
    }
    load();
  }, []);

  return (
    <ScrollView style={{ padding: 10, backgroundColor: colours.background.default, flex: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: "700" }}>
        Supplements
      </Text>

      {supplements.map((item, index) => (
        <View
          key={index}
          style={{
            backgroundColor: "white",
            padding: 12,
            marginTop: 10,
            borderRadius: 10
          }}
        >
          {item.image_url && (
            <Image
              source={{ uri: item.image_url }}
              style={{ height: 100, borderRadius: 8 }}
            />
          )}

          <Text style={{ fontWeight: "700" }}>
            {item.product_name}
          </Text>

          <Text style={{ color: "#666" }}>
            {item.ingredients_text || "No description"}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}