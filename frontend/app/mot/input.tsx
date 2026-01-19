import { View, TextInput, Button } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function MOTInput() {
  const [a1, setA1] = useState<string>("");
  const [a2, setA2] = useState<string>("");

  return (
    <View style={{ padding: 20, gap: 20 }}>
      <TextInput placeholder="Atom 1" value={a1} onChangeText={setA1} />
      <TextInput placeholder="Atom 2" value={a2} onChangeText={setA2} />

      <Button title="Generate" onPress={() => router.push("/mot/diagram")} />
    </View>
  );
}
