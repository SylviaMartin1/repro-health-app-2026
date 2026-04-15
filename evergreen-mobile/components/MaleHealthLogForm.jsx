import { View, Text, TextInput, Button } from 'react-native';

export default function MaleHealthLogForm(props){
    return(
        <View>
            <TextInput
                value={props.formState.spermVolume}
                onChangeText={(text) => props.change('spermVolume', text)}
                placeholder="e.g. 28"
                placeholderTextColor="#999"
                style={{
                    borderWidth:1,
                    borderColor: '#ccc',
                    borderRadius: 4,
                    padding: 10,
                    marginVertical: 8
                }}
            />

             <TextInput
                value={props.formState.spermConcentration}
                onChangeText={(text) => props.change('spermConcentration', text)}
                placeholder="e.g. 28"
                placeholderTextColor="#999"
                style={{
                    borderWidth:1,
                    borderColor: '#ccc',
                    borderRadius: 4,
                    padding: 10,
                    marginVertical: 8
                }}
            />

            <TextInput
                value={props.formState.spermMotility}
                onChangeText={(text) => props.change('spermMotility', text)}
                placeholder="e.g. 28"
                placeholderTextColor="#999"
                style={{
                    borderWidth:1,
                    borderColor: '#ccc',
                    borderRadius: 4,
                    padding: 10,
                    marginVertical: 8
                }}
            />

             <TextInput
                value={props.formState.spermMorphology}
                onChangeText={(text) => props.change('spermMorphology', text)}
                placeholder="e.g. 28"
                placeholderTextColor="#999"
                style={{
                    borderWidth:1,
                    borderColor: '#ccc',
                    borderRadius: 4,
                    padding: 10,
                    marginVertical: 8
                }}
            />

            <TextInput
                value={props.formState.symptoms}
                onChangeText={(text) => props.change('symptoms', text)}
                placeholder="e.g. 28"
                placeholderTextColor="#999"
                style={{
                    borderWidth:1,
                    borderColor: '#ccc',
                    borderRadius: 4,
                    padding: 10,
                    marginVertical: 8
                }}
            />

             <TextInput
                value={props.formState.emotions}
                onChangeText={(text) => props.change('emotions', text)}
                placeholder="e.g. 28"
                placeholderTextColor="#999"
                style={{
                    borderWidth:1,
                    borderColor: '#ccc',
                    borderRadius: 4,
                    padding: 10,
                    marginVertical: 8
                }}
            />
            <Button title="Submit" onPress={props.submit}/>
        </View>
    )
}