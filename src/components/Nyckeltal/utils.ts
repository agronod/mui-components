export function getNyckeltalVarde(value?: number, decimals = 0) {
  if (!value) {
    return 0;
  }
  if (decimals === 0) {
    return Math.round(value);
  }
  const factor = Math.pow(10, decimals);
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

export type NyckeltalProps = {
  enhet: string;
  nyckeltal: string;
  varde: number;
  antalDecimaler?: number;
  kommentar?: string;
};
