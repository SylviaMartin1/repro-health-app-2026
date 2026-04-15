import { View, Text, TextInput, Button } from "react-native";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { setPartner, getPartnerCycles } from "../api/api";

export default function PartnerScreen() {
  const { authToken } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [cycles, setCycles] = useState([]);

  const addPartner = async () => {
    await setPartner(email, authToken);
    alert("Partner added!");
  };

  useEffect(() => {
    const load = async () => {
      const data = await getPartnerCycles(authToken);
      setCycles(data);
    };

    if (authToken) load();
  }, [authToken]);

  return (
    <View style={{ padding: 20 }}>
      <Text>Add Partner</Text>

      <TextInput
        placeholder="Partner email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginVertical: 10 }}
      />

      <Button title="Add Partner" onPress={addPartner} />

      <Text style={{ marginTop: 20 }}>Partner Cycles:</Text>

      {cycles.map((c) => (
        <Text key={c._id}>{c.startDate}</Text>
      ))}
    </View>
  );
}