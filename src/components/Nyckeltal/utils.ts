import { round } from "../utils";

export function getNyckeltalVarde(value: number, decimals?: number) {
  return round(value, decimals);
}

export type NyckeltalProps = {
  enhet: string;
  nyckeltal: string;
  varde: number;
  antalDecimaler?: number;
  kommentar?: string;
};
