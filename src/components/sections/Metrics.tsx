import { useShimmerValue, useDeploySec } from "../../hooks/useShimmer";
import "./Metrics.css";

export function Metrics({ pingBase }: { pingBase: number }) {
  const ping = useShimmerValue(pingBase);
  const deploySec = useDeploySec();

  return (
    <div className="metrics">
      <div className="metric">
        <div className="k">Аптайм, 90 дней</div>
        <div className="v">
          99,997<em>%</em>
        </div>
        <div className="sub">1 событие · 42 секунды · Амстердам / AM-2</div>
        <svg className="spark" viewBox="0 0 200 28" preserveAspectRatio="none">
          <path
            className="fill"
            d="M0,22 L10,20 L22,18 L34,19 L48,15 L62,17 L78,12 L92,14 L108,9 L124,11 L140,6 L156,8 L174,5 L188,7 L200,4 L200,28 L0,28 Z"
          />
          <path d="M0,22 L10,20 L22,18 L34,19 L48,15 L62,17 L78,12 L92,14 L108,9 L124,11 L140,6 L156,8 L174,5 L188,7 L200,4" />
        </svg>
      </div>
      <div className="metric">
        <div className="k">Пинг до узла</div>
        <div className="v">
          {ping}
          <em>мс</em>
        </div>
        <div className="sub">ближайший: Хельсинки</div>
      </div>
      <div className="metric">
        <div className="k">Готовность сервера</div>
        <div className="v">
          00:{deploySec}
          <em>c</em>
        </div>
        <div className="sub">от оплаты до root-доступа</div>
      </div>
      <div className="metric">
        <div className="k">DDoS фильтр</div>
        <div className="v">
          480<em>Гбит/с</em>
        </div>
        <div className="sub">L3/L4/L7, всегда включён</div>
      </div>
    </div>
  );
}
