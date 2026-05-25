import { SectionHeading } from "@/components/section-heading";
import { capabilities, principles } from "@/lib/site-data";

export const metadata = {
  title: "אודות | Studio Ido",
  description: "על המעצב הפרילנסר שמאחורי Studio Ido.",
};

export default function AboutPage() {
  return (
    <main>
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
                <p className="mt-4 text-black/58">עיצוב ופיתוח אתרים, אפליקציות ומוצרים דיגיטליים שמרגישים מדויקים מהרגע הראשון.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="אודות"
            title="מעצב שהופך מוצרים דיגיטליים לחדים יותר מהמתחרים."
            copy="אני עוזר לעסקים, יזמים ומותגים להפוך רעיון דיגיטלי לאתר, אפליקציה או מערכת שנראים מקצועיים, עובדים בצורה ברורה ומרגישים נכון לקהל היעד."
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

      <section className="border-y border-[var(--line)] bg-[rgba(247,239,227,0.62)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black">יכולות</h2>
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
