type PatternTone = "burgundy" | "deep" | "cream";
type PatternDirection = "left" | "right" | "top" | "bottom" | "even";

type PatternLayerProps = {
  tone: PatternTone;
  from: PatternDirection;
};

const toneClasses: Record<PatternTone, string> = {
  burgundy: "pattern-on-burgundy",
  deep: "pattern-on-deep",
  cream: "pattern-on-cream",
};

const directionClasses: Record<PatternDirection, string> = {
  left: "pattern-from-left",
  right: "pattern-from-right",
  top: "pattern-from-top",
  bottom: "pattern-from-bottom",
  even: "pattern-even",
};

export default function PatternLayer({ tone, from }: PatternLayerProps) {
  return (
    <div
      className={`pattern-layer ${toneClasses[tone]} ${directionClasses[from]}`}
      aria-hidden="true"
    />
  );
}
