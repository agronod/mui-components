export function getNyckeltalVarde(value: number, decimals = 0) {
  const numerOfDecimals = value < 1 && decimals === 0 ? 1 : decimals;
  if (numerOfDecimals === 0) {
    return Math.round(value);
  }
  const factor = Math.pow(10, numerOfDecimals);
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

export type NyckeltalProps = {
  enhet: string;
  nyckeltal: string;
  varde: number;
  antalDecimaler?: number;
  kommentar?: string;
};
