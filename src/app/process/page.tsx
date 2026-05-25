import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/lib/site-data";

export const metadata = {
  title: "תהליך | Studio Ido",
  description: "תהליך עבודה ברור מיצירת קשר ועד עלייה לאוויר.",
};

export default function ProcessPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="תהליך"
          title="מההודעה הראשונה ועד מוצר שמוכן לצאת החוצה."
          copy="המטרה היא שתדע בכל רגע איפה הפרויקט עומד, מה השלב הבא, ומה צריך ממך כדי להתקדם בלי בלגן."
        />
        <div className="mt-16 grid gap-0">
          {processSteps.map((step, index) => (
            <article key={step.title} className="grid gap-6 border-t border-[var(--line)] py-9 md:grid-cols-[0.35fr_0.65fr]">
              <div className="flex items-center gap-5">
                <span className="grid size-14 place-items-center rounded-full bg-[var(--ink)] text-xl font-semibold text-white">
                  {index + 1}
                </span>
                <step.icon size={30} />
              </div>
              <div>
                <h2 className="section-title text-4xl">{step.title}</h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-black/64">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
