export default function CornerMarks({
  label,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  const corner = (rotate: number, style: React.CSSProperties) => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      style={{ ...style, transform: `rotate(${rotate}deg)` }}
      className="absolute text-accent"
    >
      <path
        d="M1 1V8M1 1H8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </svg>
  );

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      {corner(0, { top: -1, left: -1 })}
      {corner(90, { top: -1, right: -1 })}
      {corner(270, { bottom: -1, left: -1 })}
      {corner(180, { bottom: -1, right: -1 })}
      {label ? (
        <span className="absolute -top-7 left-0 text-[11px] tracking-wide text-mutedSolid font-body">
          {label}
        </span>
      ) : null}
    </div>
  );
}
