import {
  ArrowUpRight,
  Blocks,
  CalendarCheck,
  Code2,
  Layers3,
  LayoutDashboard,
  MessagesSquare,
  MousePointer2,
  PencilRuler,
  Rocket,
  ScanSearch,
  Smartphone,
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
    title: "דפי נחיתה",
    description:
      "דפי נחיתה ממוקדים לקמפיינים, השקות, איסוף לידים או מכירת שירות אחד, עם מסר חד, היררכיה ברורה וקריאה לפעולה שמובילה לתוצאה.",
    icon: MousePointer2,
  },
  {
    title: "אתרי תדמית",
    description:
      "אתרים לעסקים, בעלי מקצוע וסטודיואים שרוצים להציג מי הם, מה הם עושים, עבודות, המלצות ודרך פשוטה ליצור קשר.",
    icon: LayoutDashboard,
  },
  {
    title: "אתרי איקומרס",
    description:
      "חנויות אונליין עם עמודי מוצר חזקים, קטגוריות ברורות, חוויית רכישה נוחה ועיצוב שמגדיל אמון ומעודד קנייה.",
    icon: Blocks,
  },
  {
    title: "מערכות ווב",
    description:
      "מוצרים דיגיטליים מורכבים יותר כמו דשבורדים, מערכות ניהול ופלטפורמות ווב, עם זרימות משתמש ברורות וממשק מלוטש.",
    icon: Code2,
  },
  {
    title: "אפליקציות מובייל",
    description:
      "עיצוב ובנייה של אפליקציות מובייל עם חוויית שימוש נוחה, מסכים מדויקים, זרימה ברורה והתאמה לצרכים של משתמשים אמיתיים.",
    icon: Smartphone,
  },
  {
    title: "שדרוג ועיצוב מחדש",
    description:
      "רענון לאתר, אפליקציה או מערכת קיימים כדי לשפר נראות, חוויית משתמש, היררכיה, אמינות והמרות בלי להתחיל הכול מאפס.",
    icon: WandSparkles,
  },
];

export const projects = [
  {
    slug: "layout-design",
    title: "Layout Design",
    categories: ["business-websites"],
    type: "עיצוב ותכנון אדריכלי",
    year: "2026",
    description:
      "אתר תדמית לאדריכלות ותכנון שמציג את המומחיות של הסטודיו בצורה נקייה, מקצועית ובטוחה, עם ניווט ברור, היררכיה מדויקת ודרך מהירה להגיע לפרויקטים וליצירת קשר.",
    metrics: ["אתר תדמית", "גלריית פרויקטים", "פניות מלקוחות"],
    palette: "from-[#211913] via-[#4f6042] to-[#d8a85d]",
    previewImage: "/projects/layout-design.png",
    liveUrl: "https://www.layout-net.com/",
  },
  {
    slug: "next-level-academy",
    title: "Next Level Academy",
    categories: ["business-websites"],
    type: "אקדמיית כדורסל",
    year: "2026",
    description:
      "אתר לאקדמיית כדורסל שמרגיש אנרגטי, צעיר ומקצועי, עם מסר חד להורים ולשחקנים, הצגת תוכניות אימון וקריאה ברורה להצטרפות לאקדמיה.",
    metrics: ["אתר ספורט", "רישום לאימונים", "חוויית מובייל"],
    palette: "from-[#211913] via-[#b85f45] to-[#2f8f8a]",
    previewImage: "/projects/next-level.png",
    liveUrl: "https://www.nextlevelacademy.com/",
  },
  {
    slug: "shalva-yoga-studio",
    title: "סטודיו שלווה",
    categories: ["business-websites"],
    type: "אתר סטודיו ליוגה",
    year: "2026",
    description:
      "קונספט אתר בוטיק לסטודיו יוגה בעברית, עם שפה ויזואלית רגועה, חוויית RTL מלאה, עמוד בית עריכתי, לוח שיעורים, מחירים, צוות מורים וזרימת הזמנה שמרגישה פשוטה ונעימה.",
    metrics: ["RTL מלא", "לוח שיעורים", "זרימת הזמנה"],
    palette: "from-[#3b2a21] via-[#c98f7d] to-[#f7efe3]",
    previewImage: "/projects/shalva-yoga.png",
    liveUrl: "https://yoga-app-zeta.vercel.app",
  },
  {
    slug: "hoopprogress",
    title: "HoopProgress",
    categories: ["web-platforms", "mobile-apps"],
    type: "פלטפורמת אימוני כדורסל",
    year: "2026",
    description:
      "פלטפורמת אימונים לשחקני כדורסל ומאמנים, הכוללת אפליקציית מובייל, דשבורד ווב וחיבור מלא בין שחקן למאמן. המערכת מאפשרת מעקב אחר אימונים, סטטיסטיקות קליעה, תוכניות עבודה, בקשות חיבור והתראות.",
    metrics: ["אפליקציית מובייל", "דשבורד מאמנים", "מעקב ביצועים"],
    palette: "from-[#211913] via-[#4f6042] to-[#8fa58a]",
    previewImage: "/projects/hoopprogress.png",
    liveUrl:"https://hoop-progress-frontend.vercel.app/",
  },
];

export const workCategories = [
  { id: "all", label: "הכל" },
  { id: "landing-pages", label: "דפי נחיתה" },
  { id: "business-websites", label: "אתרי תדמית" },
  { id: "ecommerce-websites", label: "אתרי איקומרס" },
  { id: "web-platforms", label: "מערכות ווב" },
  { id: "mobile-apps", label: "אפליקציות מובייל" },
  { id: "redesign", label: "שדרוג ועיצוב מחדש" },
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

export const capabilities = [
  "דפי נחיתה",
  "אתרי תדמית",
  "אתרי איקומרס",
  "מערכות ווב",
  "אפליקציות מובייל",
  "שדרוג ועיצוב מחדש",
  "עיצוב UI בפיגמה",
  "פרוטוטייפים",
  "וויירפריימים",
  "חוויית משתמש",
  "התאמה מלאה למובייל",
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
    title: "דף נחיתה ממיר",
    description:
      "לעסק, קמפיין או שירות שצריכים עמוד חד שמציג הצעה אחת ומוביל לפנייה.",
    items: ["מבנה וקופי ראשוני", "עיצוב רספונסיבי", "טופס או WhatsApp", "עלייה לאוויר"],
  },
  {
    title: "אתר או חנות",
    description:
      "לעסקים שצריכים אתר תדמית מלא או חנות איקומרס עם חוויית רכישה ברורה.",
    items: ["עמודי תוכן מרכזיים", "עיצוב ובנייה", "התאמה למובייל", "בדיקות והשקה"],
  },
  {
    title: "מערכת או אפליקציה",
    description:
      "למוצרים מורכבים יותר כמו מערכת ווב, דשבורד, אפליקציית מובייל או רידיזיין למוצר קיים.",
    items: ["אפיון UX", "מסכים וזרימות", "עיצוב ובנייה", "שיפור ושדרוג מוצר קיים"],
  },
];

export const contactReasons = [
  { label: "דף נחיתה", icon: MousePointer2 },
  { label: "אתר תדמית", icon: LayoutDashboard },
  { label: "אתר איקומרס", icon: Blocks },
  { label: "מערכת ווב", icon: Code2 },
  { label: "אפליקציית מובייל", icon: Smartphone },
  { label: "שדרוג ועיצוב מחדש", icon: WandSparkles },
];

export { ArrowUpRight };
