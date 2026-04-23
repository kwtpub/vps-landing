export type Location = {
  code: string;
  city: string;
  flag: string;
  pingWidth: number;
  ping: string;
  status: string;
  statusLabel: string;
  offline?: boolean;
};

export const locations: Location[] = [
  { code: "NL · AMS-1", city: "Амстердам", flag: "🇳🇱", pingWidth: 14, ping: "14мс", status: "99.99%", statusLabel: "uptime" },
  { code: "FI · HEL-3", city: "Хельсинки", flag: "🇫🇮", pingWidth: 18, ping: "18мс", status: "99.99%", statusLabel: "uptime" },
  { code: "SE · ARN-2", city: "Стокгольм", flag: "🇸🇪", pingWidth: 22, ping: "22мс", status: "100%", statusLabel: "uptime" },
  { code: "CH · ZRH-1", city: "Цюрих", flag: "🇨🇭", pingWidth: 26, ping: "26мс", status: "99.98%", statusLabel: "uptime" },
  { code: "AM · EVN-1", city: "Ереван", flag: "🇦🇲", pingWidth: 34, ping: "34мс", status: "99.97%", statusLabel: "uptime" },
  { code: "IS · KEF-1", city: "Рейкьявик", flag: "🇮🇸", pingWidth: 60, ping: "60мс", status: "скоро · Q3", statusLabel: "статус", offline: true },
  { code: "GE · TBS-1", city: "Тбилиси", flag: "🇬🇪", pingWidth: 42, ping: "42мс", status: "очередь", statusLabel: "статус", offline: true },
  { code: "SG · SIN-1", city: "Сингапур", flag: "🇸🇬", pingWidth: 92, ping: "178мс", status: "99.98%", statusLabel: "uptime" },
];
