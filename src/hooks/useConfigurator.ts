import { useMemo, useState } from "react";

export type LocationChip = { value: string; label: string; pingBase: number };
export type ProtocolChip = { value: string; label: string };
export type ExtrasChip = { value: string; label: string; price: number };

export const locationChips: LocationChip[] = [
  { value: "Амстердам · NL", label: "AMS", pingBase: 14 },
  { value: "Хельсинки · FI", label: "HEL", pingBase: 18 },
  { value: "Стокгольм · SE", label: "ARN", pingBase: 22 },
  { value: "Цюрих · CH", label: "ZRH", pingBase: 26 },
  { value: "Ереван · AM", label: "EVN", pingBase: 34 },
];

export const protocolChips: ProtocolChip[] = [
  { value: "Debian 12 · минимум", label: "Debian 12" },
  { value: "Ubuntu 24.04 LTS", label: "Ubuntu 24.04" },
  { value: "Rocky Linux 9", label: "Rocky 9" },
  { value: "Alpine 3.20 · лёгкий", label: "Alpine" },
  { value: "NixOS 24.11 · decl.", label: "NixOS" },
  { value: "Windows Server 2022", label: "Windows" },
];

export const extrasChips: ExtrasChip[] = [
  { value: "Доп. IPv4", label: "Доп. IPv4", price: 250 },
  { value: "Бэкапы 14 дн", label: "Бэкапы 14 дн", price: 400 },
  { value: "Мониторинг", label: "Мониторинг 24/7", price: 300 },
  { value: "Rescue ISO", label: "Rescue ISO", price: 0 },
  { value: "DDoS L7", label: "DDoS L7", price: 600 },
];

function planName(c: number) {
  if (c <= 2) return "Одиночка";
  if (c <= 4) return "Пятёрка";
  if (c <= 8) return "Десятка";
  return "Гарнизон";
}

function fmt(n: number) {
  return n.toLocaleString("ru-RU", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export function useConfigurator() {
  const [loc, setLoc] = useState(locationChips[0].value);
  const [proto, setProto] = useState(protocolChips[0].value);
  const [devices, setDevices] = useState(4);
  const [speed, setSpeed] = useState(1);
  const [months, setMonths] = useState(1);
  const [extras, setExtras] = useState<Set<string>>(new Set());

  const toggleExtra = (value: string) => {
    setExtras((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  };

  const computed = useMemo(() => {
    const extrasList = extrasChips.filter((e) => extras.has(e.value));
    const extraTotal = extrasList.reduce((a, b) => a + b.price, 0);
    const baseMonthly = 490 + devices * 280 + speed * 320;
    const multiplier = months >= 12 ? 0.77 : months >= 6 ? 0.84 : 1;
    const discountPercent = months >= 12 ? 23 : months >= 6 ? 16 : 0;
    const perMonth = baseMonthly * multiplier;
    const price = perMonth * months + extraTotal;
    return {
      price,
      priceFmt: fmt(price),
      perMonthFmt: fmt(perMonth),
      perDay: fmt(price / 30),
      planName: planName(devices),
      extrasList,
      discountPercent,
    };
  }, [devices, speed, months, extras]);

  const pingBase = useMemo(() => {
    return locationChips.find((l) => l.value === loc)?.pingBase ?? 14;
  }, [loc]);

  return {
    state: { loc, proto, devices, speed, months, extras },
    set: { setLoc, setProto, setDevices, setSpeed, setMonths, toggleExtra },
    computed,
    pingBase,
  };
}

export type ConfiguratorApi = ReturnType<typeof useConfigurator>;
