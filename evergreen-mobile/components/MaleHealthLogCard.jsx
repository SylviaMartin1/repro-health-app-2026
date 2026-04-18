import React, {useContext} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';
import { useRouter } from "expo-router";

export default function MaleHealthLogCard(props){
  const { deleteMaleHealthLog } = useContext(ReproductiveHealthContext);
  const router = useRouter();

    return(
        <View style={styles.card}>
            <Text style={styles.label}>Sperm Volume: <Text style={styles.value}>{props.spermVolume}</Text></Text>
            <Text style={styles.label}>Sperm Quantity: <Text style={styles.value}>{props.spermConcentration}</Text></Text>
            <Text style={styles.label}>Sperm Motility: <Text style={styles.value}>{props.spermMotility}</Text></Text>
            <Text style={styles.label}>Sperm Morphology: <Text style={styles.value}>{props.spermMorphology}</Text></Text>
            <Text style={styles.label}>Symptoms: <Text style={styles.value}>{props.symptoms}</Text></Text>
            <Text style={styles.label}>Emotions: <Text style={styles.value}>{props.emotions}</Text></Text>

            <View style={styles.actionButtons}>
            <Button title="Delete" color='green' onPress={() => { console.log("Deleting ID:", props._id); deleteMaleHealthLog(props._id)}} />
            <Button title="Edit" color='green' onPress={() => { console.log("Editing ID:", props._id); router.push(`/maleHealth-logging?id=${props._id}`)}} />
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