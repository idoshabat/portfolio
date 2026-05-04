import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/lib/site-data-en";

export const metadata = {
  title: "Process | Studio Ido",
  description: "A clear design process from discovery to developer handoff.",
};

export default function EnglishProcessPage() {
  return (
    <main dir="ltr">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title="Structured enough to trust. Flexible enough for real projects."
          copy="A strong process shows clients you can lead the work. Replace the details below with your actual tools, meeting rhythm, and deliverables."
        />
        <div className="mt-16 grid gap-0">
          {processSteps.map((step, index) => (
            <article key={step.title} className="grid gap-6 border-t-2 border-[var(--ink)] py-9 md:grid-cols-[0.35fr_0.65fr]">
              <div className="flex items-center gap-5">
                <span className="grid size-14 place-items-center rounded-full bg-[var(--coral)] text-xl font-black text-white">
                  {index + 1}
                </span>
                <step.icon size={30} />
              </div>
              <div>
                <h2 className="text-4xl font-black">{step.title}</h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-black/64">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
