import { SectionHeading } from "@/components/section-heading";
import { capabilities, principles } from "@/lib/site-data-en";

export const metadata = {
  title: "About | Studio Ido",
  description: "About the freelance web and mobile app designer behind Studio Ido.",
};

export default function EnglishAboutPage() {
  return (
    <main dir="ltr">
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="border border-[var(--line)] bg-white/54 p-5 shadow-[0_28px_70px_rgba(27,23,19,0.14)]">
          <div className="aspect-[4/5] bg-[var(--paper)] p-6">
            <div className="flex h-full flex-col justify-between">
              <div className="grid grid-cols-2 gap-3">
                <span className="h-28 bg-[var(--sun)]" />
                <span className="h-28 bg-[var(--coral)]" />
                <span className="h-28 bg-[var(--mint)]" />
                <span className="h-28 bg-[var(--ink)]" />
              </div>
              <div>
                <p className="section-title text-6xl leading-none">Studio Ido</p>
                <p className="mt-4 text-black/58">Design and development for websites, apps, and digital products that feel precise from the first interaction.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="About"
            title="A designer who makes digital products feel sharper than the competition."
            copy="I help businesses, founders, and brands turn digital ideas into websites, apps, and platforms that look professional, work clearly, and feel right for the people using them."
          />
          <div className="mt-10 grid gap-5">
            {principles.map((principle) => (
              <div key={principle.title} className="border-l-4 border-[var(--cobalt)] bg-white/60 p-5">
                <principle.icon size={24} />
                <h2 className="section-title mt-4 text-2xl">{principle.title}</h2>
                <p className="mt-2 leading-7 text-black/62">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-[var(--line)] bg-[rgba(247,239,227,0.62)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="section-title text-3xl">Capabilities</h2>
          <div className="mt-7 flex flex-wrap gap-3">
            {capabilities.map((item) => (
              <span key={item} className="rounded-full border border-[var(--line)] bg-white/78 px-4 py-2 text-sm font-semibold">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
