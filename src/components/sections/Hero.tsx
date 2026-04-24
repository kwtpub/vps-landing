import { Button } from "../ui/Button";
import { Metrics } from "./Metrics";
import { useLiveCounter } from "../../hooks/useLiveCounter";
import "./Hero.css";

type HeroProps = {
  pingBase: number;
};

export function Hero({ pingBase }: HeroProps) {
  const counter = useLiveCounter();

  return (
    <section className="hero">
      <div className="aside-num">
        АКТИВНЫХ СЕЙЧАС
        <b>{counter}</b>
        <em>серверов / онлайн</em>
      </div>

      <div className="eyebrow">
        <span className="dot" /> Приватные VPS · NVMe · DDR5 ECC · 10 Гбит/с{" "}
        <span style={{ color: "var(--ink-4)" }}>— v7</span>
      </div>

      <h1 className="display">
        Сервер — <em>ваш.</em>
        <br />
        Никаких <span className="accent">лишних&nbsp;глаз.</span>
      </h1>

      <p className="hero-sub">
        Приватные выделенные серверы в пяти нейтральных юрисдикциях. Оплата криптой или картой, регистрация без
        документов, root и свой ISO. Мы не ведём логи панели, не отвечаем на запросы без судебного ордера страны
        размещения и не делаем вид, что это маркетинг.
      </p>

      <div className="cta-row">
        <Button variant="primary">Развернуть за 38 секунд →</Button>
        <Button variant="ghost">Собрать свою конфигурацию</Button>
        <span className="hero-note">
          от <b>890 ₽</b> / мес · <b>без KYC</b> · <b>возврат</b> в 7 дней
        </span>
      </div>

      <Metrics pingBase={pingBase} />
    </section>
  );
}
