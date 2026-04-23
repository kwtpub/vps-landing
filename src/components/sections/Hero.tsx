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
        <em>туннелей / онлайн</em>
      </div>

      <div className="eyebrow">
        <span className="dot" /> Приватный VPN · WireGuard · OpenVPN · Reality{" "}
        <span style={{ color: "var(--ink-4)" }}>— v7</span>
      </div>

      <h1 className="display">
        Туннель — <em>ваш.</em>
        <br />
        Никаких <span className="accent">лишних&nbsp;глаз.</span>
      </h1>

      <p className="hero-sub">
        Приватный VPN в пяти нейтральных юрисдикциях. Оплата криптой или картой, регистрация без документов, собственные
        ключи шифрования. Мы не ведём логи, не отвечаем на запросы без судебного ордера страны размещения и не делаем
        вид, что это маркетинг.
      </p>

      <div className="cta-row">
        <Button variant="primary">Подключить за 38 секунд →</Button>
        <Button variant="ghost">Собрать свой тариф</Button>
        <span className="hero-note">
          от <b>390 ₽</b> / мес · <b>без KYC</b> · <b>возврат</b> в 7 дней
        </span>
      </div>

      <Metrics pingBase={pingBase} />
    </section>
  );
}
