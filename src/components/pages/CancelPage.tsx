import { useState } from "react";
import { BrandMark } from "../ui/BrandMark";
import { Button } from "../ui/Button";
import "./CancelPage.css";

type Status = "idle" | "loading" | "sent";

export function CancelPage() {
  const [email, setEmail] = useState("");
  const [contract, setContract] = useState("");
  const [reason, setReason] = useState("price");
  const [status, setStatus] = useState<Status>("idle");

  function submit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <div className="cancel-shell">
      <header className="cancel-top">
        <a href="/" className="cancel-brand" aria-label="На главную">
          <BrandMark />
        </a>
        <a href="/" className="cancel-back">
          ← вернуться на главную
        </a>
      </header>

      <main className="cancel-main">
        <div className="cancel-card">
          <div className="cancel-eyebrow">
            <span className="dot" /> СЕРВИС · ОТМЕНА АВТОПРОДЛЕНИЯ
          </div>

          <h1 className="cancel-title">
            Отменить <em>продление.</em>
          </h1>

          <p className="cancel-lede">
            Оплаченный период дорабатывается полностью — данные, снапшоты и IP-адреса остаются с вами до последней
            секунды тарифа. Неиспользованная предоплата возвращается пропорционально в течение 7 рабочих дней.
          </p>

          {status === "sent" ? (
            <div className="cancel-success">
              <div className="cancel-success-mark">✓</div>
              <h2>Заявка принята</h2>
              <p>
                Мы отправили письмо с подтверждением на <b>{email || "указанный e-mail"}</b>. Автопродление остановится
                в конце текущего расчётного периода. Если передумаете — одна кнопка в панели вернёт всё на место.
              </p>
              <div className="cancel-ref">ТИКЕТ · CN-{Math.floor(Math.random() * 90000 + 10000)}</div>
              <Button variant="ghost" href="/" style={{ width: "100%" }}>
                На главную
              </Button>
            </div>
          ) : (
            <form className="cancel-form" onSubmit={submit}>
              <label className="cancel-field">
                <span className="cancel-label">E-MAIL АККАУНТА</span>
                <input
                  className="cancel-input"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </label>

              <label className="cancel-field">
                <span className="cancel-label">НОМЕР ДОГОВОРА / ИНВОЙСА</span>
                <input
                  className="cancel-input"
                  type="text"
                  required
                  value={contract}
                  onChange={(e) => setContract(e.target.value)}
                  placeholder="STRLK-0000-0000"
                  autoComplete="off"
                  spellCheck={false}
                />
              </label>

              <fieldset className="cancel-radio-group">
                <legend className="cancel-label">ПРИЧИНА (не обязательно)</legend>
                {[
                  { v: "price", l: "Слишком дорого" },
                  { v: "unused", l: "Больше не нужен проект" },
                  { v: "alt", l: "Перехожу к другому провайдеру" },
                  { v: "quality", l: "Не устроило качество" },
                  { v: "other", l: "Другое" },
                ].map((r) => (
                  <label key={r.v} className="cancel-radio">
                    <input
                      type="radio"
                      name="reason"
                      value={r.v}
                      checked={reason === r.v}
                      onChange={() => setReason(r.v)}
                    />
                    <span>{r.l}</span>
                  </label>
                ))}
              </fieldset>

              <div className="cancel-actions">
                <Button variant="primary" type="submit" disabled={status === "loading"} style={{ width: "100%" }}>
                  {status === "loading" ? "Отправляем…" : "Отменить продление →"}
                </Button>
                <Button variant="ghost" href="/" style={{ width: "100%" }}>
                  Я передумал, оставить
                </Button>
              </div>
            </form>
          )}

          <ul className="cancel-meta">
            <li>
              <span>Сохранить данные</span>
              <b>до конца периода</b>
            </li>
            <li>
              <span>Возврат остатка</span>
              <b>до 7 раб. дней</b>
            </li>
            <li>
              <span>Поддержка</span>
              <b>cancel@strelkavps.io</b>
            </li>
          </ul>

          <div className="cancel-note">
            Отмена по этой форме касается только автоматического продления: активный сервер продолжит работать до конца
            уже оплаченного срока. Для немедленного удаления виртуалки используйте команду{" "}
            <code>strelka vps destroy &lt;id&gt;</code> в CLI или кнопку в панели.
          </div>
        </div>
      </main>

      <footer className="cancel-foot">
        <div className="legal-entity">
          <div className="legal-company">© 2026 StrelkaVPS</div>
          <div className="legal-line">ОсОО «Жаштык Плюс»</div>
          <div className="legal-line">Кыргызская Республика, г. Бишкек, Свердловский район, ул. Фрунзе, 429</div>
          <div className="legal-line">ИНН: 02602202610044 · ОКПО: 34703842</div>
        </div>
        <nav className="legal-foot-links">
          <a href="/terms">Публичная оферта</a>
          <a href="/privacy-policy">Политика конфиденциальности</a>
          <a href="/personal-data-consent">Согласие на обработку данных</a>
          <a href="/cancel">Отменить продление</a>
        </nav>
      </footer>
    </div>
  );
}
