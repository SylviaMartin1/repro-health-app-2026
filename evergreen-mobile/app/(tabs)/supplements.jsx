import { useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { fetchSupplementInfo } from "../../api/supplements";

const Categories = [
  { title: "Fertility Support", query: "folic acid zinc fertility" },
  { title: "Hormone Balance", query: "magnesium vitamin b6 hormones" },
  { title: "Male Health", query: "zinc testosterone sperm health" },
  { title: "General Wellness", query: "vitamin d omega 3 immune health" }
];

export default function SupplementsScreen() {
  const [data, setData] = useState({});

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const results = {};

    for (const category of Categories) {
      results[category.title] = await fetchSupplementInfo(category.query);
    }

    setData(results);
  };

  return (
    <ScrollView style={{ padding: 16 }}>

      <Text style={{ fontSize: 26, fontWeight: "700" }}>
        Supplements Library 💊
      </Text>

      {Categories.map((category) => (
        <View key={category.title} style={{ marginTop: 20 }}>

          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            {category.title}
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {(data[category.title] || []).map((item) => (
              <View
                key={item.id}
                style={{
                  width: 200,
                  backgroundColor: "white",
                  padding: 12,
                  marginRight: 10,
                  borderRadius: 12
                }}
              >
                <Text style={{ fontWeight: "700" }}>
                  {item.title}
                </Text>

                <Text numberOfLines={4} style={{ color: "#666" }}>
                  {item.description}
                </Text>
              </View>
            ))}
          </ScrollView>

        </View>
      ))}

    </ScrollView>
  );
}