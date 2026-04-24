import { useEffect, useState } from "react";
import { BrandMark } from "../ui/BrandMark";
import "./Header.css";

const links = [
  { href: "#plans", label: "Тарифы" },
  { href: "#config", label: "Конфигуратор" },
  { href: "#locs", label: "Локации" },
  { href: "#privacy", label: "Приватность" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="top">
        <BrandMark />
        <nav className="nav nav-desktop">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <span className="status-dot">ВСЁ В НОРМЕ · 72мс</span>
          <a href="/signup" className="pill">
            Панель
          </a>
        </nav>
        <button
          className="burger"
          aria-label="Меню"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="drawer" role="dialog" aria-modal="true">
          <nav className="drawer-nav">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="/signup" className="pill" onClick={() => setOpen(false)}>
              Панель
            </a>
            <span className="status-dot">ВСЁ В НОРМЕ · 72мс</span>
          </nav>
        </div>
      )}
    </>
  );
}
