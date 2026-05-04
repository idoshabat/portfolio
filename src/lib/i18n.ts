export type Locale = "he" | "en";

export const locales = {
  he: {
    code: "he" as const,
    label: "עברית",
    switchLabel: "English",
    dir: "rtl" as const,
    prefix: "",
  },
  en: {
    code: "en" as const,
    label: "English",
    switchLabel: "עברית",
    dir: "ltr" as const,
    prefix: "/en",
  },
};

export function localeFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "he";
}

export function pathForLocale(pathname: string, locale: Locale) {
  const withoutEnglishPrefix = pathname.replace(/^\/en(?=\/|$)/, "") || "/";

  if (locale === "en") {
    return withoutEnglishPrefix === "/" ? "/en" : `/en${withoutEnglishPrefix}`;
  }

  return withoutEnglishPrefix;
}

export function withLocale(path: string, locale: Locale) {
  if (locale === "en") {
    return path === "/" ? "/en" : `/en${path}`;
  }

  return path;
}
