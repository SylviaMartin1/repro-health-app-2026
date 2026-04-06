import React, {useContext} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';
import { useRouter } from "expo-router";

export default function LifeStyleLogCard(props){
  const { deleteLifeStyleLog } = useContext(ReproductiveHealthContext);
  const router = useRouter();

    return(
        <View style={styles.card}>
            <Text style={styles.label}>Sleep: <Text style={styles.value}>{props.sleepHours}</Text></Text>
            <Text style={styles.label}>Exercise: <Text style={styles.value}>{props.exerciseMins}</Text></Text>
            <Text style={styles.label}>Water Intake Level: <Text style={styles.value}>{props.waterIntakeLevel}</Text></Text>
            <Text style={styles.label}>Stress Level: <Text style={styles.value}>{props.stressLevel}</Text></Text>
            <Text style={styles.label}>Diet Quality: <Text style={styles.value}>{props.dietQuality}</Text></Text>
            <Text style={styles.label}>Mood: <Text style={styles.value}>{props.mood}</Text></Text>
            <View style={styles.actionButtons}>
            <Button title="Delete" color='green' onPress={() => { console.log("Deleting ID:", props._id); deleteLifeStyleLog(props._id)}} />
            <Button title="Edit" color='green' onPress={() => { console.log("Editing ID:", props._id); router.push(`/lifeStyle-logging?id=${props._id}`)}} />
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