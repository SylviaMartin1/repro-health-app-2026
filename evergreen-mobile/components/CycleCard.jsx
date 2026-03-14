/**
 * Imports View and Text core components from React Native
 */
import { View, Text } from 'react-native';

/**
 * Defines the component CycleCard so it can be used in other files
 * Contains props object to allow it to receive data from its parent
 * and thus display dynamic content
 */
export default function CycleCard(props){
    
    return(
        <View>
            <Text> Start Date: {props.startDate}</Text>
            <Text>End Date: {props.endDate}</Text>
            <Text>Flow Level: {props.flowLevel}</Text>
            <Text>Pain Level: {props.painLevel}</Text>
            <Text>Symptoms: {props.symptoms}</Text>
            <Text>Emotions: {props.emotions}</Text>
        </View>
    )
}