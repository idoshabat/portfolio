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
    title: "עיצוב ובניית אתרים",
    description:
      "אתרי תדמית ודפי נחיתה שנראים מקצועיים, נטענים מהר ומובילים את המשתמש לפעולה ברורה, עם עיצוב רספונסיבי והתאמה מלאה למובייל.",
    icon: LayoutDashboard,
  },
  {
    title: "עיצוב ובניית אפליקציות",
    description:
      "אפליקציות ווב ומובייל עם פלואו ברור, ממשק מלוטש וחוויית משתמש שמרגישה פשוטה גם כשהמוצר מורכב.",
    icon: Smartphone,
  },
  {
    title: "חנות אונליין",
    description:
      "חנויות איקומרס עם עמודי מוצר חזקים, תהליך רכישה נוח, הצגת מוצרים שמוכרת וחוויית משתמש שמגדילה אמון והמרות.",
    icon: Blocks,
  },
  {
    title: "אסטרטגיית UX",
    description:
      "אפיון, מחקר מהיר, מסעות משתמש, וויירפריימים ותיעדוף שמתרגמים רעיון מבולגן למוצר ברור שאפשר לעצב ולבנות.",
    icon: Compass,
  },
];

export const projects = [
  {
    slug: "layout-design",
    title: "Layout Design",
    type: "עיצוב ותכנון אדריכלי",
    year: "2026",
    description:
      "אתר תדמית לאדריכלות ותכנון שמציג את המומחיות של הסטודיו בצורה נקייה, מקצועית ובטוחה, עם ניווט ברור, היררכיה מדויקת ודרך מהירה להגיע לפרויקטים וליצירת קשר.",
    metrics: ["אתר תדמית", "גלריית פרויקטים", "פניות מלקוחות"],
    palette: "from-[#006d77] via-[#d9f99d] to-[#ffd166]",
    liveUrl: "https://www.layout-net.com/",
  },
  {
    slug: "next-level-academy",
    title: "Next Level Academy",
    type: "אקדמיית כדורסל",
    year: "2026",
    description:
      "אתר לאקדמיית כדורסל שמרגיש אנרגטי, צעיר ומקצועי, עם מסר חד להורים ולשחקנים, הצגת תוכניות אימון וקריאה ברורה להצטרפות לאקדמיה.",
    metrics: ["אתר ספורט", "רישום לאימונים", "חוויית מובייל"],
    palette: "from-[#12110f] via-[#ff4d2e] to-[#00a6fb]",
    liveUrl: "https://www.nextlevelacademy.com/",
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
    title: "יצירת קשר",
    description:
      "מתחילים בהודעת וואטסאפ או השארת פרטים בטופס. אני חוזר אליך, מבין בקצרה מה צריך לבנות ובודק אם הפרויקט מתאים.",
    icon: MessagesSquare,
  },
  {
    title: "שיחת אפיון",
    description:
      "בשיחה קצרה מחדדים מטרות, קהל יעד, סגנון רצוי, תכולה, דדליין ומה ייחשב הצלחה מבחינת העסק.",
    icon: ScanSearch,
  },
  {
    title: "הצעת מחיר ותכולה",
    description:
      "אחרי שהכיוון ברור, מקבלים הצעה מסודרת עם שלבי עבודה, תוצרים, לוחות זמנים ומה כלול בפרויקט.",
    icon: CalendarCheck,
  },
  {
    title: "אפיון מבנה וחוויית משתמש",
    description:
      "מגדירים את מבנה העמודים או המסכים, מסדרים היררכיית תוכן ובונים פלואו ברור לפני שנכנסים לעיצוב מלא.",
    icon: PencilRuler,
  },
  {
    title: "עיצוב ופידבק",
    description:
      "יוצרים עיצוב ויזואלי מלא, עוברים יחד על הכיוון, מדייקים צבעים, קומפוננטות, מסכים ופרטים עד שהכול מרגיש נכון.",
    icon: WandSparkles,
  },
  {
    title: "פיתוח, בדיקות ועלייה לאוויר",
    description:
      "אחרי אישור העיצוב, עוברים לפיתוח האתר, בדיקות במובייל ודסקטופ, חיבור טפסים וקישורים, ולבסוף העלאה לאוויר בצורה מסודרת.",
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
