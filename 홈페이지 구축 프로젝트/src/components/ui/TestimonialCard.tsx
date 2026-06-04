interface TestimonialCardProps {
  name: string;
  duration: string;
  goal: string;
  quote: string;
}

export default function TestimonialCard({ name, duration, goal, quote }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-[40px] p-6 border border-[var(--border-soft)] shadow-sm flex flex-col gap-4">
      <div className="text-[var(--green-forest)] text-lg tracking-widest">★★★★★</div>
      <p className="text-sm text-[var(--text-warm)] leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="pt-4 border-t border-[var(--border-soft)]">
        <p className="text-sm font-bold text-[var(--text-main)]">{name}</p>
        <p className="text-xs text-[var(--text-muted)] mt-0.5">
          {duration} · {goal}
        </p>
      </div>
    </div>
  );
}
