import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/site-data-en";

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
          title="Case studies that prove the eye and the thinking."
          copy="These are polished placeholder case studies. Replace them with your best real projects, client outcomes, process screenshots, and testimonials."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
