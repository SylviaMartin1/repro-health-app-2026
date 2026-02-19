import { View, Text, TextInput, Button } from 'react-native';

export default function Form(props){
    return(
        <View>
            <TextInput
                value={props.formState.date}
                onChangeText={(text) => props.change('date', text)}
                placeholder="DD-MM-YYYY"
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
                value={props.formState.cycleLength}
                onChangeText={(text) => props.change('cycleLength', text)}
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
            <Button title="Submit" onPress={props.submit}/>

         
        </View>
    )
}