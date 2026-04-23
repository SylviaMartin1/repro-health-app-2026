import { View, Text, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colours } from '../theme/colours';

export default function SectionHeader({ title, onPress }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
          color: colours.text.primary,
        }}
      >
        {title}
      </Text>

      <Pressable
        onPress={onPress}
        style={{
            marginLeft: 6,
            backgroundColor: colours.accent.main,
            width: 24,
            height: 24,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
  }}
>
  <MaterialIcons name="add" size={16} color="white" />
</Pressable>
    </View>
  );
}