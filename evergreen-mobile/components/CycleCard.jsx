import React, {useContext} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';
import { useRouter } from "expo-router";
import { safeText } from '../utils/format'
import { formatDate } from "../utils/format";

export default function CycleCard(props){
  const { deleteCycle } = useContext(ReproductiveHealthContext);
  const router = useRouter();

    return(
        <View style={styles.card}>
            <Text style={styles.label}>Start Date: <Text style={styles.value}>{formatDate(props.startDate)}</Text></Text>
            <Text style={styles.label}>End Date: <Text style={styles.value}>{formatDate(props.endDate)}</Text></Text>
            <Text style={styles.label}>Flow Level: <Text style={styles.value}>{props.flowLevel}</Text></Text>
            <Text style={styles.label}>Pain Level: <Text style={styles.value}>{props.painLevel}</Text></Text>
            <Text style={styles.label}>Symptoms: <Text style={styles.value}>{safeText(props.symptoms)}</Text></Text>
            <Text style={styles.label}>Emotions: <Text style={styles.value}>{safeText(props.emotions)}</Text></Text>
            <View style={styles.actionButtons}>
            <Button title="Delete" color='green' onPress={() => { console.log("Deleting ID:", props._id); deleteCycle(props._id)}} />
            <Button title="Edit" color='green' onPress={() => { console.log("Editing ID:", props._id); router.push(`/logging?id=${props._id}`)}} />
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