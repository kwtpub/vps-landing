import { facts } from "../../data/facts";
import { SectionHead } from "../ui/SectionHead";
import "./Privacy.css";

export function Privacy() {
  return (
    <section className="stripe" id="privacy">
      <div className="wrap">
        <SectionHead
          num="§05   ПРИВАТНОСТЬ"
          title={
            <>
              Короткий <em>манифест,</em>
              <br />
              длинный послужной список.
            </>
          }
        />

        <div className="manifesto">
          <div className="doc">
            Мы не ведём логи панели, не держим теневых шеллов внутри ваших виртуалок и не передаём данные по{" "}
            <span className="u">«просьбам».</span>
            <br />
            <br />
            На судебные ордера <em>страны размещения</em> мы отвечаем ровно в рамках закона этой страны — и каждый такой
            случай попадает в публичный прозрачный отчёт в течение <span className="u">14 дней.</span>
            <br />
            <br />
            Ваш SSH-ключ <em>не покидает</em> ваше устройство. На сервере остаётся только публичная часть — мы физически
            не можем зайти в ваш root.
          </div>

          <div className="facts">
            {facts.map((f, i) => (
              <div
                key={f.n}
                className="fact"
                style={i === facts.length - 1 ? { borderBottom: 0 } : undefined}
              >
                <span className="n">{f.n}</span>
                <span className="t">{f.title}</span>
                <span className="v">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
