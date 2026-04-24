import { useState } from "react";
import { Button } from "../ui/Button";
import { BrandMark } from "../ui/BrandMark";
import "./Signup.css";

export function Signup() {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setTimeout(() => {
      setLoading(false);
      setError(
        code.trim().length === 0
          ? "Введите код приглашения."
          : "Код не распознан. Приглашения выдаются точечно — напишите нам по PGP.",
      );
    }, 700);
  }

  return (
    <div className="signup-shell">
      <header className="signup-top">
        <a href="/" className="signup-brand" aria-label="На главную">
          <BrandMark />
        </a>
        <a href="/" className="signup-back">
          ← вернуться на главную
        </a>
      </header>

      <main className="signup-main">
        <div className="signup-card">
          <div className="signup-eyebrow">
            <span className="dot" /> РЕГИСТРАЦИЯ · ЗАКРЫТА · v7
          </div>

          <h1 className="signup-title">
            Сейчас — <em>только по приглашениям.</em>
          </h1>

          <p className="signup-lede">
            Открытый набор клиентов поставлен на паузу: мы добираем мощности в AMS-1 и HEL-3, а до этого принимаем только
            тех, у кого есть инвайт от действующего пользователя или партнёра.
          </p>

          <form className="signup-form" onSubmit={onSubmit}>
            <label className="signup-field">
              <span className="signup-label">КОД ПРИГЛАШЕНИЯ</span>
              <input
                className="signup-input"
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="STRLK-XXXX-XXXX-XXXX"
                autoComplete="off"
                spellCheck={false}
              />
            </label>

            {error && <div className="signup-error">{error}</div>}

            <div className="signup-actions">
              <Button variant="primary" type="submit" disabled={loading} style={{ width: "100%" }}>
                {loading ? "Проверяем…" : "Войти по инвайту →"}
              </Button>
              <Button variant="ghost" href="/" style={{ width: "100%" }}>
                Я без приглашения
              </Button>
            </div>
          </form>

          <ul className="signup-meta">
            <li>
              <span>Очередь</span>
              <b>~ 14 дней</b>
            </li>
            <li>
              <span>Выдано в апреле</span>
              <b>214 инвайтов</b>
            </li>
            <li>
              <span>Для партнёров</span>
              <b>PGP · связь</b>
            </li>
          </ul>

          <div className="signup-note">
            Если у вас уже есть договор с нами, панель по-прежнему доступна по прямой ссылке —{" "}
            <a href="#">panel.strelkavps.io</a>. Эта форма только для первичной регистрации.
          </div>
        </div>
      </main>

      <footer className="signup-foot">
        <span>© 2026 STRELKAVPS OÜ · TALLINN / YEREVAN</span>
        <span>CANARY · 22 APR 2026 · OK</span>
      </footer>
    </div>
  );
}
