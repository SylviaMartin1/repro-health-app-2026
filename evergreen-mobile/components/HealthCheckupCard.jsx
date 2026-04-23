import React, {useContext} from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';
import { useRouter } from "expo-router";
import { formatDate, formatTime } from "../utils/format";
import { colours } from '../theme/colours';

export default function HealthCheckupCard(props){
  const { deleteHealthCheckup } = useContext(ReproductiveHealthContext);
  const router = useRouter();

    return(
        <View style={styles.card}>
            <Text style={styles.label}>Name: <Text style={styles.value}>{props.name}</Text></Text>
            <Text style={styles.label}>Date: <Text style={styles.value}>{formatDate(props.date)}</Text></Text>
            <Text style={styles.label}>Time: <Text style={styles.value}>{formatTime(props.time)}</Text></Text>
            <Text style={styles.label}>Status: <Text style={styles.value}>{props.status}</Text></Text>
            <View style={styles.actionButtons}>
              <Pressable 
                onPress={() => { deleteHealthCheckup(props._id)}}
                style={[styles.button, styles.deleteButton]}
                >
                 <Text style={styles.buttonText}>Delete</Text>
              </Pressable>
                                          
              <Pressable
                onPress={() => { router.push(`/healthCheckup-logging?id=${props._id}`)}}
                style={[styles.button, styles.editButton]}
                >
              <Text style={styles.buttonText}>Edit</Text>
              </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colours.background.surface,
    borderRadius: 14,
    padding: 12,
    margin: 10,
    width: 160,
    elevation: 2
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
  gap: 10,
  marginTop: 12,
},

button: {
  flex: 1,
  paddingVertical: 10,
  borderRadius: 10,
  alignItems: 'center',
},

  deleteButton: {
  backgroundColor: '#D32F2F',
},

editButton: {
  backgroundColor: colours.accent.main,
},

buttonText: {
  color: colours.text.inverse,
  fontWeight: '600',
},
});