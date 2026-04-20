import { View, Text, TextInput, Pressable } from 'react-native';
import EmojiPicker from "../components/EmojiPicker";
import MultiSelectChips from "../components/MultiSelectChips";
import SliderField from "../components/SliderField";
import NumberField from '../components/NumberField';

export default function MenopausalHealthLogForm(props){
    return(
        <View>
             <NumberField
                label="Hot Flash Quantity"
                value={props.formState.hotFlashQuantity}
                field="hotFlashQuantity"
                onChange={props.change}
             />

             <SliderField
                label="Hot Flash Intensity"
                value={props.formState.hotFlashIntensityScore}
                onChange={(value) => props.change("hotFlashIntensityScore", value)}
                min={0}
                max={10}
                step={1}
            />

             <NumberField
                label="Night Sweat Quantity"
                value={props.formState.nightSweatQuantity}
                field="nightSweatQuantity"
                onChange={props.change}
             />

             <SliderField
                label="Night Sweat Score"
                value={props.formState.nightSweatScore}
                onChange={(value) => props.change("nightSweatScore", value)}
                min={0}
                max={10}
                step={1}
            />

            <MultiSelectChips 
                label="Symptoms" 
                options={["Cramps", "Headache", "Fatigue", "Bloating"]} 
                selected={props.formState.symptoms} 
                onChange={(value) => props.change("symptoms", value)}
            />

            <EmojiPicker
                label="Emotions"
                value={props.formState.emotions}
                onChange={(value) => props.change("emotions", value)}
                options={[
                    "😢 Bad",
                    "😟 Low",
                    "😐 Neutral",
                    "🙂 Good",
                    "😄 Great"
                ]}
            />

            <SliderField
                label="Estrogen Levels"
                value={props.formState.estrogenLevels}
                onChange={(value) => props.change("estrogenLevels", value)}
                min={0}
                max={12}
                step={0.5}
            />

            <SliderField
                label="Progesterone Levels"
                value={props.formState.progesteroneLevels}
                onChange={(value) => props.change("progesteroneLevels", value)}
                min={0}
                max={100}
                step={0.5}
            />

            <SliderField
                label="FSH Levels"
                value={props.formState.fshLevels}
                onChange={(value) => props.change("fshLevels", value)}
                min={0}
                max={100}
                step={0.5}
            />

            <Pressable onPress={props.submit} style={{ backgroundColor: "green", paddingVertical: 14, borderRadius: 12, alignItems: "center"}}>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}> Submit </Text>
            </Pressable>
        </View>
    )
}