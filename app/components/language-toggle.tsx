"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/app/data/portfolio";

const STORAGE_KEY = "kevin-solar-portfolio-language";

function applyLocale(locale: Locale) {
  document.documentElement.dataset.lang = locale;
  document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  window.localStorage.setItem(STORAGE_KEY, locale);
}

export function LanguageToggle() {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(STORAGE_KEY);
    const nextLocale: Locale = savedLocale === "pt" ? "pt" : "en";

    applyLocale(nextLocale);
    const timeoutId = window.setTimeout(() => setLocale(nextLocale), 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  function handleLocaleChange(nextLocale: Locale) {
    applyLocale(nextLocale);
    setLocale(nextLocale);
  }

  return (
    <div
      aria-label="Language"
      className="inline-flex items-center rounded-lg border border-border bg-secondary p-1 font-mono text-sm font-semibold text-muted"
      role="group"
    >
      <button
        aria-pressed={locale === "en"}
        className={`h-8 rounded-md px-3 transition-colors ${
          locale === "en"
            ? "bg-accent text-accent-foreground"
            : "text-muted hover:bg-card hover:text-foreground"
        }`}
        onClick={() => handleLocaleChange("en")}
        type="button"
      >
        EN
      </button>
      <button
        aria-pressed={locale === "pt"}
        className={`h-8 rounded-md px-3 transition-colors ${
          locale === "pt"
            ? "bg-accent text-accent-foreground"
            : "text-muted hover:bg-card hover:text-foreground"
        }`}
        onClick={() => handleLocaleChange("pt")}
        type="button"
      >
        PT
      </button>
    </div>
  );
}
