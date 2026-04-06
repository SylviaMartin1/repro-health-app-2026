import React, {useContext} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';
import { useRouter } from "expo-router";

export default function MedicineCard(props){
  const { deleteMedicine } = useContext(ReproductiveHealthContext);
  const router = useRouter();

    return(
        <View style={styles.card}>
            <Text style={styles.label}>Name: <Text style={styles.value}>{props.name}</Text></Text>
            <Text style={styles.label}>Category: <Text style={styles.value}>{props.category}</Text></Text>
            <Text style={styles.label}>Dosage: <Text style={styles.value}>{props.dosage}</Text></Text>
            <Text style={styles.label}>Frequency: <Text style={styles.value}>{props.frequency}</Text></Text>
            <Text style={styles.label}>Notes: <Text style={styles.value}>{props.notes}</Text></Text>
            <View style={styles.actionButtons}>
            <Button title="Delete" color='green' onPress={() => { console.log("Deleting ID:", props._id); deleteMedicine(props._id)}} />
            <Button title="Edit" color='green' onPress={() => { console.log("Editing ID:", props._id); router.push(`/medicine-logging?id=${props._id}`)}} />
            </View>
        </View>
    )
}

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
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  }
});