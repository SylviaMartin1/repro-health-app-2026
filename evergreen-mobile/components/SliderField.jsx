import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";

export default function SliderField({ label, value, onChange, min = 0, max = 10, step = 1,unit = ""})
{
  return (
    <View style={{ marginVertical: 12 }}>

      <Text style={{ fontWeight: "500", marginBottom: 6 }}>
        {label}: {value}{unit}
      </Text>

      <Slider
        minimumValue={min}
        maximumValue={max}
        step={step}
        value={Number(value) || 0}
        onValueChange={(val) => onChange(val.toString())}
        minimumTrackTintColor="#4CAF50"
        maximumTrackTintColor="#ccc"
        thumbTintColor="#4CAF50"
      />
    </View>
  );
}