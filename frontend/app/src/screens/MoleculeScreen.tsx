import { View, Text } from "react-native";
import VseprMolecule from "../components/VseprMolecule";

export default function MoleculeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Water Molecule (VSEPR)
      </Text>

      <VseprMolecule central="O" atoms={["H", "H"]} shape="BENT" />
    </View>
  );
}
