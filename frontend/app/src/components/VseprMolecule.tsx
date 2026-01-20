type MoleculeProps = {
  central: string;
  atoms: string[];
  shape: "BENT"; //| "TRIGONAL_PLANAR" | "TETRAHEDRAL" | "BENT"
};

export default function VseprMolecule({
  central,
  atoms,
  shape,
}: MoleculeProps) {
  const center = { x: 150, y: 150 };

  const positions = {
    LINEAR: [
      { x: 50, y: 150 },
      { x: 250, y: 150 },
    ],
    TRIGONAL_PLANAR: [
      { x: 150, y: 50 },
      { x: 50, y: 220 },
      { x: 250, y: 220 },
    ],
    BENT: [
      { x: 90, y: 210 },
      { x: 210, y: 210 },
    ],
  };

  return (
    <svg width="300" height="300">
      {/* Central Atom */}
      <circle cx={center.x} cy={center.y} r="25" fill="#4f46e5" />
      <text x={center.x} y={center.y + 5} textAnchor="middle" fill="white">
        {central}
      </text>

      {/* Bonded Atoms */}
      {atoms.map((atom, i) => (
        <g key={i}>
          <line
            x1={center.x}
            y1={center.y}
            x2={positions[shape][i].x}
            y2={positions[shape][i].y}
            stroke="black"
          />
          <circle
            cx={positions[shape][i].x}
            cy={positions[shape][i].y}
            r="18"
            fill="#22c55e"
          />
          <text
            x={positions[shape][i].x}
            y={positions[shape][i].y + 5}
            textAnchor="middle"
            fill="white"
          >
            {atom}
          </text>
        </g>
      ))}
    </svg>
  );
}
