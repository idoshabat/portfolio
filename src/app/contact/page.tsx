import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { contactReasons } from "@/lib/site-data";

export const metadata = {
  title: "צור קשר | Studio Ido",
  description: "מתחילים פרויקט עיצוב אתר או אפליקציה.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="צור קשר"
            title="ספרו לי מה אתם בונים. אני אביא את החדות."
            copy="לפני פרסום האתר, החלף את האימייל, הקישורים והיעד של הטופס בפרטי העסק האמיתיים שלך."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {contactReasons.map((reason) => (
              <div key={reason.label} className="flex items-center gap-3 rounded-[8px] border border-[var(--line)] bg-white/62 p-4">
                <reason.icon size={20} className="text-[var(--coral)]" />
                <span className="font-black">{reason.label}</span>
              </div>
            ))}
          </div>
        </div>

        <form className="rounded-[8px] border-2 border-[var(--ink)] bg-white p-5 shadow-[12px_12px_0_#171513]">
          <div className="grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-black">שם</span>
              <input className="rounded-[8px] border border-[var(--line)] bg-[var(--paper)] px-4 py-3 outline-none transition focus:border-[var(--cobalt)] focus:shadow-[0_0_0_3px_rgba(0,109,119,0.16)]" placeholder="השם שלך" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-black">אימייל</span>
              <input type="email" className="rounded-[8px] border border-[var(--line)] bg-[var(--paper)] px-4 py-3 outline-none transition focus:border-[var(--cobalt)] focus:shadow-[0_0_0_3px_rgba(0,109,119,0.16)]" placeholder="you@example.com" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-black">סוג פרויקט</span>
              <select className="rounded-[8px] border border-[var(--line)] bg-[var(--paper)] px-4 py-3 outline-none transition focus:border-[var(--cobalt)] focus:shadow-[0_0_0_3px_rgba(0,109,119,0.16)]">
                <option>עיצוב אתר</option>
                <option>עיצוב אפליקציית מובייל</option>
                <option>עיצוב מערכת ווב</option>
                <option>אודיט UX</option>
                <option>שותף עיצוב מתמשך</option>
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-black">תקציב</span>
              <select className="rounded-[8px] border border-[var(--line)] bg-[var(--paper)] px-4 py-3 outline-none transition focus:border-[var(--cobalt)] focus:shadow-[0_0_0_3px_rgba(0,109,119,0.16)]">
                <option>$1k - $3k</option>
                <option>$3k - $6k</option>
                <option>$6k - $10k</option>
                <option>$10k+</option>
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-black">מה צריך לעצב?</span>
              <textarea className="min-h-36 rounded-[8px] border border-[var(--line)] bg-[var(--paper)] px-4 py-3 outline-none transition focus:border-[var(--cobalt)] focus:shadow-[0_0_0_3px_rgba(0,109,119,0.16)]" placeholder="ספרו על העסק, הדדליין והמטרות." />
            </label>
            <button className="magnetic-button inline-flex items-center justify-center gap-2 rounded-full bg-[var(--coral)] px-6 py-4 text-sm font-black text-white shadow-[0_8px_0_#171513] transition hover:-translate-y-0.5" type="button">
              שליחת בריף
              <ArrowUpRight size={18} />
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
