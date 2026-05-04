"use client";

import Link from "next/link";
import { Languages } from "lucide-react";
import { localeFromPath, pathForLocale } from "@/lib/i18n";
import { usePathname } from "next/navigation";

export function LanguageToggle() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const nextLocale = locale === "he" ? "en" : "he";

  return (
    <Link
      href={pathForLocale(pathname, nextLocale)}
      className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/72 px-4 py-2 text-sm font-black transition hover:bg-[var(--ink)] hover:text-white"
      aria-label={locale === "he" ? "Switch to English" : "Switch to Hebrew"}
    >
      <Languages size={17} />
      {locale === "he" ? "EN" : "עב"}
    </Link>
  );
}
