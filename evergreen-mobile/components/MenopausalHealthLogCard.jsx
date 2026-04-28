import React, {useContext} from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';
import { useRouter } from "expo-router";
import { colours } from '../theme/colours'
import { safeText } from '../utils/format';

export default function MenopausalHealthLogCard(props){
  const { deleteMenopausalHealthLog } = useContext(ReproductiveHealthContext);
  const router = useRouter();

    return(
        <View style={styles.card}>
          <View>
             <View style={styles.section}>
            <Text style={styles.label}>Hot Flash Quantity: <Text style={styles.value}>{props.hotFlashQuantity}</Text></Text>
            <Text style={styles.label}>Hot Flash Intensity Score: <Text style={styles.value}>{props.hotFlashIntensityScore}</Text></Text>
            <Text style={styles.label}>Night Sweat Quantity: <Text style={styles.value}>{props.nightSweatQuantity}</Text></Text>
            <Text style={styles.label}>Night Sweat Score: <Text style={styles.value}>{props.nightSweatScore}</Text></Text>
            <Text style={styles.label}>Symptoms: <Text style={styles.value}>{safeText(props.symptoms)}</Text></Text>
            <Text style={styles.label}>Emotions: <Text style={styles.value}>{safeText(props.emotions)}</Text></Text>
            <Text style={styles.label}>Estrogen Levels: <Text style={styles.value}>{props.estrogenLevels}</Text></Text>
            <Text style={styles.label}>Progesterone Levels: <Text style={styles.value}>{props.progesteroneLevels}</Text></Text>
            <Text style={styles.label}>FSH Levels: <Text style={styles.value}>{props.fshLevels}</Text></Text>
            </View>
          </View>
   
            <View style={styles.actionButtons}>
               <Pressable 
                  onPress={() => { deleteMenopausalHealthLog(props._id)}} 
                  style={[styles.button, styles.deleteButton]}
                  >
                  <Text style={styles.buttonText}>Delete</Text>
                </Pressable>
              
                <Pressable
                  onPress={() => { router.push(`/menopausalHealth-logging?id=${props._id}`)}}
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