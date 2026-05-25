import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { CapabilityMarquee } from "@/components/capability-marquee";
import { HeroShowcase } from "@/components/hero-showcase";
import {
  capabilities,
  principles,
  processSteps,
  projects,
  services,
} from "@/lib/site-data";

export default function Home() {
  return (
    <main>
      <section className="home-hero relative isolate overflow-hidden border-b border-[var(--line)]">
        <div className="mx-auto grid min-h-[calc(100vh-74px)] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.03fr_0.97fr] lg:px-8">
          <div className="relative z-10">
            <div className="luxury-intro">
              <span className="luxury-intro-label">Studio Ido</span>
              <p>היי, אני עידו. מעצב ובונה אתרים ואפליקציות לעסקים שרוצים להיראות ברמה אחרת.</p>
            </div>
            <h1 className="editorial-hero-title mt-7 max-w-4xl text-5xl leading-[0.98] sm:text-7xl lg:text-8xl">
              אני הופך רעיון דיגיטלי למוצר שאנשים זוכרים.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/64 sm:text-xl">
              אני עובד עם בעלי עסקים ויזמים שרוצים אתר, חנות, מערכת או אפליקציה שלא מרגישים כמו עוד תבנית. ביחד אנחנו בונים חוויה ברורה, יפה ומדויקת שמציגה את העסק כמו שהוא באמת צריך להיראות.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="magnetic-button inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ink)] px-6 py-4 text-sm font-bold text-white shadow-[0_16px_36px_rgba(27,23,19,0.18)] transition hover:-translate-y-0.5"
              >
                קבעו שיחת פרויקט
                <ArrowUpRight size={18} />
              </Link>
              <Link
                href="/work"
                className="magnetic-button inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-white/78 px-6 py-4 text-sm font-bold transition hover:bg-white"
              >
                לראות עבודות
                <ArrowLeft size={18} />
              </Link>
            </div>
            <div className="studio-notes mt-10 grid gap-3 sm:grid-cols-3">
              <div>
                <span>01</span>
                <p>בלי טמפלטים שמתחפשים למותג.</p>
              </div>
              <div>
                <span>02</span>
                <p>כל מסך מקבל תפקיד ברור.</p>
              </div>
              <div>
                <span>03</span>
                <p>עיצוב יפה, אבל כזה שגם אפשר להשיק.</p>
              </div>
            </div>
          </div>

          <HeroShowcase />
        </div>
      </section>

      <CapabilityMarquee items={capabilities} />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <ScrollReveal className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="שירותים"
            title="מה שאני בונה בפועל."
            copy="לא חבילת באזז-וורדס. אלה הדברים שלקוחות באמת מבקשים כשהם צריכים נוכחות דיגיטלית שנראית טוב, עובדת טוב וקל להסביר אותה."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="service-card bg-white/76 p-6">
                <service.icon className="text-[var(--coral)]" size={28} />
                <h3 className="section-title mt-6 text-2xl">{service.title}</h3>
                <p className="mt-3 leading-7 text-black/62">{service.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="border-y border-[var(--line)] bg-[rgba(250,247,240,0.52)] py-20">
        <ScrollReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="עבודות נבחרות"
              title="כמה דוגמאות שמראות כיוון, לא רק צבעים יפים."
            />
            <Link href="/work" className="inline-flex items-center gap-2 font-black text-[var(--cobalt)]">
              לכל הפרויקטים
              <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div>
            <SectionHeading
              eyebrow="תהליך"
              title="איך זה מרגיש לעבוד איתי."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {processSteps.map((step) => (
                <div key={step.title} className="service-card border-s-4 border-[var(--coral)] bg-white/64 p-6">
                  <step.icon size={24} />
                  <h3 className="section-title mt-5 text-xl">{step.title}</h3>
                  <p className="mt-2 leading-7 text-black/62">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="border-t border-[var(--line)] bg-[radial-gradient(circle_at_18%_18%,rgba(159,126,95,0.24),transparent_28rem),radial-gradient(circle_at_84%_28%,rgba(255,255,255,0.08),transparent_24rem),var(--ink)] px-4 py-20 text-white sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.title} className="border-t border-white/20 pt-6">
              <principle.icon className="text-[var(--mint)]" size={28} />
              <h3 className="section-title mt-5 text-2xl">{principle.title}</h3>
              <p className="mt-3 leading-7 text-white/62">{principle.description}</p>
            </div>
          ))}
        </ScrollReveal>
      </section>
    </main>
  );
}
