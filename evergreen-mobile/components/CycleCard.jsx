/**
 * Imports View and Text core components from React Native
 */
import React, {useContext} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';

/**
 * Defines the component CycleCard so it can be used in other files
 * Contains props object to allow it to receive data from its parent
 * and thus display dynamic content
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
            <Button title="Delete" onPress={() => deleteCycle(props.id)} />
        </View>
    )
}

/**
 * Stylesheet to style the cycle card into its card shape and style the text within it too
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