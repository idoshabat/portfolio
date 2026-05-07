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
        <div className="rounded-[8px] border-2 border-[var(--ink)] bg-[var(--cobalt)] p-5 shadow-[12px_12px_0_#171513]">
          <div className="aspect-[4/5] rounded-[8px] bg-[var(--paper)] p-6">
            <div className="flex h-full flex-col justify-between">
              <div className="grid grid-cols-2 gap-3">
                <span className="h-28 rounded-[8px] bg-[var(--sun)]" />
                <span className="h-28 rounded-[8px] bg-[var(--coral)]" />
                <span className="h-28 rounded-[8px] bg-[var(--mint)]" />
                <span className="h-28 rounded-[8px] bg-[var(--ink)]" />
              </div>
              <div>
                <p className="text-6xl font-black leading-none">Studio Ido</p>
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
                <h2 className="mt-4 text-2xl font-black">{principle.title}</h2>
                <p className="mt-2 leading-7 text-black/62">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-[var(--line)] bg-white/48">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black">Capabilities</h2>
          <div className="mt-7 flex flex-wrap gap-3">
            {capabilities.map((item) => (
              <span key={item} className="rounded-full border-2 border-[var(--ink)] bg-white px-4 py-2 text-sm font-black">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
