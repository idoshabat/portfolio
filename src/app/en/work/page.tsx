import { SectionHeading } from "@/components/section-heading";
import { WorkShowcase } from "@/components/work-showcase";
import { projects, workCategories } from "@/lib/site-data-en";

export const metadata = {
  title: "Work | Studio Ido",
  description: "Selected portfolio projects for web and mobile app design.",
};

export default function EnglishWorkPage() {
  return (
    <main dir="ltr">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Work"
          title="Projects shaped by sharp design, clear UX, and polished execution."
          copy="Explore websites, apps, and platforms I designed and developed, with a focus on strong visual direction, product thinking, and user experiences that guide people toward action."
        />
        <WorkShowcase
          projects={projects}
          categories={workCategories}
          labels={{
            liveSite: "View live site",
            previewAltPrefix: "",
            previewAltSuffix: " preview",
            metricNote: "Project highlight.",
          }}
        />
      </section>
    </main>
  );
}
