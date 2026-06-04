interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-[40px] p-6 border border-[var(--border-soft)] hover:shadow-lg transition-all duration-300 hover:-translate-y-[5px]">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-base font-bold text-[var(--text-main)] mb-3">{title}</h3>
      <p className="text-sm text-[var(--text-muted)] leading-relaxed">{description}</p>
    </div>
  );
}
