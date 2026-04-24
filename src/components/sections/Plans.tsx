import { plans } from "../../data/plans";
import { SectionHead } from "../ui/SectionHead";
import { Button } from "../ui/Button";
import "./Plans.css";

export function Plans() {
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

        <div className="plans">
          {plans.map((plan) => (
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
                {plan.price}
                <em>{plan.priceUnit}</em>
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
                <Button variant={plan.ctaVariant} href={`/signup?plan=${plan.id}`}>
                  {plan.ctaLabel}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
