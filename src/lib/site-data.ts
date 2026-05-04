import {
  ArrowUpRight,
  BadgeCheck,
  Blocks,
  Brush,
  CalendarCheck,
  Code2,
  Compass,
  Layers3,
  LayoutDashboard,
  MessagesSquare,
  MousePointer2,
  PencilRuler,
  Rocket,
  ScanSearch,
  Smartphone,
  Sparkles,
  WandSparkles,
} from "lucide-react";

export const navItems = [
  { href: "/", label: "בית", labelEn: "Home" },
  { href: "/work", label: "עבודות", labelEn: "Work" },
  { href: "/services", label: "שירותים", labelEn: "Services" },
  { href: "/process", label: "תהליך", labelEn: "Process" },
  { href: "/about", label: "אודות", labelEn: "About" },
  { href: "/contact", label: "צור קשר", labelEn: "Contact" },
];

export const services = [
  {
    title: "עיצוב אתרים",
    description:
      "אתרים שמוכרים אמון מהר: ארט דיירקשן חד, סיפור ברור, וחוויית גלישה רספונסיבית.",
    icon: LayoutDashboard,
  },
  {
    title: "עיצוב אפליקציות",
    description:
      "חוויות iOS ו-Android שמרגישות טבעיות, עם פלואו חכם, UI מלוטש ורכיבים שנבנים נכון.",
    icon: Smartphone,
  },
  {
    title: "מערכות עיצוב",
    description:
      "טוקנים, קומפוננטות, מצבי אינטראקציה ותיעוד שמאפשרים למוצר לזוז מהר בלי לאבד איכות.",
    icon: Blocks,
  },
  {
    title: "אסטרטגיית UX",
    description:
      "אודיטים, מסעות משתמש, וויירפריימים ותיעדוף שהופכים רעיון לא ברור לכיוון מוצר שאפשר לבנות.",
    icon: Compass,
  },
];

export const projects = [
  {
    slug: "nova-pay",
    title: "Nova Pay",
    type: "אפליקציית פינטק",
    year: "2026",
    description:
      "חוויית ארנק דיגיטלי לפרילנסרים שצריכים חשבוניות מהירות, אנליטיקה נקייה ותשלומים מיידיים.",
    metrics: ["אונבורדינג מהיר ב-42%", "18 מסכים", "מערכת עיצוב"],
    palette: "from-[#006d77] via-[#94e857] to-[#ffd166]",
  },
  {
    slug: "wellnest",
    title: "Wellnest",
    type: "פלטפורמת בריאות",
    year: "2025",
    description:
      "פלואו הזמנות רגוע שמאפשר להשוות מטפלים, לקבוע פגישות ולנהל תוכניות טיפול.",
    metrics: ["31% יותר השלמות", "ווב אפ", "מחקר UX"],
    palette: "from-[#ff4d2e] via-[#00a6fb] to-[#94e857]",
  },
  {
    slug: "atlas-crm",
    title: "Atlas CRM",
    type: "דשבורד B2B",
    year: "2025",
    description:
      "סביבת מכירות צפופה שעוצבה מחדש לסריקה מהירה, מעקב בטוח ופחות הזדמנויות שנופלות.",
    metrics: ["12 פלואים מרכזיים", "UI למוצר SaaS", "פרוטוטייפ"],
    palette: "from-[#12110f] via-[#006d77] to-[#ff4d2e]",
  },
];

export const processSteps = [
  {
    title: "גילוי",
    description:
      "מחדדים מטרות, קהל יעד, מגבלות ואת התפקיד העסקי שהממשק צריך לבצע.",
    icon: ScanSearch,
  },
  {
    title: "אפיון",
    description:
      "ממפים פלואים, יוצרים וויירפריימים ומגדירים היררכיה לפני שנכנסים לפיקסלים.",
    icon: PencilRuler,
  },
  {
    title: "עיצוב",
    description:
      "מסכים ברמת גימור גבוהה, מצבי קומפוננטות, הערות אנימציה ותשתית למערכת עיצוב.",
    icon: WandSparkles,
  },
  {
    title: "מסירה",
    description:
      "מקבלים קבצים מוכנים לפיתוח, מפרטים, נכסים וליווי בזמן ההטמעה.",
    icon: Rocket,
  },
];

export const proofPoints = [
  { value: "36+", label: "מסכי מוצר שעוצבו" },
  { value: "4-6w", label: "טיימליין טיפוסי להשקה" },
  { value: "100%", label: "רספונסיבי כברירת מחדל" },
];

export const capabilities = [
  "אסטרטגיית מוצר",
  "אודיטי UX",
  "וויירפריימים",
  "עיצוב UI בפיגמה",
  "פרוטוטייפים",
  "דפי נחיתה",
  "אפליקציות מובייל",
  "מערכות ווב",
  "מערכות עיצוב",
  "הנדאוף לפיתוח",
  "MVP ללא קוד",
  "כיוון מותג",
];

export const principles = [
  {
    title: "בהירות לפני קישוט",
    description:
      "לכל מסך יש תפקיד. השכבה הוויזואלית צריכה להפוך אותו לפשוט, חד וזכיר יותר.",
    icon: MousePointer2,
  },
  {
    title: "טעם שאפשר לפתח",
    description:
      "העבודה צריכה להרגיש פרימיום בלי להפוך למשהו שמפתחים לא יכולים לבנות ולתחזק.",
    icon: Layers3,
  },
  {
    title: "מומנטום במקום ערפל",
    description:
      "תמיד ברור מה קורה, מה השלב הבא ואילו החלטות צריכות את האישור שלך.",
    icon: MessagesSquare,
  },
];

export const packages = [
  {
    title: "אתר להשקה",
    price: "החל מ-$1,800",
    description:
      "ליזמים ועסקי שירות שצריכים אתר חד, אמין ומוכן ללקוחות במהירות.",
    items: ["5-7 אזורים", "עיצוב רספונסיבי", "כיוון לקופי", "הנדאוף לפיתוח"],
  },
  {
    title: "ספרינט עיצוב אפליקציה",
    price: "החל מ-$3,500",
    description:
      "לאפליקציות ווב או מובייל שצריכות פלואו מוצר ברור ומסכים מלוטשים.",
    items: ["מפת UX", "10-18 מסכים", "פרוטוטייפ קליקבילי", "ערכת UI"],
  },
  {
    title: "שותף מוצר",
    price: "מותאם אישית",
    description:
      "לצוותי מוצר שצריכים תמיכת עיצוב שוטפת ברמת סניור לאורך ריליסים.",
    items: ["מחזורי עיצוב שבועיים", "QA עיצובי", "פיתוח מערכת העיצוב", "תמיכה אסטרטגית"],
  },
];

export const contactReasons = [
  { label: "אתר חדש", icon: Brush },
  { label: "אפליקציית מובייל", icon: Smartphone },
  { label: "מערכת ווב", icon: Code2 },
  { label: "אודיט עיצוב", icon: BadgeCheck },
  { label: "השקה מהירה", icon: CalendarCheck },
  { label: "משהו נועז", icon: Sparkles },
];

export { ArrowUpRight };
