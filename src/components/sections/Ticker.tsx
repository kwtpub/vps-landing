import { tickerItems } from "../../data/ticker";
import "./Ticker.css";

export function Ticker() {
  const rendered = (
    <>
      {tickerItems.map((item, i) => (
        <span key={i} dangerouslySetInnerHTML={{ __html: item }} />
      ))}
      <span>◆</span>
    </>
  );

  return (
    <div className="ticker">
      <div className="ticker-track">
        {rendered}
        {rendered}
      </div>
    </div>
  );
}
