import Svg, { Line, Text } from "react-native-svg";

export default function MOTDiagram() {
  return (
    <Svg height={300} width={300}>
      <Line x1={50} y1={50} x2={250} y2={50} stroke="black" />
      <Text x={260} y={55}>
        σ2s
      </Text>

      <Line x1={50} y1={100} x2={250} y2={100} stroke="black" />
      <Text x={260} y={105}>
        σ*2s
      </Text>

      <Line x1={50} y1={150} x2={250} y2={150} stroke="black" />
      <Text x={260} y={155}>
        π2p
      </Text>

      <Line x1={50} y1={200} x2={250} y2={200} stroke="black" />
      <Text x={260} y={205}>
        σ2p
      </Text>
    </Svg>
  );
}
