type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.24em] text-[var(--cobalt)]">
        {eyebrow}
      </p>
      <h2 className="section-title mt-3 text-4xl leading-[1.02] sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {copy ? <p className="mt-5 text-lg leading-8 text-black/62">{copy}</p> : null}
    </div>
  );
}
