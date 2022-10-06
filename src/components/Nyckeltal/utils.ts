function truncateNumberWithDecimal(
  number: number,
  numberOfDecimals: number
): number {
  let truncatedNumber = number.toString();
  truncatedNumber = truncatedNumber.slice(
    0,
    truncatedNumber.indexOf(".") + (numberOfDecimals + 1)
  );
  return Number(truncatedNumber);
}

function numberHasDecimal(number: number): boolean {
  return number % 1 !== 0;
}

export function getNyckeltalVarde(number: number): number {
  if (numberHasDecimal(number)) {
    if (number < 1) {
      return truncateNumberWithDecimal(number, 1);
    } else {
      return Math.round(number);
    }
  } else {
    return number;
  }
}

export type NyckeltalProps = {
  enhet: string;
  nyckeltal: string;
  varde: number;
};
