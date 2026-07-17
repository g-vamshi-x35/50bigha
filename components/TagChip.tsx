export default function TagChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gold/25 bg-gold/5 px-3.5 py-1.5 font-body text-[11px] uppercase tracking-[0.12em] text-gold-light">
      {label}
    </span>
  );
}
