import { View } from 'react-native';
import LogCard from '../components/LogCard';
import { colours } from '../theme/colours';


export default function Dashboard() {   

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 16, backgroundColor: colours.background.default }}>
        <LogCard
          date="2026-01-31"
          symptoms="cramps, headaches, fatigue"
          />  
    </View>
  );
}