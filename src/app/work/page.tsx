import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/site-data";

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
          title="קייס סטאדיז שמראים גם עין וגם חשיבה."
          copy="אלה פרויקטים לדוגמה. החלף אותם בפרויקטים אמיתיים, תוצאות ללקוחות, צילומי תהליך והמלצות."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white/50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <article
                id={project.slug}
                key={project.slug}
                className="grid gap-8 border-t-2 border-[var(--ink)] pt-8 lg:grid-cols-[0.7fr_1.3fr]"
              >
                <div>
                  <p className="font-mono text-sm text-black/48">CASE 0{index + 1}</p>
                  <h2 className="mt-3 text-4xl font-black">{project.title}</h2>
                  <p className="mt-2 font-bold text-[var(--cobalt)]">{project.type}</p>
                </div>
                <div>
                  <p className="text-xl leading-9 text-black/68">{project.description}</p>
                  <div className="mt-7 grid gap-4 sm:grid-cols-3">
                    {project.metrics.map((metric) => (
                      <div key={metric} className="rounded-[8px] border border-[var(--line)] bg-white p-4">
                        <p className="font-black">{metric}</p>
                        <p className="mt-2 text-sm text-black/52">להחליף בפרט אמיתי מהפרויקט.</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
