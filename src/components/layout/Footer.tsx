import { BrandMark } from "../ui/BrandMark";
import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div className="foot-brand">
            <BrandMark gap={14} />
            <p>
              Приватные выделенные серверы в пяти нейтральных юрисдикциях. Сделано в Ереване командой из 7 человек и
              одного кота. Оплата из 76 стран, включая Россию.
            </p>
          </div>
          <div>
            <h4>Продукт</h4>
            <a href="#plans">Тарифы</a>
            <a href="#config">Конфигуратор</a>
            <a href="#locs">Локации</a>
            <a href="#">Status-страница</a>
          </div>
        </div>

        <div className="foot-legal">
          <div className="legal-entity">
            <div className="legal-company">© 2026 StrelkaVPS</div>
            <div className="legal-line">ОсОО «Жаштык Плюс»</div>
            <div className="legal-line">Кыргызская Республика, г. Бишкек, Свердловский район, ул. Фрунзе, 429</div>
            <div className="legal-line">ИНН: 02602202610044 · ОКПО: 34703842</div>
            <div className="legal-line">Рег. номер: 326031-3301-ООО · от 26.02.2026</div>
          </div>
          <nav className="legal-links">
            <a href="/terms">Условия использования</a>
            <a href="/privacy-policy">Политика конфиденциальности</a>
            <a href="/cancel">Отменить продление</a>
          </nav>
        </div>

        <div className="foot-bot">
          <span>© 2026 STRELKAVPS · ОсОО «ЖАШТЫК ПЛЮС» · BISHKEK, KG</span>
          <span>BUILD 7.1.44 · APR 23</span>
          <span>CANARY · 22 APR 2026 · OK</span>
        </div>
      </div>
    </footer>
  );
}
