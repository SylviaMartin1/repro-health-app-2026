/**
 * Import React and useContext() hook from React
 * Import View, Text, Button, and StyleSheet from React Native
 * Import ReproductiveHealthContext context object from context file
 */
import React, {useContext} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';

/**
 * CycleCard() functional component
 * Declare the deleteCycle() function from the context file
 * Return a View with text and a button
 */
export default function CycleCard(props){
  const { deleteCycle } = useContext(ReproductiveHealthContext);
    return(
        <View style={styles.card}>
            <Text style={styles.label}>Start Date: <Text style={styles.value}>{props.startDate}</Text></Text>
            <Text style={styles.label}>End Date: <Text style={styles.value}>{props.endDate}</Text></Text>
            <Text style={styles.label}>Flow Level: <Text style={styles.value}>{props.flowLevel}</Text></Text>
            <Text style={styles.label}>Pain Level: <Text style={styles.value}>{props.painLevel}</Text></Text>
            <Text style={styles.label}>Symptoms: <Text style={styles.value}>{props.symptoms}</Text></Text>
            <Text style={styles.label}>Emotions: <Text style={styles.value}>{props.emotions}</Text></Text>
            <Button title="Delete" color='green' onPress={() => deleteCycle(props.id)} />
        </View>
    )
}

/**
 * Stylesheet object to style the view into a card and the text within
 */
const styles = StyleSheet.create({
  card: {
    backgroundColor:'#fefefe',
    color: 'black',
    width: 180,
    height: 240,
    margin: 10, 
    padding: 10,
    borderRadius: 10
  },
  label: {
    fontWeight: '700', 
    color: 'black',
    marginBottom: 4
  },
  value: {
    fontWeight: '400', 
    color: 'black',
    marginBottom: 4
  }
});