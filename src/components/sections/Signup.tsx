import { useState } from "react";
import { Button } from "../ui/Button";
import { BrandMark } from "../ui/BrandMark";
import "./Signup.css";

export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !password) {
      setError("Заполните все поля.");
      return;
    }
    if (password.length < 10) {
      setError("Пароль должен содержать минимум 10 символов.");
      return;
    }
    if (password !== passwordConfirm) {
      setError("Пароли не совпадают.");
      return;
    }
    if (!agree) {
      setError("Чтобы зарегистрироваться, подтвердите согласие с офертой.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setError(
        "Регистрация временно недоступна. Мы расширяем инфраструктуру и откроем приём заявок после завершения работ. Приносим извинения за неудобство.",
      );
    }, 900);
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
            <span className="dot" /> РЕГИСТРАЦИЯ · 30 СЕКУНД
          </div>

          <h1 className="signup-title">
            Создать <em>аккаунт.</em>
          </h1>

          <p className="signup-lede">
            Без KYC, без паспорта, без селфи. Нужны только e-mail и пароль — для входа в панель и приёма инвойсов.
            Всё остальное вы настроите уже внутри.
          </p>

          <form className="signup-form" onSubmit={onSubmit} noValidate>
            <label className="signup-field">
              <span className="signup-label">ИМЯ ИЛИ НИК</span>
              <input
                className="signup-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Как к вам обращаться"
                autoComplete="name"
                spellCheck={false}
              />
            </label>

            <label className="signup-field">
              <span className="signup-label">E-MAIL</span>
              <input
                className="signup-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                spellCheck={false}
              />
            </label>

            <div className="signup-row-2">
              <label className="signup-field">
                <span className="signup-label">ПАРОЛЬ · ≥ 10 СИМВОЛОВ</span>
                <input
                  className="signup-input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  autoComplete="new-password"
                />
              </label>

              <label className="signup-field">
                <span className="signup-label">ПОВТОРИТЕ ПАРОЛЬ</span>
                <input
                  className="signup-input"
                  type="password"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  placeholder="••••••••••"
                  autoComplete="new-password"
                />
              </label>
            </div>

            <label className="signup-check">
              <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
              <span>
                Соглашаюсь с <a href="/terms">офертой</a> и{" "}
                <a href="/privacy-policy">политикой конфиденциальности</a>.
              </span>
            </label>

            {error && (
              <div className="signup-error" role="alert">
                {error}
              </div>
            )}

            <div className="signup-actions">
              <Button variant="primary" type="submit" disabled={loading} style={{ width: "100%" }}>
                {loading ? "Создаём аккаунт…" : "Зарегистрироваться →"}
              </Button>
              <Button variant="ghost" href="/" style={{ width: "100%" }}>
                Я уже зарегистрирован
              </Button>
            </div>
          </form>

          <ul className="signup-meta">
            <li>
              <span>Провижининг</span>
              <b>~ 38 секунд</b>
            </li>
            <li>
              <span>Без документов</span>
              <b>и без KYC</b>
            </li>
            <li>
              <span>Возврат средств</span>
              <b>7 дней</b>
            </li>
          </ul>

          <div className="signup-note">
            Уже пользуетесь StrelkaVPS? Панель доступна по прямой ссылке —{" "}
            <a href="#">panel.strelkavps.io</a>. Эта форма только для создания нового аккаунта.
          </div>
        </div>
      </main>

      <footer className="signup-foot">
        <span>© 2026 STRELKAVPS · ОсОО «ЖАШТЫК ПЛЮС» · BISHKEK, KG</span>
        <span>CANARY · 22 APR 2026 · OK</span>
      </footer>
    </div>
  );
}
