import { View, Text } from 'react-native';

export default function Log(props){
    
    return(
        <View>
            <Text>{props.startDate}</Text>
            <Text>{props.flowLevel}</Text>
            <Text>{props.painLevel}</Text>
            <Text>{props.symptoms}</Text>
            <Text>{props.emotions}</Text>

        </View>
    )
}