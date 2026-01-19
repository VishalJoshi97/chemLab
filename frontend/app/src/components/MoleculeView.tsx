import Svg, { Circle, Line, Text as SvgText } from "react-native-svg";

type Props = {
  molecule?: string;
};

export default function MoleculeView({ molecule }: Props) {
  return (
    <Svg height={300} width={300}>
      <Circle cx={150} cy={150} r={20} fill="blue" />
      <Line x1={150} y1={150} x2={150} y2={50} stroke="black" strokeWidth={2} />
      <Circle cx={150} cy={50} r={15} fill="gray" />
      <SvgText x={120} y={280}>
        {molecule}
      </SvgText>
    </Svg>
  );
}
