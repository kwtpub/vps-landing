import { stackItems } from "../../data/stack";
import { SectionHead } from "../ui/SectionHead";
import "./Stack.css";

export function Stack() {
  return (
    <section className="stripe">
      <div className="wrap">
        <SectionHead
          num="§06   РАБОТА"
          title={
            <>
              Подключайтесь <em>одной командой.</em>
              <br />
              Или скриптом.
            </>
          }
        />

        <div className="stack">
          <div className="stack-col">
            <h4>Что в коробке</h4>
            <ul>
              {stackItems.map((it) => (
                <li key={it.name}>
                  <b>{it.name}</b>
                  <span>{it.hint}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="stack-col">
            <h4>30 секунд до подключения</h4>
            <div className="term">
              <div className="bar">
                <i className="r" />
                <i className="y" />
                <i className="g" />
              </div>
              <span className="cmt">$ # собираем сервер из команды</span>
              <br />
              $ strelka server create \<br />
              &nbsp;&nbsp;--region <span className="acc">ams</span> \<br />
              &nbsp;&nbsp;--proto <span className="acc">wireguard</span> \<br />
              &nbsp;&nbsp;--kill-switch <span className="acc">on</span> \<br />
              &nbsp;&nbsp;--multi-hop <span className="acc">zrh→ams</span>
              <br />
              <span className="cmt"># handshake… 0.8s · ключи локально</span>
              <br />
              <span className="ok">✓ подключено · ams-07 · 14мс · 948 Мбит/с</span>
              <br />
              <br />
              $ ssh root@$(strelka ip srv_4qm)
              <br />
              <span className="cur" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
