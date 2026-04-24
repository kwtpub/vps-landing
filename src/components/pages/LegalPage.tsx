import type { ReactNode } from "react";
import { BrandMark } from "../ui/BrandMark";
import "./LegalPage.css";

export type LegalSection = {
  num: string;
  title: string;
  body: ReactNode;
};

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  updated: string;
  version: string;
  sections: LegalSection[];
  children?: ReactNode;
};

export function LegalPage({ eyebrow, title, lede, updated, version, sections, children }: Props) {
  return (
    <div className="legal-shell">
      <header className="legal-top">
        <a href="/" className="legal-brand" aria-label="На главную">
          <BrandMark />
        </a>
        <a href="/" className="legal-back">
          ← вернуться на главную
        </a>
      </header>

      <main className="legal-main">
        <div className="legal-meta">
          <div className="legal-eyebrow">
            <span className="dot" /> {eyebrow}
          </div>
          <h1 className="legal-title">{title}</h1>
          {lede && <p className="legal-lede">{lede}</p>}
          <dl className="legal-kv">
            <div>
              <dt>Обновлено</dt>
              <dd>{updated}</dd>
            </div>
            <div>
              <dt>Версия документа</dt>
              <dd>{version}</dd>
            </div>
            <div>
              <dt>Юрисдикция</dt>
              <dd>KG · Kyrgyzstan</dd>
            </div>
          </dl>
        </div>

        <div className="legal-body">
          {sections.map((s) => (
            <section key={s.num} className="legal-section" id={`s-${s.num.replace(".", "-")}`}>
              <h2>
                <span className="legal-num">§ {s.num}</span>
                {s.title}
              </h2>
              <div className="legal-prose">{s.body}</div>
            </section>
          ))}
          {children}
        </div>
      </main>

      <footer className="legal-foot">
        <div className="legal-entity">
          <div className="legal-company">© 2026 StrelkaVPS</div>
          <div className="legal-line">ОсОО «Жаштык Плюс»</div>
          <div className="legal-line">Кыргызская Республика, г. Бишкек, Свердловский район, ул. Фрунзе, 429</div>
          <div className="legal-line">ИНН: 02602202610044 · ОКПО: 34703842</div>
          <div className="legal-line">Рег. номер: 326031-3301-ООО · от 26.02.2026</div>
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
