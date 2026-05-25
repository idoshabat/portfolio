import { SectionHeading } from "@/components/section-heading";
import { packages, services } from "@/lib/site-data";

export const metadata = {
  title: "שירותים | Studio Ido",
  description: "דפי נחיתה, אתרי תדמית, אתרי איקומרס, מערכות ווב, אפליקציות מובייל ושדרוגים דיגיטליים.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="שירותים"
          title="כל מה שצריך כדי להפוך רעיון לנוכחות דיגיטלית שעובדת."
          copy="מדף נחיתה ממוקד ועד מערכת ווב או אפליקציית מובייל, השירותים בנויים לעסקים שרוצים נראות חזקה, חוויית משתמש ברורה וביצוע שמביא תוצאות."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="service-card bg-white/78 p-7">
              <service.icon size={30} className="text-[var(--coral)]" />
              <h2 className="section-title mt-6 text-3xl">{service.title}</h2>
              <p className="mt-3 leading-8 text-black/62">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--ink)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="חבילות" title="הצעות פשוטות מקלות על הלקוח להגיד כן." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((item) => (
              <div key={item.title} className="border border-white/18 bg-white/8 p-6">
                <h2 className="section-title text-3xl">{item.title}</h2>
                <p className="mt-3 leading-7 text-white/62">{item.description}</p>
                <ul className="mt-6 grid gap-3">
                  {item.items.map((feature) => (
                    <li key={feature} className="border-t border-white/12 pt-3 text-sm font-bold text-white/82">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
