export function predictVSEPR(formula: string) {
  const centralAtom = formula[0].toUpperCase(); // naive, backend fixes later

  const mapping: Record<string, any> = {
    CH4: "tetrahedral",
    NH3: "trigonal pyramidal",
    H2O: "bent",
    CO2: "linear",
    BF3: "trigonal planar",
  };

  return mapping[formula.toUpperCase()] || "linear";
}
