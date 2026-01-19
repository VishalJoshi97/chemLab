import { View, TextInput, Button } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function VSEPRInput() {
  const [molecule, setMolecule] = useState<string>("");

  return (
    <View style={{ padding: 20, gap: 20 }}>
      <TextInput
        placeholder="Enter molecule (H2O, NH3)"
        value={molecule}
        onChangeText={setMolecule}
        style={{ borderWidth: 1, padding: 10 }}
      />

      <Button
        title="Predict"
        onPress={() =>
          router.push({ pathname: "/vsepr/result", params: { molecule } })
        }
      />
    </View>
  );
}
