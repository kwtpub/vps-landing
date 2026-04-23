import { SectionHead } from "../ui/SectionHead";
import { Button } from "../ui/Button";
import { locationChips, protocolChips, extrasChips, type ConfiguratorApi } from "../../hooks/useConfigurator";
import "./Configurator.css";

function labelWithEm(value: string) {
  const [main, rest] = value.split(" · ");
  return (
    <>
      {main}
      {rest && (
        <em>
          {" · "}
          {rest}
        </em>
      )}
    </>
  );
}

export function Configurator({ api }: { api: ConfiguratorApi }) {
  const { state, set, computed } = api;

  const extrasText = (() => {
    const arr = extrasChips.filter((e) => state.extras.has(e.value));
    if (arr.length === 0) return <em>не выбрано</em>;
    return arr.map((e) => e.label).join(" · ");
  })();

  const sumRows = [
    { k: "Локация", v: state.loc },
    { k: "Протокол", v: state.proto },
    { k: "Устройств", v: `${state.devices}` },
    { k: "Скорость", v: `${state.speed} Гбит/с` },
    { k: "Срок", v: `${state.months} мес` },
    { k: "Трафик", v: "без лимита" },
    ...computed.extrasList.map((e) => ({ k: "+ " + e.label, v: `+${e.price.toLocaleString("ru-RU")} ₽` })),
  ];

  return (
    <section className="stripe" id="config">
      <div className="wrap">
        <SectionHead
          num="§02   КОНФИГУРАТОР"
          title={
            <>
              Или соберите <em>по своей мерке.</em>
            </>
          }
          lede="Все ресурсы масштабируются независимо, оплата посекундная. Перенос с тарифа в свою конфигурацию — без простоя."
        />

        <div className="config">
          <div className="cfg-left">
            <div className="cfg-row">
              <div className="clabel">
                <span className="k">Локация</span>
                <span className="v">{labelWithEm(state.loc)}</span>
              </div>
              <div className="chips">
                {locationChips.map((c) => (
                  <button
                    key={c.value}
                    className={`chip${state.loc === c.value ? " on" : ""}`}
                    onClick={() => set.setLoc(c.value)}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="cfg-row">
              <div className="clabel">
                <span className="k">Устройств</span>
                <span className="v">
                  {state.devices}
                  <em> устройства</em>
                </span>
              </div>
              <div className="slider-row">
                <input
                  className="slider"
                  type="range"
                  min={1}
                  max={20}
                  step={1}
                  value={state.devices}
                  onChange={(e) => set.setDevices(+e.target.value)}
                />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-3)", textAlign: "right" }}>
                  {state.devices}/20
                </span>
              </div>
              <div className="ticks">
                <span>1</span>
                <span>5</span>
                <span>10</span>
                <span>15</span>
                <span>20</span>
              </div>
            </div>

            <div className="cfg-row">
              <div className="clabel">
                <span className="k">Скорость · Гбит/с</span>
                <span className="v">
                  {state.speed}
                  <em> Гбит/с</em>
                </span>
              </div>
              <div className="slider-row">
                <input
                  className="slider"
                  type="range"
                  min={1}
                  max={10}
                  step={1}
                  value={state.speed}
                  onChange={(e) => set.setSpeed(+e.target.value)}
                />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-3)", textAlign: "right" }}>
                  {state.speed}/10
                </span>
              </div>
              <div className="ticks">
                <span>1</span>
                <span>4</span>
                <span>7</span>
                <span>10</span>
              </div>
            </div>

            <div className="cfg-row">
              <div className="clabel">
                <span className="k">Срок оплаты</span>
                <span className="v">
                  {state.months}
                  <em> {state.months === 1 ? "месяц" : "мес"}</em>
                </span>
              </div>
              <div className="slider-row">
                <input
                  className="slider"
                  type="range"
                  min={1}
                  max={24}
                  step={1}
                  value={state.months}
                  onChange={(e) => set.setMonths(+e.target.value)}
                />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-3)", textAlign: "right" }}>
                  {state.months}/24
                </span>
              </div>
              <div className="ticks">
                <span>1</span>
                <span>6</span>
                <span>12</span>
                <span>24</span>
              </div>
            </div>

            <div className="cfg-row">
              <div className="clabel">
                <span className="k">Протокол</span>
                <span className="v">{labelWithEm(state.proto)}</span>
              </div>
              <div className="chips">
                {protocolChips.map((c) => (
                  <button
                    key={c.value}
                    className={`chip${state.proto === c.value ? " on" : ""}`}
                    onClick={() => set.setProto(c.value)}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="cfg-row" style={{ marginBottom: 0 }}>
              <div className="clabel">
                <span className="k">Дополнительно</span>
                <span className="v">{extrasText}</span>
              </div>
              <div className="chips">
                {extrasChips.map((c) => (
                  <button
                    key={c.value}
                    className={`chip${state.extras.has(c.value) ? " on" : ""}`}
                    onClick={() => set.toggleExtra(c.value)}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="cfg-right">
            <div className="sum-head">Итоговая конфигурация</div>
            <div className="sum-title">
              {computed.planName}
              <em>
                {" · "}
                {state.devices} устр · {state.speed} Гбит/с · {state.months} мес
              </em>
            </div>
            <div className="sum-big">
              {computed.priceFmt}
              <em>₽ / мес</em>
            </div>
            <div className="sum-sub">
              ≈ {computed.perDay} ₽ в день · автопродление
            </div>
            <ul className="sum-list">
              {sumRows.map((r, i) => (
                <li key={i}>
                  <span>{r.k}</span>
                  <b>{r.v}</b>
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Button variant="primary" style={{ width: "100%", justifyContent: "center" }}>
                Оформить →
              </Button>
              <Button variant="ghost" style={{ width: "100%", justifyContent: "center" }}>
                Поделиться конфигурацией
              </Button>
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--ink-4)",
                letterSpacing: "0.04em",
                marginTop: 18,
              }}
            >
              * цены указаны за выбранный срок. Оплата: BTC, Lightning, XMR, СБП, карта РФ/мир.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
