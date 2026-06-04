interface BlogCardProps {
  category: string;
  title: string;
  icon: string;
  bgColor: string;
  description: string;
}

export default function BlogCard({ category, title, icon, bgColor, description }: BlogCardProps) {
  return (
    <div className="group bg-white rounded-[40px] overflow-hidden border border-[var(--border-soft)] hover:shadow-lg transition-all duration-300 hover:-translate-y-2 flex flex-col">
      {/* Icon area */}
      <div
        className="h-36 flex items-center justify-center text-5xl"
        style={{ backgroundColor: bgColor }}
      >
        {icon}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="text-xs font-semibold text-[var(--green-forest)] uppercase tracking-widest mb-2">
          {category}
        </span>
        <h3 className="text-base font-bold text-[var(--text-main)] leading-snug mb-3">{title}</h3>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed flex-1">{description}</p>
        <div className="mt-4">
          <span className="text-xs font-semibold text-[var(--green-olive)] group-hover:underline">
            자세히 보기 →
          </span>
        </div>
      </div>
    </div>
  );
}
