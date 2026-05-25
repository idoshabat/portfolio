import { SectionHeading } from "@/components/section-heading";
import { packages, services } from "@/lib/site-data-en";

export const metadata = {
  title: "Services | Studio Ido",
  description: "Landing pages, business websites, e-commerce websites, web platforms, mobile apps, and digital redesigns.",
};

export default function EnglishServicesPage() {
  return (
    <main dir="ltr">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Everything needed to turn an idea into a digital presence that works."
          copy="From a focused landing page to a web platform or mobile app, these services are built for businesses that need strong visuals, clear UX, and execution that performs."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="service-card rounded-[8px] border-2 border-[var(--ink)] bg-white/78 p-7 shadow-[8px_8px_0_#171513]">
              <service.icon size={30} className="text-[var(--coral)]" />
              <h2 className="mt-6 text-3xl font-black">{service.title}</h2>
              <p className="mt-3 leading-8 text-black/62">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="border-y border-[var(--line)] bg-[var(--ink)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Packages" title="Simple offers make it easier to say yes." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((item) => (
              <div key={item.title} className="rounded-[8px] border border-white/18 bg-white/8 p-6">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--mint)]">{item.price}</p>
                <h2 className="mt-4 text-3xl font-black">{item.title}</h2>
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
