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
              Разворачивайте <em>одной командой.</em>
              <br />
              Или Terraform-pipeline.
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
            <h4>38 секунд до root-доступа</h4>
            <div className="term">
              <div className="bar">
                <i className="r" />
                <i className="y" />
                <i className="g" />
              </div>
              <span className="cmt">$ # создаём выделенный сервер</span>
              <br />
              $ strelka vps create \<br />
              &nbsp;&nbsp;--region <span className="acc">ams</span> \<br />
              &nbsp;&nbsp;--image <span className="acc">debian-12</span> \<br />
              &nbsp;&nbsp;--plan <span className="acc">pro-4c-8g</span> \<br />
              &nbsp;&nbsp;--ssh-key <span className="acc">~/.ssh/id_ed25519.pub</span>
              <br />
              <span className="cmt"># provisioning… 34s · NVMe RAID1 · DDR5 ECC</span>
              <br />
              <span className="ok">✓ готово · srv_4qm · ams-07 · 94.130.12.44</span>
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
