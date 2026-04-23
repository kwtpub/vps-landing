import { faq } from "../../data/faq";
import { SectionHead } from "../ui/SectionHead";
import "./Faq.css";

export function Faq() {
  return (
    <section className="stripe" id="faq">
      <div className="wrap">
        <SectionHead
          num="§08   ВОПРОСЫ"
          title={
            <>
              Часто <em>спрашивают.</em>
            </>
          }
        />

        <div className="faq">
          {faq.map((item, i) => (
            <details key={i} open={item.defaultOpen}>
              <summary>
                <span className="qn">{item.num}</span>
                {item.question}
              </summary>
              <div className="a">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
