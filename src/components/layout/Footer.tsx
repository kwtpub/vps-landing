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
          <div>
            <h4>Для разработчиков</h4>
            <a href="#">CLI · Strelka</a>
            <a href="#">Terraform</a>
            <a href="#">OpenAPI 3.1</a>
            <a href="#">Webhooks</a>
          </div>
          <div>
            <h4>Компания</h4>
            <a href="#privacy">Приватность</a>
            <a href="#">Warrant canary</a>
            <a href="#">AUP</a>
            <a href="#">PGP · связь</a>
          </div>
        </div>
        <div className="foot-bot">
          <span>© 2026 STRELKAVPS OÜ · TALLINN / YEREVAN</span>
          <span>BUILD 7.1.44 · APR 23</span>
          <span>CANARY · 22 APR 2026 · OK</span>
        </div>
      </div>
    </footer>
  );
}
