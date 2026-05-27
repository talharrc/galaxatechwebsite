interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-4 ${centered ? "text-center items-center" : ""}`}>
      {eyebrow && (
        <span className="section-label">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${
          light ? "text-white" : "text-text-primary"
        }`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p
          className={`text-base lg:text-lg leading-relaxed font-normal max-w-2xl ${
            light ? "text-white/70" : "text-text-secondary"
          } ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
