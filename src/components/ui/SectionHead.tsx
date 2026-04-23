import type { ReactNode } from "react";

type Props = {
  num: string;
  title: ReactNode;
  lede?: ReactNode;
};

export function SectionHead({ num, title, lede }: Props) {
  return (
    <div className="sec-head">
      <div className="num">{num}</div>
      <div>
        <h2>{title}</h2>
        {lede && (
          <p className="lede" style={{ gridColumn: "auto" }}>
            {lede}
          </p>
        )}
      </div>
    </div>
  );
}
