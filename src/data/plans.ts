export type PlanSpec = { label: string; value: string };

export type Plan = {
  id: string;
  tag: string;
  name: string;
  /** Цена за 1 месяц без скидки, в рублях. Остальные сроки считаются от неё. */
  priceMonthly: number;
  specs: PlanSpec[];
  featured?: boolean;
  badge?: string;
  ctaLabel: string;
  ctaVariant: "primary" | "ghost";
};

export type BillingTerm = {
  id: "1m" | "6m" | "12m";
  label: string;
  months: number;
  /** Множитель к цене за месяц: 1m — без скидки, 6m — -16%, 12m — -23%. */
  multiplier: number;
  /** Отображаемая скидка (используется только для 6m/12m). */
  discountPercent?: number;
};

export const billingTerms: BillingTerm[] = [
  { id: "1m", label: "1 месяц", months: 1, multiplier: 1 },
  { id: "6m", label: "6 месяцев", months: 6, multiplier: 0.84, discountPercent: 16 },
  { id: "12m", label: "12 месяцев", months: 12, multiplier: 0.77, discountPercent: 23 },
];

export function formatPrice(n: number): string {
  return `${Math.round(n).toLocaleString("ru-RU")} ₽`;
}

/** Стоимость одного месяца при выбранном сроке, округлённая до рубля. */
export function pricePerMonth(basePriceMonthly: number, term: BillingTerm): number {
  return Math.round(basePriceMonthly * term.multiplier);
}

/** Итого к оплате за весь выбранный срок. */
export function priceTotal(basePriceMonthly: number, term: BillingTerm): number {
  return pricePerMonth(basePriceMonthly, term) * term.months;
}

export const plans: Plan[] = [
  {
    id: "starter",
    tag: "Стартовый",
    name: "Одиночка",
    priceMonthly: 890,
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
    priceMonthly: 2450,
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
    priceMonthly: 5900,
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
    priceMonthly: 14800,
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
