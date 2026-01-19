import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", gap: 20, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        ChemLab Predictor
      </Text>

      <Button
        title="VSEPR Predictor"
        onPress={() => router.push("/vsepr/input")}
      />
      <Button title="MOT Predictor" onPress={() => router.push("/mot/input")} />
    </View>
  );
}
