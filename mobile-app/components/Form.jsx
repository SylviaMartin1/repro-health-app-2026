import { View, Text, TextInput, Button } from 'react-native';

export default function Form(props){
    return(
        <View>
            <TextInput
                value={props.formState.startDate}
                onChangeText={(text) => props.change('startDate', text)}
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
                value={props.formState.flowLevel}
                onChangeText={(text) => props.change('flowLevel', text)}
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
                value={props.formState.painLevel}
                onChangeText={(text) => props.change('painLevel', text)}
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