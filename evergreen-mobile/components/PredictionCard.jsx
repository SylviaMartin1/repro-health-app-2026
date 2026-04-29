import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colours } from "../theme/colours";

export default function PredictionCard({
  nextPeriod,
  ovulation,
  fertileStart,
  fertileEnd,
}) {
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 20,
        borderRadius: 16,
        marginTop: 12,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
      }}
    >
      {/* TITLE */}
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: colours.text.primary,
          marginBottom: 16,
        }}
      >
        Predictions
      </Text>

      {/* NEXT PERIOD */}
      <View style={{ marginBottom: 16 }}>
        <Ionicons
          name="calendar-outline"
          size={20}
          color="#ff6b6b"
        />

        <Text
          style={{
            fontSize: 12,
            color: colours.text.secondary,
            marginTop: 4,
          }}
        >
          Next Period
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: colours.text.primary,
          }}
        >
          {nextPeriod?.toDateString()}
        </Text>
      </View>

      {/* OVULATION */}
      <View style={{ marginBottom: 16 }}>
        <Ionicons
          name="leaf-outline"
          size={20}
          color="#2ed573"
        />

        <Text
          style={{
            fontSize: 12,
            color: colours.text.secondary,
            marginTop: 4,
          }}
        >
          Ovulation
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: colours.text.primary,
          }}
        >
          {ovulation?.toDateString()}
        </Text>
      </View>

      {/* FERTILE WINDOW */}
      <View>
        <Ionicons
          name="heart-outline"
          size={20}
          color="#ff85a2"
        />

        <Text
          style={{
            fontSize: 12,
            color: colours.text.secondary,
            marginTop: 4,
          }}
        >
          Fertile Window
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: colours.text.primary,
          }}
        >
          {fertileStart?.toDateString()} -{" "}
          {fertileEnd?.toDateString()}
        </Text>
      </View>
    </View>
  );
}