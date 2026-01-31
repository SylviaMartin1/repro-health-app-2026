import { View, Text} from 'react-native'

function Symptom(props){ 
    return (
    <View>
       <Text> Symptom: {props.name}</Text>
       <Text> {props.children}</Text>
    </View>
    )
}

export default Symptom;