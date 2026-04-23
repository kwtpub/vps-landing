import { locations } from "../../data/locations";
import { SectionHead } from "../ui/SectionHead";
import "./Locations.css";

export function Locations() {
  return (
    <section className="stripe" id="locs">
      <div className="wrap">
        <SectionHead
          num="§03   ЛОКАЦИИ"
          title={
            <>
              Пять <em>нейтральных</em> юрисдикций.
              <br />
              Никаких пяти глаз.
            </>
          }
          lede={
            <>
              Мы сознательно не работаем в странах альянса «Five Eyes», «Nine Eyes» и «14 Eyes». Каждая локация —
              собственный юридический контур, арендованная стойка, физический доступ по журналу.
            </>
          }
        />

        <div className="locs-grid">
          {locations.map((loc) => (
            <div key={loc.code} className={`loc${loc.offline ? " ooos" : ""}`}>
              <div className="lc">
                {loc.code} &nbsp; <span className="lflag">{loc.flag}</span>
              </div>
              <div className="lname">
                {loc.city}
                <em>.</em>
              </div>
              <div className="ping-bar">
                <span style={{ width: `${loc.pingWidth}%` }} />
              </div>
              <div className="lmeta">
                <span>
                  пинг <b>{loc.ping}</b>
                </span>
                <span>
                  {loc.statusLabel} <b>{loc.status}</b>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
