const items = [
  "Systems-Driven Agency",
  "Audit-First Approach",
  "End-to-End Execution",
  "5+ Years in Digital",
  "BD & Global Clients",
  "6 Service Lines",
  "Next.js & Flutter",
  "Supabase Infrastructure",
];

export default function TrustStrip() {
  // Duplicate for seamless marquee loop
  const doubled = [...items, ...items];

  return (
    <div className="bg-surface-card border-y border-surface-border py-5 overflow-hidden">
      <div className="flex items-center w-max marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-sm font-medium text-text-secondary whitespace-nowrap mx-6"
          >
            <span className="w-1 h-1 rounded-full bg-brand-primary flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
