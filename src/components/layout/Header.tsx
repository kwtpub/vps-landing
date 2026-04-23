import { BrandMark } from "../ui/BrandMark";
import "./Header.css";

export function Header() {
  return (
    <div className="top">
      <BrandMark />
      <nav className="nav">
        <a href="#plans">Тарифы</a>
        <a href="#config">Конфигуратор</a>
        <a href="#locs">Локации</a>
        <a href="#privacy">Приватность</a>
        <a href="#faq">FAQ</a>
        <span className="status-dot">ВСЁ В НОРМЕ · 72мс</span>
        <a href="#" className="pill">
          Панель
        </a>
      </nav>
    </div>
  );
}
