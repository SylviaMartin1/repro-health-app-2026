import { View, Text } from 'react-native';

export default function LogCard(props){
    return(
        <View style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}>
            <Text>Date: {props.date}</Text>
            <Text>Symptoms: {props.symptoms}</Text>
        </View>
    )
}