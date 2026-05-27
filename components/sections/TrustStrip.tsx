const items = [
  "Systems-Driven Agency",
  "Audit-First Approach",
  "End-to-End Execution",
  "5+ Years in Digital",
  "BD & Global Clients",
  "6 Service Lines",
];

export default function TrustStrip() {
  return (
    <div className="bg-brand-offwhite border-y border-gray-100 py-4 overflow-hidden">
      <div className="flex items-center gap-8 px-6 flex-wrap justify-center lg:justify-start">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-3 text-sm font-medium text-brand-gray whitespace-nowrap">
            {i > 0 && <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/30 hidden sm:block" />}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
