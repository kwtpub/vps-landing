import { features } from "../../data/features";
import { SectionHead } from "../ui/SectionHead";
import { FeatureIcon } from "../ui/FeatureIcon";
import "./Features.css";

export function Features() {
  return (
    <section className="stripe">
      <div className="wrap">
        <SectionHead
          num="§04   ЧТО ВНУТРИ"
          title={
            <>
              Технологии и <em>правила игры.</em>
            </>
          }
        />

        <div className="feats">
          {features.map((f) => (
            <div key={f.index} className="feat-cell">
              <div className="idx">{f.index}</div>
              <div className="fico">
                <FeatureIcon id={f.iconId} />
              </div>
              <h3 dangerouslySetInnerHTML={{ __html: f.titleHtml }} />
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
