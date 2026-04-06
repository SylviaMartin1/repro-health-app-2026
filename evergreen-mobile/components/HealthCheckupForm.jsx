import { View, Text, TextInput, Button } from 'react-native';

export default function HealthCheckupForm(props){
    return(
        <View>
            <TextInput
                value={props.formState.name}
                onChangeText={(text) => props.change('name', text)}
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
                value={props.formState.date}
                onChangeText={(text) => props.change('date', text)}
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
                value={props.formState.time}
                onChangeText={(text) => props.change('time', text)}
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
                value={props.formState.results}
                onChangeText={(text) => props.change('results', text)}
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
                value={props.formState.doctorNotes}
                onChangeText={(text) => props.change('doctorNotes', text)}
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
                value={props.formState.status}
                onChangeText={(text) => props.change('status', text)}
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