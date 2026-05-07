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
    category: "business-websites",
    type: "עיצוב ותכנון אדריכלי",
    year: "2026",
    description:
      "אתר תדמית לאדריכלות ותכנון שמציג את המומחיות של הסטודיו בצורה נקייה, מקצועית ובטוחה, עם ניווט ברור, היררכיה מדויקת ודרך מהירה להגיע לפרויקטים וליצירת קשר.",
    metrics: ["אתר תדמית", "גלריית פרויקטים", "פניות מלקוחות"],
    palette: "from-[#006d77] via-[#d9f99d] to-[#ffd166]",
    previewImage: "/projects/layout-design.png",
    liveUrl: "https://www.layout-net.com/",
  },
  {
    slug: "next-level-academy",
    title: "Next Level Academy",
    category: "sports-wellness",
    type: "אקדמיית כדורסל",
    year: "2026",
    description:
      "אתר לאקדמיית כדורסל שמרגיש אנרגטי, צעיר ומקצועי, עם מסר חד להורים ולשחקנים, הצגת תוכניות אימון וקריאה ברורה להצטרפות לאקדמיה.",
    metrics: ["אתר ספורט", "רישום לאימונים", "חוויית מובייל"],
    palette: "from-[#12110f] via-[#ff4d2e] to-[#00a6fb]",
    previewImage: "/projects/next-level.png",
    liveUrl: "https://www.nextlevelacademy.com/",
  },
  {
    slug: "shalva-yoga-studio",
    title: "סטודיו שלווה",
    category: "sports-wellness",
    type: "אתר סטודיו ליוגה",
    year: "2026",
    description:
      "קונספט אתר בוטיק לסטודיו יוגה בעברית, עם שפה ויזואלית רגועה, חוויית RTL מלאה, עמוד בית עריכתי, לוח שיעורים, מחירים, צוות מורים וזרימת הזמנה שמרגישה פשוטה ונעימה.",
    metrics: ["RTL מלא", "לוח שיעורים", "זרימת הזמנה"],
    palette: "from-[#3d2419] via-[#d8a47f] to-[#f2e8dc]",
    previewImage: "/projects/shalva-yoga.png",
    liveUrl: "https://yoga-app-zeta.vercel.app",
  },
  {
    slug: "hoopprogress",
    title: "HoopProgress",
    category: "apps-platforms",
    type: "פלטפורמת אימוני כדורסל",
    year: "2026",
    description:
      "פלטפורמת אימונים לשחקני כדורסל ומאמנים, הכוללת אפליקציית מובייל, דשבורד ווב וחיבור מלא בין שחקן למאמן. המערכת מאפשרת מעקב אחר אימונים, סטטיסטיקות קליעה, תוכניות עבודה, בקשות חיבור והתראות.",
    metrics: ["אפליקציית מובייל", "דשבורד מאמנים", "מעקב ביצועים"],
    palette: "from-[#0f0f11] via-[#f59e0b] to-[#34d399]",
    previewImage: "/projects/hoopprogress.png",
    liveUrl:"https://hoop-progress-frontend.vercel.app/",
  },
  // {
  //   slug: "wellnest",
  //   title: "Wellnest",
  //   category: "apps-platforms",
  //   type: "פלטפורמת בריאות",
  //   year: "2025",
  //   description:
  //     "פלואו הזמנות רגוע שמאפשר להשוות מטפלים, לקבוע פגישות ולנהל תוכניות טיפול.",
  //   metrics: ["31% יותר השלמות", "ווב אפ", "מחקר UX"],
  //   palette: "from-[#ff4d2e] via-[#00a6fb] to-[#94e857]",
  //   previewImage: "/projects/wellnest.svg",
  // },
  // {
  //   slug: "atlas-crm",
  //   title: "Atlas CRM",
  //   category: "apps-platforms",
  //   type: "דשבורד B2B",
  //   year: "2025",
  //   description:
  //     "סביבת מכירות צפופה שעוצבה מחדש לסריקה מהירה, מעקב בטוח ופחות הזדמנויות שנופלות.",
  //   metrics: ["12 פלואים מרכזיים", "UI למוצר SaaS", "פרוטוטייפ"],
  //   palette: "from-[#12110f] via-[#006d77] to-[#ff4d2e]",
  //   previewImage: "/projects/atlas-crm.svg",
  // },
];

export const workCategories = [
  { id: "all", label: "הכל" },
  { id: "business-websites", label: "אתרים" },
  { id: "sports-wellness", label: "ספורט ובריאות" },
  { id: "apps-platforms", label: "אפליקציות ומערכות" },
  { id: "ecommerce", label: "איקומרס" },
];

export const processSteps = [
  {
    title: "יצירת קשר ראשונית",
    description:
      "התהליך מתחיל בהודעה קצרה בוואטסאפ או דרך טופס יצירת הקשר. אני עובר על הבקשה, מבין את החזון ברמה גבוהה ובודק האם הפרויקט מתאים לעבודה משותפת.",
    icon: MessagesSquare,
  },
  {
    title: "שיחת אפיון",
    description:
      "נצלול לעומק המטרות העסקיות, קהל היעד, הכיוון הוויזואלי והיקף הפרויקט. כך נוודא כבר מההתחלה שיש תיאום ציפיות ברור והבנה של מה ייחשב הצלחה.",
    icon: ScanSearch,
  },
  {
    title: "הצעה והגדרת תכולה",
    description:
      "תקבלו הצעה מסודרת שמפרטת תוצרים, לוחות זמנים, אבני דרך ומה כלול בפרויקט. הכול מוגדר בצורה ברורה לפני שמתקדמים.",
    icon: CalendarCheck,
  },
  {
    title: "UX ומבנה",
    description:
      "אני מתכנן את הבסיס של החוויה: מבנה עמודים, היררכיית תוכן וזרימות משתמש, כדי לוודא בהירות ושימושיות לפני שמתחילים בעיצוב הוויזואלי.",
    icon: PencilRuler,
  },
  {
    title: "עיצוב ואיטרציות",
    description:
      "נוצר כיוון ויזואלי מלוטש ולאחריו תהליך פידבק משותף. יחד נדייק פריסות, קומפוננטות, צבעים ופרטים עד שהכול יושב נכון מול החזון שלכם.",
    icon: WandSparkles,
  },
  {
    title: "פיתוח ועלייה לאוויר",
    description:
      "העיצוב המאושר מתורגם לאתר פעיל ומלא. השלב כולל פיתוח רספונסיבי, בדיקות במכשירים שונים ועלייה לאוויר בצורה חלקה ומוכנה לפרודקשן.",
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
