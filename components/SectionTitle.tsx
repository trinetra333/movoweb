export default function SectionTitle({
  title,
  subtitle,
  badge,
  className = "",
}: {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}) {
  return (
    <div className={`mb-14 text-center ${className}`}>
      {badge && (
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
          {badge}
        </span>
      )}
      <h2
        className="mt-4 text-4xl font-black md:text-5xl"
        style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-gray-500">{subtitle}</p>
      )}
    </div>
  );
}
