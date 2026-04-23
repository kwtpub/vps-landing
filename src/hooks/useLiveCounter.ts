import { useEffect, useState } from "react";

export function useLiveCounter(base = 38_217, intervalMs = 1800) {
  const [n, setN] = useState(() => base + Math.floor(Math.random() * 120));

  useEffect(() => {
    const id = setInterval(() => {
      setN((prev) => prev + Math.floor(Math.random() * 2));
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return n.toLocaleString("ru-RU");
}
