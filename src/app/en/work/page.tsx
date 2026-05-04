import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
        <div className="mt-14 grid gap-8">
          {projects.map((project) => {
            if (!project.liveUrl) {
              return null;
            }

            return (
              <article
                key={project.slug}
                className="grid gap-6 border-t-2 border-[var(--ink)] pt-8 lg:grid-cols-[0.7fr_1.3fr]"
              >
                <div>
                  <h2 className="text-4xl font-black">{project.title}</h2>
                  <p className="mt-2 font-bold text-[var(--cobalt)]">{project.type}</p>
                </div>
                <div>
                  <p className="text-xl leading-9 text-black/68">{project.description}</p>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-cta mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-black"
                  >
                    View live site
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
