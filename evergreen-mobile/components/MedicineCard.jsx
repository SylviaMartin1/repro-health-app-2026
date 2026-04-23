import React, {useContext} from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { ReproductiveHealthContext } from '../contexts/ReproductiveHealthContext';
import { useRouter } from "expo-router";
import { colours } from '../theme/colours';

export default function MedicineCard(props){
  const { deleteMedicine } = useContext(ReproductiveHealthContext);
  const router = useRouter();

    return(
        <View style={styles.card}>
            <Text style={styles.label}>Name: <Text style={styles.value}>{props.name}</Text></Text>
            <Text style={styles.label}>Dosage: <Text style={styles.value}>{props.dosage} ml</Text></Text>
            <Text style={styles.label}>Frequency: <Text style={styles.value}>{props.frequency}</Text></Text>

            <View style={styles.actionButtons}>
              <Pressable 
                onPress={() => { deleteMedicine(props._id)}}
                style={[styles.button, styles.deleteButton]}
                >
                <Text style={styles.buttonText}>Delete</Text>
              </Pressable>
                            
             <Pressable
              onPress={() => { router.push(`/medicine-logging?id=${props._id}`)}}
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