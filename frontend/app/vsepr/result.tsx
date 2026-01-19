import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import MoleculeView from "../src/components/MoleculeView";
import PredictionCard from "../src/components/PredictionCard";

export default function VSEPRResult() {
  const { molecule } = useLocalSearchParams<{ molecule: string }>();

  return (
    <View style={{ padding: 20, gap: 20 }}>
      <Text style={{ fontSize: 20 }}>Result for {molecule}</Text>
      <MoleculeView molecule={molecule} />
      <PredictionCard
        data={{
          geometry: "Pending",
          polarity: "Pending",
          hybridization: "Pending",
        }}
      />
    </View>
  );
}
