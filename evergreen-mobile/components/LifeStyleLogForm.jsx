import { ScrollView, TextInput, Pressable, Text } from 'react-native';
import EmojiPicker from "../components/EmojiPicker";
import SliderField from "../components/SliderField";

export default function LifeStyleLogForm(props){
    return(
        <ScrollView>
            <SliderField
                label="Sleep Hours"
                value={props.formState.sleepHours}
                onChange={(value) => props.change("sleepHours", value)}
                min={0}
                max={12}
                step={0.5}
                unit=" hrs"
            />

            <SliderField
                label="Exercise Minutes"
                value={props.formState.exerciseMins}
                onChange={(value) => props.change("exerciseMins", value)}
                min={0}
                max={120}
                step={1}
                unit=" mins"
            />

             <SliderField
                label="Water Intake Level"
                value={props.formState.waterIntakeLevel}
                onChange={(value) => props.change("waterIntakeLevel", value)}
                min={0}
                max={10}
                step={0.5}
                unit=" glasses"
            />

            <SliderField
                label="Stress Level"
                value={props.formState.stressLevel}
                onChange={(value) => props.change("stressLevel", value)}
                min={0}
                max={10}
                step={1}
            />

            <EmojiPicker
                label="Diet Quality"
                value={props.formState.dietQuality}
                onChange={(value) => props.change("dietQuality", value)}
                options={[
                    "🍕 Poor",
                    "🍟 Okay",
                    "🥗 Good",
                    "🍎 Excellent"
                ]}
            />

            <EmojiPicker
                label="Mood"
                value={props.formState.mood}
                onChange={(value) => props.change("mood", value)}
                options={[
                    "😢 Bad",
                    "😟 Low",
                    "😐 Neutral",
                    "🙂 Good",
                    "😄 Great"
                ]}
            />

            <Pressable onPress={props.submit} style={{ backgroundColor: "green", paddingVertical: 14, borderRadius: 12, alignItems: "center"}}>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}> Submit </Text>
            </Pressable>
        </ScrollView>
    )
}