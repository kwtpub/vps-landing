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
  { value: "WireGuard · быстро", label: "WireGuard" },
  { value: "OpenVPN · совместимо", label: "OpenVPN" },
  { value: "Shadowsocks · обфускация", label: "Shadowsocks" },
  { value: "Reality · глубокая маскировка", label: "Reality" },
  { value: "IKEv2 · iOS родной", label: "IKEv2" },
];

export const extrasChips: ExtrasChip[] = [
  { value: "Выделенный IP", label: "Выделенный IP", price: 250 },
  { value: "Multi-hop", label: "Multi-hop", price: 400 },
  { value: "Порт-форвард", label: "Порт-форвард", price: 300 },
  { value: "Статич. IPv4", label: "Статич. IPv4", price: 200 },
  { value: "DNS-фильтр", label: "DNS-фильтр", price: 150 },
];

function planName(c: number) {
  if (c <= 1) return "Один канал";
  if (c <= 5) return "Пятёрка";
  if (c <= 10) return "Десятка";
  return "Гарнизон";
}

function fmt(n: number) {
  return n.toLocaleString("ru-RU", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export function useConfigurator() {
  const [loc, setLoc] = useState(locationChips[0].value);
  const [proto, setProto] = useState(protocolChips[0].value);
  const [devices, setDevices] = useState(5);
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
    let price = 190 + devices * 80 + speed * 180;
    price = price * months * (months >= 12 ? 0.75 : 1);
    price += extraTotal;
    return {
      price,
      priceFmt: fmt(price),
      perDay: fmt(price / 30),
      planName: planName(devices),
      extrasList,
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
