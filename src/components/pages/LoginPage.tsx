import { useState } from "react";
import { Button } from "../ui/Button";
import { BrandMark } from "../ui/BrandMark";
import "./LoginPage.css";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !password) {
      setError("Введите e-mail и пароль.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setError("Пользователь с такими данными не найден. Проверьте e-mail и пароль или создайте новый аккаунт.");
    }, 900);
  }

  return (
    <div className="login-shell">
      <header className="login-top">
        <a href="/" className="login-brand" aria-label="На главную">
          <BrandMark />
        </a>
        <a href="/" className="login-back">
          ← вернуться на главную
        </a>
      </header>

      <main className="login-main">
        <div className="login-card">
          <div className="login-eyebrow">
            <span className="dot" /> ВХОД В ПАНЕЛЬ · v7
          </div>

          <h1 className="login-title">
            Войти в <em>аккаунт.</em>
          </h1>

          <p className="login-lede">
            Введите e-mail и пароль, указанные при регистрации. Если забыли пароль — восстановление по ссылке на почту
            занимает до 30 секунд.
          </p>

          <form className="login-form" onSubmit={onSubmit} noValidate>
            <label className="login-field">
              <span className="login-label">E-MAIL</span>
              <input
                className="login-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                spellCheck={false}
              />
            </label>

            <label className="login-field">
              <span className="login-label">
                ПАРОЛЬ
                <a href="#" className="login-forgot" onClick={(e) => e.preventDefault()}>
                  забыли?
                </a>
              </span>
              <input
                className="login-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••"
                autoComplete="current-password"
              />
            </label>

            {error && (
              <div className="login-error" role="alert">
                {error}
              </div>
            )}

            <div className="login-actions">
              <Button variant="primary" type="submit" disabled={loading} style={{ width: "100%" }}>
                {loading ? "Проверяем…" : "Войти →"}
              </Button>
              <Button variant="ghost" href="/signup" style={{ width: "100%" }}>
                Создать новый аккаунт
              </Button>
            </div>
          </form>

          <div className="login-note">
            Проблемы со входом? Напишите в поддержку по PGP или на{" "}
            <a href="mailto:support@strelkavps.io">support@strelkavps.io</a> — отвечаем в течение 30 минут.
          </div>
        </div>
      </main>

      <footer className="login-foot">
        <span>© 2026 STRELKAVPS · ОсОО «ЖАШТЫК ПЛЮС» · BISHKEK, KG</span>
        <span>CANARY · 22 APR 2026 · OK</span>
      </footer>
    </div>
  );
}
