import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function VSEPRTab() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>VSEPR Theory</Text>
      <Button title="Start" onPress={() => router.push("/vsepr/input")} />
    </View>
  );
}
