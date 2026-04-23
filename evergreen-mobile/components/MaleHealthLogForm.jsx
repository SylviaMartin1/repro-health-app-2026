import { View, Text, Pressable } from 'react-native';
import EmojiPicker from "../components/EmojiPicker";
import MultiSelectChips from "../components/MultiSelectChips";
import SliderField from "../components/SliderField";
import NumberField from '../components/NumberField';

export default function MaleHealthLogForm(props){
    return(
        <View>
            <NumberField
                label="Sperm Volume"
                value={props.formState.spermVolume}
                field="spermVolume"
                onChange={props.change}
            />

            <NumberField
                label="Sperm Concentration"
                value={props.formState.spermConcentration}
                field="spermConcentration"
                onChange={props.change}
            />

            <NumberField
                label="Sperm Motility"
                value={props.formState.spermMotility}
                field="spermMotility"
                onChange={props.change}
            />

            <NumberField
                label="Sperm Morphology"
                value={props.formState.spermMorphology}
                field="spermMorphology"
                onChange={props.change}
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
            <Pressable onPress={props.submit} style={{ backgroundColor: "green", paddingVertical: 14, borderRadius: 12, alignItems: "center"}}>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}> Submit </Text>
            </Pressable>
        </View>
    )
}