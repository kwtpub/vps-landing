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
    id: "starter",
    tag: "Стартовый",
    name: "Одиночка",
    price: "890 ₽",
    priceUnit: "/мес",
    specs: [
      { label: "vCPU", value: "2 ядра · 3.6 ГГц" },
      { label: "RAM", value: "4 ГБ DDR5" },
      { label: "Диск", value: "60 ГБ NVMe" },
      { label: "Канал", value: "1 Гбит/с · безлимит" },
      { label: "IPv4", value: "1 выделенный" },
    ],
    ctaLabel: "Взять",
    ctaVariant: "ghost",
  },
  {
    id: "pro",
    tag: "Рабочий",
    name: "Пятёрка",
    price: "2 450 ₽",
    priceUnit: "/мес",
    featured: true,
    badge: "Популярный",
    specs: [
      { label: "vCPU", value: "4 ядра · выделенные" },
      { label: "RAM", value: "8 ГБ DDR5 ECC" },
      { label: "Диск", value: "200 ГБ NVMe RAID1" },
      { label: "Канал", value: "2,5 Гбит/с · безлимит" },
      { label: "IPv4", value: "1 + /64 IPv6" },
      { label: "Бэкап", value: "ежедневный, 7 копий" },
    ],
    ctaLabel: "Взять →",
    ctaVariant: "primary",
  },
  {
    id: "power",
    tag: "Продакшн",
    name: "Десятка",
    price: "5 900 ₽",
    priceUnit: "/мес",
    specs: [
      { label: "vCPU", value: "8 ядер Ryzen 9" },
      { label: "RAM", value: "16 ГБ DDR5 ECC" },
      { label: "Диск", value: "500 ГБ NVMe RAID1" },
      { label: "Канал", value: "5 Гбит/с · безлимит" },
      { label: "IPv4", value: "1 + /64 IPv6" },
      { label: "DDoS", value: "480 Гбит/с, всегда" },
    ],
    ctaLabel: "Взять",
    ctaVariant: "ghost",
  },
  {
    id: "fleet",
    tag: "Команде",
    name: "Гарнизон",
    price: "14 800 ₽",
    priceUnit: "/мес",
    specs: [
      { label: "CPU", value: "EPYC · 16 ядер Bare-Metal" },
      { label: "RAM", value: "64 ГБ DDR5 ECC" },
      { label: "Диск", value: "2 ТБ NVMe RAID10" },
      { label: "Канал", value: "10 Гбит/с · безлимит" },
      { label: "IPv4", value: "/29 · 5 адресов" },
      { label: "SLA", value: "99.99 · компенсация 1:1" },
    ],
    ctaLabel: "Взять",
    ctaVariant: "ghost",
  },
];
