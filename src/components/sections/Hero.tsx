import { Button } from "../ui/Button";
import { Metrics } from "./Metrics";
import { useLiveCounter } from "../../hooks/useLiveCounter";
import "./Hero.css";

export function Hero() {
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

      <p className="hero-tagline">
        Быстрые и стабильные VPS-серверы для приватной сети. Разверни проект прямо сейчас.
      </p>

      <div className="cta-row">
        <Button variant="primary" href="/signup">
          Развернуть за 38 секунд →
        </Button>
        <Button variant="ghost" href="#plans">
          Посмотреть тарифы
        </Button>
        <span className="hero-note">
          от <b>350 ₽</b> / мес · <b>без KYC</b> · <b>возврат</b> в 7 дней
        </span>
      </div>

      <Metrics pingBase={14} />
    </section>
  );
}
