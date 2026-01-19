import { View, Text } from "react-native";
import MOTDiagram from "../src/components/MOTDiagram";

export default function MOTDiagramScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Molecular Orbital Diagram</Text>
      <MOTDiagram />
    </View>
  );
}
