import type { Feature } from "../../data/features";

const common = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
};

export function FeatureIcon({ id }: { id: Feature["iconId"] }) {
  switch (id) {
    case "server":
      return (
        <svg {...common}>
          <rect x={3} y={4} width={18} height={16} rx={1} />
          <path d="M7 9h10M7 13h10M7 17h6" />
        </svg>
      );
    case "lines":
      return (
        <svg {...common}>
          <path d="M3 6h18M3 12h18M3 18h18" />
          <circle cx={7} cy={6} r={1.2} />
          <circle cx={7} cy={12} r={1.2} />
          <circle cx={7} cy={18} r={1.2} />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l8 4v6c0 5-4 7-8 8-4-1-8-3-8-8V7l8-4z" />
        </svg>
      );
    case "coin":
      return (
        <svg {...common}>
          <path d="M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm4 0h8M12 8v8" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path d="M4 7l8 5 8-5M4 7v10l8 5 8-5V7M4 7l8-5 8 5" />
        </svg>
      );
    case "pulse":
      return (
        <svg {...common}>
          <path d="M3 12h4l3-8 4 16 3-8h4" />
        </svg>
      );
  }
}
