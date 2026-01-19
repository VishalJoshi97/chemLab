import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function MOTTab() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Molecular Orbital Theory</Text>
      <Button title="Start" onPress={() => router.push("/mot/input")} />
    </View>
  );
}
