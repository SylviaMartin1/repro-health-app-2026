import React, {useContext} from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';
import { useRouter } from "expo-router";
import { colours } from '../theme/colours'

export default function LifeStyleLogCard(props){
  const { deleteLifeStyleLog } = useContext(ReproductiveHealthContext);
  const router = useRouter();

    return(
        <View style={styles.card}>
          <View>
            <View style={styles.section}>
            <Text style={styles.label}>Sleep: <Text style={styles.value}>{props.sleepHours}</Text></Text>
            <Text style={styles.label}>Exercise: <Text style={styles.value}>{props.exerciseMins}</Text></Text>
            <Text style={styles.label}>Water Intake Level: <Text style={styles.value}>{props.waterIntakeLevel}</Text></Text>
            <Text style={styles.label}>Stress Level: <Text style={styles.value}>{props.stressLevel}</Text></Text>
            <Text style={styles.label}>Diet Quality: <Text style={styles.value}>{props.dietQuality}</Text></Text>
            <Text style={styles.label}>Mood: <Text style={styles.value}>{props.mood}</Text></Text>
            </View>
            </View>

          
            <View style={styles.actionButtons}>
              <Pressable 
                onPress={() => { console.log("Deleting ID:", props._id); deleteLifeStyleLog(props._id)}}
                style={[styles.button, styles.deleteButton]}
                >
                <Text style={styles.buttonText}>Delete</Text>
              </Pressable>
              
              <Pressable
                onPress={() => { console.log("Editing ID:", props._id); router.push(`/lifeStyle-logging?id=${props._id}`)}}
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