import { View, Text, TextInput, Button } from 'react-native';

export default function LifeStyleLogForm(props){
    return(
        <View>
            <TextInput
                value={props.formState.sleepHours}
                onChangeText={(text) => props.change('sleepHours', text)}
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
                value={props.formState.exerciseMins}
                onChangeText={(text) => props.change('exerciseMins', text)}
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
                value={props.formState.waterIntakeLevel}
                onChangeText={(text) => props.change('waterIntakeLevel', text)}
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
                value={props.formState.stressLevel}
                onChangeText={(text) => props.change('stressLevel', text)}
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
                value={props.formState.dietQuality}
                onChangeText={(text) => props.change('dietQuality', text)}
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
                value={props.formState.mood}
                onChangeText={(text) => props.change('mood', text)}
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