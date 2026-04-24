export type BillingTerm = {
  id: "1m" | "6m" | "12m";
  /** Полный label тарифного срока (например «6 месяцев»). */
  label: string;
  months: number;
  /** Полная стоимость за весь срок, в рублях. */
  totalPrice: number;
  /** Отображаемая скидка в процентах относительно цены «1 месяц × N». */
  discountPercent?: number;
};

export const billingTerms: BillingTerm[] = [
  { id: "1m", label: "1 месяц", months: 1, totalPrice: 350 },
  { id: "6m", label: "6 месяцев", months: 6, totalPrice: 1750, discountPercent: 16 },
  { id: "12m", label: "12 месяцев", months: 12, totalPrice: 3150, discountPercent: 23 },
];

export function formatPrice(n: number): string {
  return `${n.toLocaleString("ru-RU")} ₽`;
}
