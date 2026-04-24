import "./BrandMark.css";

export function BrandMark({ gap = 12 }: { gap?: number }) {
  return (
    <div className="brand" style={{ gap }}>
      <div className="brand-mark" aria-hidden="true" />
      <div className="brand-name">
        Strelka<em>&nbsp;/vps</em>
      </div>
    </div>
  );
}
