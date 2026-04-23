import { View, Text, TextInput, Button } from "react-native";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { setPartner, getPartnerCycles } from "../api/api";
import { colours } from "../theme/colours";

export default function PartnerScreen() {
  const { authToken } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [cycles, setCycles] = useState([]);
  const handleAddPartner = async () => {
    await setPartner(email, authToken);
    alert("Partner added");
  };

  const loadPartnerCycles = async () => {
    const data = await getPartnerCycles(authToken);
    setCycles(data);
  };

  useEffect(() => {
    if (!authToken) return;
    loadPartnerCycles();
  }, [authToken]);

  return (
    <View style={{ padding: 20, backgroundColor: colours.background.default, flex: 1}}>
      <Text>Add Partner</Text>

      <TextInput
        placeholder="Partner email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginVertical: 10 }}
      />

      <Button title="Add Partner" onPress={handleAddPartner} />

      <Text style={{ marginTop: 20 }}>Partner Data</Text>

  {cycles.length === 0 ? (
  <Text>No partner cycles available yet</Text>
) : (
  cycles.map((c) => (
    <View key={c._id}>
      <Text>Start: {c.startDate}</Text>
      <Text>End: {c.endDate}</Text>
      <Text>Symptoms: {c.symptoms?.join(", ")}</Text>
    </View>
  ))
)}
    </View>
  );
}