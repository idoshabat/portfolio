"use client";

import { Eye, Link2, Minus, Pause, Plus, RotateCcw, Settings, Type } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { localeFromPath } from "@/lib/i18n";

type FontScale = "xs" | "small" | "normal" | "large" | "xlarge";

const storageKey = "studio-ido-accessibility";

type AccessibilitySettings = {
  fontScale: FontScale;
  highContrast: boolean;
  highlightLinks: boolean;
  reduceMotion: boolean;
};

const defaultSettings: AccessibilitySettings = {
  fontScale: "normal",
  highContrast: false,
  highlightLinks: false,
  reduceMotion: false,
};

const fontScaleOptions: FontScale[] = ["xs", "small", "normal", "large", "xlarge"];

export function AccessibilityWidget() {
  const pathname = usePathname();
  const isEnglish = localeFromPath(pathname) === "en";
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);

    if (!saved) return;

    try {
      setSettings({ ...defaultSettings, ...JSON.parse(saved) });
    } catch {
      setSettings(defaultSettings);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    root.dataset.fontScale = settings.fontScale;
    root.dataset.contrast = settings.highContrast ? "high" : "default";
    root.dataset.highlightLinks = settings.highlightLinks ? "true" : "false";
    root.dataset.reduceMotion = settings.reduceMotion ? "true" : "false";

    window.localStorage.setItem(storageKey, JSON.stringify(settings));
  }, [settings]);

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  const fontScaleIndex = fontScaleOptions.indexOf(settings.fontScale);
  const canDecreaseFont = fontScaleIndex > 0;
  const canIncreaseFont = fontScaleIndex < fontScaleOptions.length - 1;

  const decreaseFont = () => {
    if (!canDecreaseFont) return;

    setSettings((current) => ({
      ...current,
      fontScale: fontScaleOptions[Math.max(0, fontScaleOptions.indexOf(current.fontScale) - 1)],
    }));
  };

  const increaseFont = () => {
    if (!canIncreaseFont) return;

    setSettings((current) => ({
      ...current,
      fontScale: fontScaleOptions[Math.min(fontScaleOptions.length - 1, fontScaleOptions.indexOf(current.fontScale) + 1)],
    }));
  };

  const labels = {
    title: isEnglish ? "Accessibility" : "נגישות",
    open: isEnglish ? "Open accessibility tools" : "פתיחת כלי נגישות",
    close: isEnglish ? "Close accessibility tools" : "סגירת כלי נגישות",
    textSize: isEnglish ? "Text size" : "גודל טקסט",
    textLevel: isEnglish ? `Level ${fontScaleIndex + 1} of 5` : `רמה ${fontScaleIndex + 1} מתוך 5`,
    increase: isEnglish ? "Increase text" : "הגדלת טקסט",
    decrease: isEnglish ? "Decrease text" : "הקטנת טקסט",
    contrast: isEnglish ? "High contrast" : "ניגודיות גבוהה",
    links: isEnglish ? "Highlight links" : "הדגשת קישורים",
    motion: isEnglish ? "Pause animations" : "עצירת אנימציות",
    reset: isEnglish ? "Reset" : "איפוס",
  };

  return (
    <div className="accessibility-widget" dir={isEnglish ? "ltr" : "rtl"}>
      <button
        type="button"
        className="accessibility-tab"
        aria-label={isOpen ? labels.close : labels.open}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="accessibility-tab-icon">
          <Settings size={19} />
        </span>
        <span className="accessibility-tab-label">{labels.title}</span>
      </button>

      <div className={`accessibility-panel ${isOpen ? "is-open" : ""}`}>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--cobalt)]">
              {labels.title}
            </p>
            <h2 className="mt-1 text-2xl font-black">{isEnglish ? "Display tools" : "כלי תצוגה"}</h2>
          </div>
          <button
            type="button"
            className="grid size-9 place-items-center rounded-full border border-[var(--line)] bg-white/70"
            aria-label={labels.reset}
            onClick={resetSettings}
          >
            <RotateCcw size={17} />
          </button>
        </div>

        <div className="mt-5 grid gap-3">
          <div className="accessibility-row accessibility-text-row">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 font-black">
                <Type size={18} />
                {labels.textSize}
              </span>
              <span className="text-xs font-black text-black/52">{labels.textLevel}</span>
            </div>
            <div className="accessibility-stepper" role="group" aria-label={labels.textSize}>
              <button
                type="button"
                className="accessibility-icon-button"
                aria-label={labels.decrease}
                disabled={!canDecreaseFont}
                onClick={decreaseFont}
              >
                <Minus size={17} />
              </button>
              <div className="accessibility-level-track" aria-hidden="true">
                {fontScaleOptions.map((option) => (
                  <span key={option} className={fontScaleOptions.indexOf(option) <= fontScaleIndex ? "is-active" : ""} />
                ))}
              </div>
              <button
                type="button"
                className="accessibility-icon-button"
                aria-label={labels.increase}
                disabled={!canIncreaseFont}
                onClick={increaseFont}
              >
                <Plus size={17} />
              </button>
            </div>
          </div>

          <button
            type="button"
            className={`accessibility-toggle ${settings.highContrast ? "is-active" : ""}`}
            onClick={() => setSettings((current) => ({ ...current, highContrast: !current.highContrast }))}
          >
            <span className="inline-flex items-center gap-2">
              <Eye size={18} />
              {labels.contrast}
            </span>
            <span className="accessibility-switch" />
          </button>

          <button
            type="button"
            className={`accessibility-toggle ${settings.highlightLinks ? "is-active" : ""}`}
            onClick={() => setSettings((current) => ({ ...current, highlightLinks: !current.highlightLinks }))}
          >
            <span className="inline-flex items-center gap-2">
              <Link2 size={18} />
              {labels.links}
            </span>
            <span className="accessibility-switch" />
          </button>

          <button
            type="button"
            className={`accessibility-toggle ${settings.reduceMotion ? "is-active" : ""}`}
            onClick={() => setSettings((current) => ({ ...current, reduceMotion: !current.reduceMotion }))}
          >
            <span className="inline-flex items-center gap-2">
              <Pause size={18} />
              {labels.motion}
            </span>
            <span className="accessibility-switch" />
          </button>
        </div>
      </div>
    </div>
  );
}
