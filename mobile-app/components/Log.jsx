import { View, Text } from 'react-native';

export default function Log(props){
    
    return(
        <View>
            <Text>{props.date}</Text>
            <Text>{props.cycleLength}</Text>
            <Text>{props.startDate}</Text>
            <Text>{props.flowLevel}</Text>
            <Text>{props.painLevel}</Text>

        </View>
    )
}