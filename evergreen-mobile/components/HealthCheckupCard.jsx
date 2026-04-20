import React, {useContext} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';
import { useRouter } from "expo-router";
import { formatDate } from "../utils/format";

export default function HealthCheckupCard(props){
  const { deleteHealthCheckup } = useContext(ReproductiveHealthContext);
  const router = useRouter();

    return(
        <View style={styles.card}>
            <Text style={styles.label}>Name: <Text style={styles.value}>{props.name}</Text></Text>
            <Text style={styles.label}>Date: <Text style={styles.value}>{formatDate(props.date)}</Text></Text>
            <Text style={styles.label}>Time: <Text style={styles.value}>{props.time}</Text></Text>
            <Text style={styles.label}>Status: <Text style={styles.value}>{props.status}</Text></Text>
            <Text style={styles.label}>Results: <Text style={styles.value}>{props.results}</Text></Text>
            <Text style={styles.label}>Doctor Notes: <Text style={styles.value}>{props.doctorNotes}</Text></Text>
            <View style={styles.actionButtons}>
            <Button title="Delete" color='green' onPress={() => { console.log("Deleting ID:", props._id); deleteHealthCheckup(props._id)}} />
            <Button title="Edit" color='green' onPress={() => { console.log("Editing ID:", props._id); router.push(`/healthCheckup-logging?id=${props._id}`)}} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor:'#fefefe',
    color: 'black',
    width: 180,
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