interface PricingCardProps {
  name: string;
  sessions: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export default function PricingCard({
  name,
  sessions,
  price,
  features,
  recommended = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-[40px] p-7 transition-all duration-300 hover:-translate-y-3 flex flex-col ${
        recommended
          ? "bg-white border-2 border-[var(--green-olive)] shadow-xl"
          : "bg-white border border-[var(--border-soft)] hover:shadow-lg"
      }`}
    >
      {recommended && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
          <span className="bg-[var(--green-olive)] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow">
            추천 ⭐
          </span>
        </div>
      )}

      <div className="mb-6">
        <p className="text-xs font-semibold text-[var(--green-forest)] uppercase tracking-widest mb-1">
          {name}
        </p>
        <p className="text-3xl font-black text-[var(--text-main)] mb-1">{sessions}</p>
        <p className="text-xl font-bold text-[var(--green-olive)]">{price}</p>
      </div>

      <ul className="flex flex-col gap-3 flex-1 mb-7">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-[var(--text-warm)]">
            <span className="text-[var(--green-forest)] font-bold mt-0.5 flex-shrink-0">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`block text-center font-bold py-3 rounded-[40px] transition-all duration-300 text-sm ${
          recommended
            ? "bg-[var(--green-forest)] text-white hover:bg-[var(--green-olive)]"
            : "bg-[var(--bg-soft)] text-[var(--text-main)] hover:bg-[var(--bg-olive-light)]"
        }`}
      >
        상담 신청하기
      </a>
    </div>
  );
}
