import { useEffect, useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { fetchHealthArticles } from "../../api/articles";
import { colours } from "../../theme/colours";

const Categories = [
  { title: "Reproductive Health", key: "reproductive health fertility" },
  { title: "Hormonal Health", key: "hormones endocrine system" },
  { title: "Menstrual & Cycle Health", key: "menstrual cycle period health" },
  { title: "Contraception", key: "contraception birth control" },
  { title: "Menopause Health", key: "menopause hormonal changes" },
  { title: "Male Reproductive Health", key: "male reproductive health sperm fertility" }
];

export default function ArticlesScreen() {
  const router = useRouter();
  const [data, setData] = useState({});

  useEffect(() => {
    loadAll();
  }, []);

  const loadAll = async () => {
    const results = {};

    for (const category of Categories) {
      const articles = await fetchHealthArticles(category.key);
      results[category.key] = articles;
    }

    setData(results);
  };

  return (
    <ScrollView style={{ padding: 16, backgroundColor: colours.background.default, }}>

      <Text style={{ fontSize: 26, fontWeight: "700", marginBottom: 10 }}>
        Health Library 📚
      </Text>

      {Categories.map((category) => (
        <View key={category.key} style={{ marginBottom: 20 }}>

          {/* CATEGORY TITLE */}
          <Text style={{
            fontSize: 18,
            fontWeight: "700",
            marginBottom: 10,
            color: "#2E7D32"
          }}>
            {category.title}
          </Text>

          {/* HORIZONTAL SCROLL */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {(data[category.key] || []).map((item) => (
              <Pressable
                key={item.id}
                onPress={() =>
                  router.push({
                    pathname: "/articleDetails",
                    params: {
                      title: item.title,
                      description: item.description
                    }
                  })
                }
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

              </Pressable>
            ))}
          </ScrollView>

        </View>
      ))}

    </ScrollView>
  );
}