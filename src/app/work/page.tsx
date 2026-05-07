import { SectionHeading } from "@/components/section-heading";
import { WorkShowcase } from "@/components/work-showcase";
import { projects, workCategories } from "@/lib/site-data";

export const metadata = {
  title: "עבודות | Studio Ido",
  description: "פרויקטים נבחרים בעיצוב אתרים ואפליקציות.",
};

export default function WorkPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="עבודות"
          title="פרויקטים שמציגים עיצוב חד, חוויית משתמש ברורה וביצוע מוקפד."
          copy="כאן אפשר לראות אתרים, אפליקציות ומערכות שעיצבתי ופיתחתי, עם דגש על כיוון ויזואלי חזק, חשיבה מוצרית וחוויית משתמש שמובילה לפעולה."
        />
        <WorkShowcase
          projects={projects}
          categories={workCategories}
          labels={{
            liveSite: "צפייה באתר החי",
            previewAltPrefix: "תצוגה מקדימה של ",
            metricNote: "נקודה מרכזית בפרויקט.",
          }}
        />
      </section>
    </main>
  );
}
