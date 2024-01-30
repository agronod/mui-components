import { useEffect, useRef } from "react";

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

export function round(value: number, decimals?: number) {
  const numerOfDecimals = numberOfDecimals(value, decimals);
  if (numerOfDecimals === 0) {
    return Math.round(value);
  }
  const factor = Math.pow(10, numerOfDecimals);
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

export const useDebounce = (callback: any, delay: any) => {
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...args: any) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // @ts-ignore
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};
