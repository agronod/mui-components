const numberOfDecimals = (value: number, decimals: number | undefined) => {
  if (decimals !== undefined) {
    return decimals;
  }

  if (value > 10) {
    return 0;
  } else if (value > 1) {
    return 1;
  } else {
    return 2;
  }
};

export function getNyckeltalVarde(value: number, decimals?: number) {
  const numerOfDecimals = numberOfDecimals(value, decimals);
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
