import { View, Text } from "react-native";

type Props = {
  data: Record<string, string>;
};

export default function PredictionCard({ data }: Props) {
  return (
    <View style={{ borderWidth: 1, padding: 15, borderRadius: 10 }}>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>Predictions</Text>
      {Object.entries(data).map(([k, v]) => (
        <Text key={k}>
          {k}: {v}
        </Text>
      ))}
    </View>
  );
}
