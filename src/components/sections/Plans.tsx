import { billingTerms, formatPrice } from "../../data/plans";
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
              Простой <em>тариф</em>.<br />
              Чем дольше — тем выгоднее.
            </>
          }
          lede="Приватный VPS с выделенными ядрами, NVMe-дисками, DDR5 ECC, безлимитным трафиком и DDoS-защитой из коробки. Чем длиннее срок оплаты — тем ниже цена."
        />

        <div className="price-card">
          <div className="price-card-head">
            <div className="ptag">ПРИВАТНЫЙ VPS</div>
            <div className="pname">
              Strelka<em>.vps</em>
            </div>
            <ul className="price-specs">
              <li>
                <span>vCPU</span>2 ядра · 3.6 ГГц
              </li>
              <li>
                <span>RAM</span>4 ГБ DDR5
              </li>
              <li>
                <span>Диск</span>60 ГБ NVMe
              </li>
              <li>
                <span>Канал</span>1 Гбит/с · безлимит
              </li>
              <li>
                <span>IPv4</span>1 выделенный
              </li>
            </ul>
          </div>

          <div className="price-list">
            {billingTerms.map((t) => (
              <a key={t.id} href={`/signup?term=${t.id}`} className="price-row">
                <span className="price-months">{t.label}</span>
                <span className="price-sep">—</span>
                <span className="price-total">{formatPrice(t.totalPrice)}</span>
                {t.discountPercent ? (
                  <span className="price-badge">выгода {t.discountPercent}%</span>
                ) : null}
              </a>
            ))}
          </div>

          <div className="price-cta">
            <Button variant="primary" href="/signup">
              Оформить →
            </Button>
            <span className="price-note">без KYC · возврат в 7 дней · отменить в один клик</span>
          </div>
        </div>
      </div>
    </section>
  );
}
