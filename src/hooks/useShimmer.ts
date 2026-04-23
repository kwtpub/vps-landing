import { useEffect, useState } from "react";

export function useShimmerValue(base: number, intervalMs = 2200) {
  const [value, setValue] = useState(base);

  useEffect(() => {
    setValue(base);
    const id = setInterval(() => {
      const jitter = Math.round(Math.random() * 2 - 1);
      setValue(base + jitter);
    }, intervalMs);
    return () => clearInterval(id);
  }, [base, intervalMs]);

  return value;
}

export function useDeploySec(intervalMs = 2800) {
  const [sec, setSec] = useState(38);

  useEffect(() => {
    const id = setInterval(() => {
      setSec(36 + Math.floor(Math.random() * 6));
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return sec;
}
