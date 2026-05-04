type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--cobalt)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-4xl font-black leading-[0.98] sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {copy ? <p className="mt-5 text-lg leading-8 text-black/62">{copy}</p> : null}
    </div>
  );
}
