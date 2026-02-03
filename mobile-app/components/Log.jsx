import { View, Text } from 'react-native';

export default function Log(props){
    
    return(
        <View>
            <Text>{props.date}</Text>
            <Text>{props.cycleLength}</Text>
        </View>
    )
}