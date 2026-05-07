"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navItems } from "@/lib/site-data";
import { LanguageToggle } from "@/components/language-toggle";
import { localeFromPath, withLocale } from "@/lib/i18n";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const isEnglish = locale === "en";
  const normalizedPath = pathname.replace(/^\/en(?=\/|$)/, "") || "/";

  return (
    <header dir={isEnglish ? "ltr" : "rtl"} className="nav-shell sticky top-0 z-50 px-3 py-3 sm:px-5">
      <nav className="nav-frame mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href={withLocale("/", locale)} className="nav-brand group flex items-center gap-3" aria-label="Go home">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-glyph">
              <span className="brand-glyph-i" />
              <span className="brand-glyph-d" />
              <span className="brand-glyph-dot" />
            </span>
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-black uppercase tracking-[0.22em]">
              Studio Ido
            </span>
            <span className="block text-xs text-black/58">
              {isEnglish ? "Web & mobile designer" : "מעצב ווב ומובייל"}
            </span>
          </span>
        </Link>

        <div className="desktop-nav hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const isActive = normalizedPath === item.href;

            return (
              <Link
                key={item.href}
                href={withLocale(item.href, locale)}
                className={`nav-link py-2 text-base font-bold transition ${
                  isActive ? "is-active text-[var(--ink)]" : "text-black/58"
                }`}
              >
                {isEnglish ? item.labelEn : item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <Link
            href={withLocale("/contact", locale)}
            className="nav-cta inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-black"
          >
            {isEnglish ? "Start a project" : "מתחילים פרויקט"}
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <details className="group relative md:hidden">
            <summary className="mobile-menu-button grid size-12 cursor-pointer list-none place-items-center rounded-full">
              <span className="menu-bars" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </summary>
            <div className="mobile-nav-panel absolute right-0 mt-4 w-[calc(100vw-1.5rem)] rounded-[8px] p-3 sm:w-80">
              {navItems.map((item, index) => {
                const isActive = normalizedPath === item.href;

                return (
                  <Link
                    key={item.href}
                    href={withLocale(item.href, locale)}
                    className={`mobile-nav-link block rounded-[6px] px-3 py-3 text-sm font-bold ${
                      isActive ? "is-active" : ""
                    }`}
                    style={{ transitionDelay: `${index * 34}ms` }}
                  >
                    <span>{isEnglish ? item.labelEn : item.label}</span>
                    <span className="mobile-nav-dot" />
                  </Link>
                );
              })}
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
