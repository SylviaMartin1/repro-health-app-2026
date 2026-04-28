import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { fetchHealthArticles } from "../../api/articles";

const CATEGORIES = [
  { title: "Fertility", key: "fertility" },
  { title: "Menstrual Health", key: "menstrual" },
  { title: "Hormones", key: "hormones" },
  { title: "Contraception", key: "contraception" }
];

export default function ArticlesScreen() {
  const [data, setData] = useState({});

  useEffect(() => {
    loadAll();
  }, []);

  const loadAll = async () => {
    const results = {};

    for (const cat of CATEGORIES) {
      results[cat.key] = await fetchHealthArticles(cat.key);
    }

    setData(results);
  };

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 26, fontWeight: "700", marginBottom: 10 }}>
        Health Library 📚
      </Text>

      {CATEGORIES.map((cat) => (
        <View key={cat.key} style={{ marginBottom: 20 }}>
          
          {/* Category Title */}
          <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 10 }}>
            {cat.title}
          </Text>

          {/* Horizontal Cards */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {(data[cat.key] || []).map((item, index) => (
              <View
                key={index}
                style={{
                  width: 200,
                  backgroundColor: "white",
                  marginRight: 10,
                  borderRadius: 12,
                  padding: 10
                }}
              >
                <Text style={{ fontWeight: "700" }}>
                  {item.title}
                </Text>

                <Text numberOfLines={5} style={{ color: "#666", marginTop: 5 }}>
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