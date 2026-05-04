import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Play, Sparkles } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  capabilities,
  principles,
  processSteps,
  proofPoints,
  projects,
  services,
} from "@/lib/site-data";

export default function Home() {
  return (
    <main>
      <section className="overflow-hidden border-b border-[var(--line)]">
        <div className="mx-auto grid min-h-[calc(100vh-74px)] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.03fr_0.97fr] lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/70 px-3 py-2 text-sm font-bold">
              <Sparkles size={16} className="text-[var(--coral)]" />
              פרילנסר לעיצוב אתרים ואפליקציות
            </div>
            <h1 className="mt-7 max-w-4xl text-6xl font-black leading-[0.88] sm:text-7xl lg:text-8xl">
              מוצרים דיגיטליים עם טעם, נוכחות וסיבה אמיתית להתקיים.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/64 sm:text-xl">
              אני מעצב אתרים, אפליקציות ומערכות מוצר שעוזרות לעסקים שאפתניים להיראות אמינים, להרגיש פרימיום ולהפוך תשומת לב לפעולה.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="magnetic-button inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ink)] px-6 py-4 text-sm font-black text-white shadow-[0_10px_0_var(--coral)] transition hover:-translate-y-0.5"
              >
                קבעו שיחת פרויקט
                <ArrowUpRight size={18} />
              </Link>
              <Link
                href="/work"
                className="magnetic-button inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--ink)] bg-white px-6 py-4 text-sm font-black transition hover:bg-[var(--mint)]"
              >
                לראות עבודות
                <ArrowLeft size={18} />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[560px]">
            <div className="float-stack absolute left-2 top-4 z-10 w-[72%] rotate-[-5deg] rounded-[8px] border-2 border-[var(--ink)] bg-white p-4 shadow-[14px_14px_0_#171513]">
              <div className="h-7 rounded-full bg-[var(--ink)]" />
              <div className="mt-4 grid grid-cols-[0.8fr_1.2fr] gap-3">
                <span className="h-52 rounded-[8px] bg-[var(--cobalt)]" />
                <span className="h-52 rounded-[8px] bg-[var(--sun)]" />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3">
                <span className="h-20 rounded-[8px] bg-[var(--coral)]" />
                <span className="h-20 rounded-[8px] bg-[var(--mint)]" />
                <span className="h-20 rounded-[8px] bg-[var(--ink)]" />
              </div>
            </div>
            <div className="float-stack-alt absolute bottom-8 right-0 z-20 w-[62%] rotate-[4deg] rounded-[32px] border-2 border-[var(--ink)] bg-[var(--ink)] p-3 shadow-[12px_12px_0_var(--coral)]">
              <div className="overflow-hidden rounded-[24px] bg-[var(--paper)] p-4">
                <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-black/20" />
                <div className="rounded-[18px] bg-[var(--cobalt)] p-4 text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-[0.16em]">App flow</span>
                    <Play size={18} />
                  </div>
                  <p className="mt-12 text-3xl font-black leading-none">ממשק מוכן להשקה</p>
                </div>
                <div className="mt-4 grid gap-3">
                  <span className="h-16 rounded-[14px] bg-white shadow-sm" />
                  <span className="h-16 rounded-[14px] bg-[var(--sun)]" />
                  <span className="h-16 rounded-[14px] bg-white shadow-sm" />
                </div>
              </div>
            </div>
            <div className="pulse-chip absolute bottom-0 left-0 rounded-full border-2 border-[var(--ink)] bg-[var(--mint)] px-5 py-4 text-sm font-black shadow-[8px_8px_0_#171513]">
              אסטרטגיה + UX + UI
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-[var(--line)] bg-[var(--ink)] py-5 text-white">
        <div className="marquee flex w-[200%] gap-6 whitespace-nowrap text-2xl font-black uppercase tracking-[0.08em]">
          {[...capabilities, ...capabilities].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-6">
              {item}
              <span className="text-[var(--coral)]">+</span>
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <ScrollReveal className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="שירותים"
            title="עיצוב לחלקים שקובעים אם לקוח סומך עליכם."
            copy="מהרעיון הראשון ועד המסך הרספונסיבי האחרון, אני עוזר להפוך את הממשק לברור, שימושי וקשה להתעלם ממנו."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="service-card rounded-[8px] border-2 border-[var(--ink)] bg-white/76 p-6 shadow-[6px_6px_0_#171513]">
                <service.icon className="text-[var(--coral)]" size={28} />
                <h3 className="mt-6 text-2xl font-black">{service.title}</h3>
                <p className="mt-3 leading-7 text-black/62">{service.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="border-y border-[var(--line)] bg-white/42 py-20">
        <ScrollReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="עבודות נבחרות"
              title="פרויקטים שמראים גם חשיבה עסקית וגם ביצוע ויזואלי."
            />
            <Link href="/work" className="inline-flex items-center gap-2 font-black text-[var(--cobalt)]">
              לכל הפרויקטים
              <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <ScrollReveal className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHeading
              eyebrow="תהליך"
              title="מסלול ברור מרעיון גולמי למוצר מלוטש."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {processSteps.map((step) => (
                <div key={step.title} className="service-card border-l-4 border-[var(--coral)] bg-white/64 p-6">
                  <step.icon size={24} />
                  <h3 className="mt-5 text-xl font-black">{step.title}</h3>
                  <p className="mt-2 leading-7 text-black/62">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[8px] border-2 border-[var(--ink)] bg-[var(--sun)] p-6 shadow-[10px_10px_0_#171513]">
            <p className="text-sm font-black uppercase tracking-[0.2em]">למה לקוחות מתעניינים</p>
            <div className="mt-8 grid gap-5">
              {proofPoints.map((point) => (
                <div key={point.label} className="border-b border-black/18 pb-5 last:border-b-0">
                  <p className="text-5xl font-black">{point.value}</p>
                  <p className="mt-1 font-bold text-black/62">{point.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--ink)] px-4 py-20 text-white sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.title} className="border-t border-white/20 pt-6">
              <principle.icon className="text-[var(--mint)]" size={28} />
              <h3 className="mt-5 text-2xl font-black">{principle.title}</h3>
              <p className="mt-3 leading-7 text-white/62">{principle.description}</p>
            </div>
          ))}
        </ScrollReveal>
      </section>
    </main>
  );
}
