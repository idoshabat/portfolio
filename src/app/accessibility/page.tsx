export const metadata = {
  title: "הצהרת נגישות | Studio Ido",
  description: "הצהרת נגישות לאתר Studio Ido.",
};

const sections = [
  {
    title: "מחויבות לנגישות",
    body: "Studio Ido רואה חשיבות במתן שירות שוויוני, מכבד ונגיש לכלל המשתמשים, לרבות אנשים עם מוגבלות. האתר נבנה ונבחן במטרה לאפשר גלישה נוחה ככל האפשר לכל המשתמשים.",
  },
  {
    title: "תקן הנגישות",
    body: "האתר שואף לעמוד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע״ג-2013, ובהתאם לתקן הישראלי ת״י 5568 המבוסס על הנחיות WCAG 2.0 ברמת AA, בכפוף לאופי האתר, לתוכן הקיים ולמגבלות טכנולוגיות.",
  },
  {
    title: "התאמות שבוצעו באתר",
    body: "באתר הושם דגש על מבנה כותרות ברור, ניווט עקבי, תמיכה בניווט מקלדת, ניגודיות צבעים, טקסטים קריאים, תיאורי תמונות במקומות הנדרשים, התאמה למסכים שונים ושימוש ברכיבים סמנטיים ככל האפשר.",
  },
  {
    title: "תוכן צד שלישי",
    body: "ייתכן שחלק מהתוכן או הקישורים באתר מפנים לאתרים חיצוניים או לשירותים שאינם בשליטת Studio Ido. במקרה כזה, רמת הנגישות של אותם שירותים תלויה בבעליהם.",
  },
  {
    title: "פנייה בנושא נגישות",
    body: "אם נתקלתם בקושי, תקלה או בעיית נגישות באתר, נשמח לקבל פנייה ולטפל בנושא בהקדם. מומלץ לציין את כתובת העמוד, תיאור הבעיה, סוג הדפדפן, מערכת ההפעלה וטכנולוגיה מסייעת אם נעשה בה שימוש. ניתן לפנות דרך עמוד יצירת הקשר באתר או באמצעות WhatsApp.",
  },
  {
    title: "עדכון ההצהרה",
    body: "הצהרת הנגישות תיבחן ותעודכן מעת לעת בהתאם לשינויים באתר, לתוכן חדש ולדרישות הדין.",
  },
];

export default function AccessibilityPage() {
  return (
    <main>
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--cobalt)]">נגישות</p>
        <h1 className="mt-4 text-5xl font-black leading-tight">הצהרת נגישות</h1>
        <p className="mt-5 leading-8 text-black/62">עודכן לאחרונה: 25 במאי 2026.</p>
        <div className="mt-12 grid gap-6">
          {sections.map((section) => (
            <article key={section.title} className="rounded-[8px] border border-[var(--line)] bg-white/68 p-6">
              <h2 className="text-2xl font-black">{section.title}</h2>
              <p className="mt-3 leading-8 text-black/66">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
