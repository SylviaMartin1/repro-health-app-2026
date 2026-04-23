import React, {useContext} from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';
import { useRouter } from "expo-router";
import { safeText, formatDate } from '../utils/format'
import { colours } from '../theme/colours'

export default function CycleCard(props){
  const { deleteCycle } = useContext(ReproductiveHealthContext);
  const router = useRouter();

    return(
        <View style={styles.card}>
          <View>
            <View style={styles.section}>
            <Text style={styles.label}>Start Date: <Text style={styles.value}>{formatDate(props.startDate)}</Text></Text>
            <Text style={styles.label}>End Date: <Text style={styles.value}>{formatDate(props.endDate)}</Text></Text>
            <Text style={styles.label}>Flow Level: <Text style={styles.value}>{props.flowLevel}</Text></Text>
            <Text style={styles.label}>Pain Level: <Text style={styles.value}>{props.painLevel}</Text></Text>
            <Text style={styles.label}>Symptoms: <Text style={styles.value}>{safeText(props.symptoms)}</Text></Text>
            <Text style={styles.label}>Emotions: <Text style={styles.value}>{safeText(props.emotions)}</Text></Text>
            </View>
          </View>

            <View style={styles.actionButtons}>
            <Pressable 
             onPress={() => { console.log("Deleting ID:", props._id); deleteCycle(props._id); }}
             style={[styles.button, styles.deleteButton]}
            >
              <Text style={styles.buttonText}>Delete</Text>
            </Pressable>

            <Pressable
             onPress={() => { console.log("Editing ID:", props._id); router.push(`/logging?id=${props._id}`);}}
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
    color: 'black',
    width: '100%',
    height: 240,
    margin: 10, 
    padding: 12,
    borderRadius: 12,
    elevation: 2
  },

  label: {
    fontWeight: '700', 
    color: colours.text.primary,
    marginBottom: 4
  },

  value: {
    fontWeight: '400', 
    color: colours.text.primary,
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

section: {
  marginBottom: 10,
  gap: 4,
},
});