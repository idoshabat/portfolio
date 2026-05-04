"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navItems } from "@/lib/site-data";
import { localeFromPath, withLocale } from "@/lib/i18n";
import { usePathname } from "next/navigation";

export function Footer() {
  const locale = localeFromPath(usePathname());
  const isEnglish = locale === "en";

  return (
    <footer dir={isEnglish ? "ltr" : "rtl"} className="border-t border-[var(--line)] bg-[var(--ink)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-white/46">
            {isEnglish ? "Available for selected projects" : "זמין לפרויקטים נבחרים"}
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-black leading-[0.96] sm:text-5xl">
            {isEnglish ? "Let's design the thing people remember." : "בואו נעצב משהו שאנשים יזכרו."}
          </h2>
          <Link
            href={withLocale("/contact", locale)}
            className="magnetic-button mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[var(--ink)] transition hover:bg-[var(--mint)]"
          >
            {isEnglish ? "Tell me about it" : "ספרו לי על זה"}
            <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-black">{isEnglish ? "Pages" : "עמודים"}</h3>
            <div className="mt-4 grid gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={withLocale(item.href, locale)} className="text-sm text-white/66 hover:text-white">
                  {isEnglish ? item.labelEn : item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-black">{isEnglish ? "Contact" : "קשר"}</h3>
            <div className="mt-4 grid gap-2 text-sm text-white/66">
              <a href="mailto:hello@yourstudio.com" className="hover:text-white">
                hello@yourstudio.com
              </a>
              <a href="https://www.linkedin.com" className="hover:text-white">
                LinkedIn
              </a>
              <a href="https://www.behance.net" className="hover:text-white">
                Behance
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/42">
        {isEnglish
          ? "© 2026 Studio Ido. Replace this with your legal business name."
          : "© 2026 Studio Ido. החלף בשם העסק הרשמי שלך."}
      </div>
    </footer>
  );
}
