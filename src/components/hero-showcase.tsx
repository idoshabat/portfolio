import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type HeroShowcaseProps = {
  locale?: "he" | "en";
};

export function HeroShowcase({ locale = "he" }: HeroShowcaseProps) {
  const isEnglish = locale === "en";

  return (
    <div className="hero-showcase relative min-h-[560px]">
      <div className="hero-image-card hero-main-card" aria-label={isEnglish ? "Featured website preview" : "תצוגת אתר מרכזית"}>
        <div className="hero-slide-label">{isEnglish ? "Welcome" : "ברוכים הבאים"}</div>
        <div className="grid gap-5 sm:grid-cols-[1.08fr_0.92fr]">
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--paper)]">
            <Image
              src="/projects/layout-design.png"
              alt={isEnglish ? "Layout Design website preview" : "תצוגה מקדימה של אתר Layout Design"}
              fill
              priority
              sizes="(min-width: 1024px) 320px, 80vw"
              className="object-cover transition duration-700 hover:scale-[1.03]"
            />
          </div>
          <div className="flex min-h-full flex-col justify-between border-t border-[var(--line)] pt-4 sm:border-t-0 sm:pt-0">
            <div>
              <p className="hero-slide-kicker">
                {isEnglish ? "Custom digital spaces" : "מרחבים דיגיטליים בהתאמה"}
              </p>
              <h2 className="hero-slide-title">Layout Design</h2>
              <p className="mt-4 text-sm leading-7 text-black/58">
                {isEnglish
                  ? "A real project used here as the visual language: quiet structure, intentional spacing, and screens that feel designed instead of filled."
                  : "פרויקט אמיתי שמשמש כאן כשפה ויזואלית: מבנה שקט, מרווחים מדויקים ומסכים שמרגישים מעוצבים ולא רק מלאים בתוכן."}
              </p>
            </div>
            <span className="mt-6 grid size-11 place-items-center rounded-full border border-[var(--line)] bg-[var(--ink)] text-white">
              <ArrowUpRight size={20} />
            </span>
          </div>
        </div>
      </div>

      <div className="hero-image-card hero-float-card hero-float-one">
        <div className="hero-slide-label">{isEnglish ? "Our story" : "הסיפור"}</div>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/projects/shalva-yoga.png"
            alt={isEnglish ? "Yoga studio website preview" : "תצוגה מקדימה של אתר סטודיו יוגה"}
            fill
            sizes="260px"
            className="object-cover"
          />
        </div>
        <div className="mt-3 flex items-end justify-between gap-4">
          <p className="text-sm font-semibold">{isEnglish ? "Mood, rhythm, booking" : "אווירה, קצב, הזמנה"}</p>
          <span className="font-mono text-xs text-black/42">02</span>
        </div>
      </div>

      <div className="hero-image-card hero-float-card hero-float-two">
        <div className="hero-slide-label">{isEnglish ? "Milestone" : "אבן דרך"}</div>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/projects/hoopprogress.png"
            alt={isEnglish ? "HoopProgress app preview" : "תצוגה מקדימה של HoopProgress"}
            fill
            sizes="260px"
            className="object-cover"
          />
        </div>
        <div className="mt-3 flex items-end justify-between gap-4">
          <p className="text-sm font-semibold">{isEnglish ? "Coach side + player side" : "צד מאמן + צד שחקן"}</p>
          <span className="font-mono text-xs text-black/42">03</span>
        </div>
      </div>
    </div>
  );
}
