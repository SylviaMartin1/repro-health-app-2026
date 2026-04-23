import { View, Text, Button } from "react-native";
import { useRouter} from "expo-router";
import { colours } from "../../theme/colours";
import { AuthContext } from '../../contexts/authContext';
import { useContext } from 'react';

export default function Profile() {
  const router = useRouter();
  const { signout} = useContext(AuthContext);

  const handleSignOut = async () => {
    await signout();     
    router.push('/'); 
  };

  return (
    <View style={{ padding: 20, backgroundColor: colours.background.default }}>
      <Button title="Partner Screen" onPress={() => router.push("/partner")}/>
      <Button title="Sign Out" onPress={handleSignOut} color="red" />
    </View>
  );
}