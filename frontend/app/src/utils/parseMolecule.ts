export function parseMolecule(formula: string): Record<string, number> {
  const parts = formula.match(/[A-Z][a-z]*|\d+/g);

  if (!parts) return {};

  const result: Record<string, number> = {};
  let i = 0;

  while (i < parts.length) {
    const symbol = parts[i];
    const next = parts[i + 1];

    if (next && /^\d+$/.test(next)) {
      result[symbol] = parseInt(next, 10);
      i += 2;
    } else {
      result[symbol] = (result[symbol] || 0) + 1;
      i++;
    }
  }

  return result;
}
