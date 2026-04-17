import React, {useContext} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';
import { useRouter } from "expo-router";

export default function MenopausalHealthLogCard(props){
  const { deleteMenopausalHealthLog } = useContext(ReproductiveHealthContext);
  const router = useRouter();

    return(
        <View style={styles.card}>
            <Text style={styles.label}>Hot Flash Quantity: <Text style={styles.value}>{props.hotFlashQuantity}</Text></Text>
            <Text style={styles.label}>Hot Flash Intensity Score: <Text style={styles.value}>{props.hotFlashIntensityScore}</Text></Text>
            <Text style={styles.label}>Night Sweat Quantity: <Text style={styles.value}>{props.nightSweatQuantity}</Text></Text>
            <Text style={styles.label}>Night Sweat Score: <Text style={styles.value}>{props.nightSweatScore}</Text></Text>
            <Text style={styles.label}>Symptoms: <Text style={styles.value}>{props.symptoms}</Text></Text>
            <Text style={styles.label}>Emotions: <Text style={styles.value}>{props.emotions}</Text></Text>
            <Text style={styles.label}>Estrogen Levels: <Text style={styles.value}>{props.estrogenLevels}</Text></Text>
            <Text style={styles.label}>Progesterone Levels: <Text style={styles.value}>{props.progesteroneLevels}</Text></Text>
            <Text style={styles.label}>FSH Levels: <Text style={styles.value}>{props.fshLevels}</Text></Text>

            <View style={styles.actionButtons}>
            <Button title="Delete" color='green' onPress={() => { console.log("Deleting ID:", props._id); deleteMenopausalHealthLog(props._id)}} />
            <Button title="Edit" color='green' onPress={() => { console.log("Editing ID:", props._id); router.push(`/menopausalHealth-logging?id=${props._id}`)}} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor:'#fefefe',
    color: 'black',
    width: 180,
    height: 300,
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