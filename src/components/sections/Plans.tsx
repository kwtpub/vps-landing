import { useState } from "react";
import { billingTerms, formatPrice, plans, pricePerMonth, priceTotal, type BillingTerm } from "../../data/plans";
import { SectionHead } from "../ui/SectionHead";
import { Button } from "../ui/Button";
import "./Plans.css";

export function Plans() {
  const [termId, setTermId] = useState<BillingTerm["id"]>("1m");
  const term = billingTerms.find((t) => t.id === termId) ?? billingTerms[0];

  return (
    <section className="stripe" id="plans">
      <div className="wrap">
        <SectionHead
          num="§01   ТАРИФЫ"
          title={
            <>
              Четыре <em>формата</em>.<br />
              Ни одного лишнего пункта.
            </>
          }
          lede="Все тарифы — выделенные ядра, NVMe, DDR5 ECC, безлимитный трафик и DDoS-щит из коробки. Разница только в размере флота и пропускной способности."
        />

        <div className="term-switch" role="tablist" aria-label="Срок оплаты">
          {billingTerms.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={t.id === termId}
              className={`term-tab${t.id === termId ? " on" : ""}`}
              onClick={() => setTermId(t.id)}
            >
              <span className="term-label">{t.label}</span>
              {t.discountPercent ? (
                <span className="term-discount">выгода {t.discountPercent}%</span>
              ) : (
                <span className="term-discount muted">без скидки</span>
              )}
            </button>
          ))}
        </div>

        <div className="plans">
          {plans.map((plan) => {
            const perMonth = pricePerMonth(plan.priceMonthly, term);
            const total = priceTotal(plan.priceMonthly, term);
            const showTotal = term.months > 1;

            return (
              <div key={plan.id} className={`plan${plan.featured ? " feat" : ""}`}>
                {plan.badge && <span className="plabel">{plan.badge}</span>}
                <div>
                  <div className="ptag">{plan.tag}</div>
                  <div className="pname">
                    {plan.name}
                    <em>.</em>
                  </div>
                </div>
                <div className="pprice">
                  {formatPrice(perMonth)}
                  <em>/мес</em>
                </div>
                <div className="psub">
                  {showTotal ? (
                    <>
                      <b>{formatPrice(total)}</b> за {term.months} мес
                      {term.discountPercent && <span className="psub-tag"> · −{term.discountPercent}%</span>}
                    </>
                  ) : (
                    <>оплата помесячно · автопродление</>
                  )}
                </div>
                <ul className="specs">
                  {plan.specs.map((spec) => (
                    <li key={spec.label}>
                      <span>{spec.label}</span>
                      {spec.value}
                    </li>
                  ))}
                </ul>
                <div className="pbtn">
                  <Button
                    variant={plan.ctaVariant}
                    href={`/signup?plan=${plan.id}&term=${term.id}`}
                  >
                    {plan.ctaLabel}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
