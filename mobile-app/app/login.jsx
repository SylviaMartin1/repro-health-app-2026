import { View, Text} from 'react-native'
import DropDownInput from '../components/DropdownInput';

export default function Login() {
  return (
    <View>
        <Text>Login</Text>

        <DropDownInput 
        placeholder="Select a desired option"
        options={["Option1", "Option2", "Option3"]} 
        />

      

    </View>
  );
}
