export default function Ruler({ note }: { note?: string }) {
  return (
    <div className="flex items-center gap-3 my-0">
      <span className="h-[6px] w-px bg-line" />
      <span className="flex-1 h-px bg-line" />
      {note ? (
        <span className="text-[11px] text-mutedSolid font-body shrink-0">
          {note}
        </span>
      ) : null}
      <span className="flex-1 h-px bg-line" />
      <span className="h-[6px] w-px bg-line" />
    </div>
  );
}
