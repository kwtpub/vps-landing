import { Button } from "../ui/Button";
import "./FinalCta.css";

export function FinalCta() {
  return (
    <section className="stripe">
      <div className="wrap">
        <div className="cta-final">
          <div>
            <h3>
              От оплаты
              <br />
              до подключения — <em>38 секунд.</em>
            </h3>
            <p>
              Попробуйте Strelka на самом маленьком тарифе за 390 ₽. Не понравится — вернём деньги в течение 7 дней, без
              вопросов и форм.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
            <Button variant="accent" style={{ padding: "16px 26px", fontSize: 15 }}>
              Подключить первое устройство →
            </Button>
            <Button variant="ghost" style={{ padding: "14px 22px" }}>
              Открыть документацию
            </Button>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--ink-4)",
                letterSpacing: "0.06em",
                marginTop: 8,
              }}
            >
              Бонус: −20% на первый месяц при оплате криптой
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
