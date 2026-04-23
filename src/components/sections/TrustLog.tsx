import { trustLog } from "../../data/trustLog";
import { SectionHead } from "../ui/SectionHead";
import "./TrustLog.css";

export function TrustLog() {
  return (
    <section className="stripe">
      <div className="wrap">
        <SectionHead
          num="§07   ПРОЗРАЧНОСТЬ"
          title={
            <>
              Журнал событий <em>инфраструктуры</em>.
            </>
          }
          lede="Всё, что мы делаем с узлами сети — в открытом логе. Маскировки и «спец-режимов» не бывает."
        />

        <div className="trust">
          {trustLog.map((row, i) => (
            <div
              key={i}
              className={`trust-row${row.tag !== "OK" ? " warn" : ""}`}
            >
              <span className="ts">{row.ts}</span>
              <span className="msg" dangerouslySetInnerHTML={{ __html: row.msgHtml }} />
              <span className="tag">{row.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
