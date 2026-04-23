export type PlanSpec = { label: string; value: string };

export type Plan = {
  id: string;
  tag: string;
  name: string;
  price: string;
  priceUnit: string;
  specs: PlanSpec[];
  featured?: boolean;
  badge?: string;
  ctaLabel: string;
  ctaVariant: "primary" | "ghost";
};

export const plans: Plan[] = [
  {
    id: "personal",
    tag: "Личный",
    name: "Один канал",
    price: "390 ₽",
    priceUnit: "/мес",
    specs: [
      { label: "Устр-ва", value: "1 устройство" },
      { label: "Локации", value: "5 стран, 12 городов" },
      { label: "Скорость", value: "до 200 Мбит/с" },
      { label: "Протоколы", value: "WireGuard, OpenVPN" },
      { label: "Трафик", value: "без лимита" },
    ],
    ctaLabel: "Взять",
    ctaVariant: "ghost",
  },
  {
    id: "family",
    tag: "Для семьи",
    name: "Пятёрка",
    price: "980 ₽",
    priceUnit: "/мес",
    featured: true,
    badge: "Популярный",
    specs: [
      { label: "Устр-ва", value: "5 устройств" },
      { label: "Локации", value: "все 14 городов" },
      { label: "Скорость", value: "до 1 Гбит/с" },
      { label: "Протоколы", value: "WG, OVPN, Shadowsocks" },
      { label: "Трафик", value: "без лимита" },
      { label: "Kill-switch", value: "на уровне ОС" },
    ],
    ctaLabel: "Взять →",
    ctaVariant: "primary",
  },
  {
    id: "ten",
    tag: "Расширенный",
    name: "Десятка",
    price: "2 250 ₽",
    priceUnit: "/мес",
    specs: [
      { label: "Устр-ва", value: "10 устройств" },
      { label: "Локации", value: "все + multi-hop" },
      { label: "Скорость", value: "до 2,5 Гбит/с" },
      { label: "Протоколы", value: "WG, OVPN, SS, Reality" },
      { label: "IP", value: "выделенный IPv4" },
      { label: "Порт-форвард", value: "до 3 портов" },
    ],
    ctaLabel: "Взять",
    ctaVariant: "ghost",
  },
  {
    id: "team",
    tag: "Команде",
    name: "Гарнизон",
    price: "5 800 ₽",
    priceUnit: "/мес",
    specs: [
      { label: "Устр-ва", value: "безлимит" },
      { label: "Локации", value: "все + свой узел" },
      { label: "Скорость", value: "до 10 Гбит/с" },
      { label: "Протоколы", value: "все + кастомные" },
      { label: "IP", value: "статический IPv4 + /64" },
      { label: "SLA", value: "99.99 · приоритет" },
    ],
    ctaLabel: "Взять",
    ctaVariant: "ghost",
  },
];
