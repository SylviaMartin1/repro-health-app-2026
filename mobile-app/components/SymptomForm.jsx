import { View } from 'react-native'

const AddSymptomForm = (props) => {
    return (
        <View>
        <form>
        <label>
            Symptom name:
            <input type="text" name="name" required />
        </label>
         <input type="submit" value="Submit" />
        </form>
        </View>
    )
};

export default AddSymptomForm;