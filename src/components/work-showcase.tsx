"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";

type Project = {
  slug: string;
  title: string;
  category: string;
  type: string;
  year: string;
  description: string;
  metrics: string[];
  palette: string;
  previewImage: string;
  liveUrl?: string;
};

type Category = {
  id: string;
  label: string;
};

type WorkShowcaseProps = {
  projects: Project[];
  categories: Category[];
  labels: {
    liveSite: string;
    previewAltPrefix: string;
    previewAltSuffix?: string;
    metricNote: string;
  };
};

export function WorkShowcase({ projects, categories, labels }: WorkShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const visibleCategories = categories.filter(
    (category) =>
      category.id === "all" ||
      projects.some((project) => project.category === category.id)
  );
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-3">
        {visibleCategories.map((category) => {
          const count =
            category.id === "all"
              ? projects.length
              : projects.filter((project) => project.category === category.id).length;
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full border px-4 py-2 text-sm font-black transition ${
                isActive
                  ? "border-[var(--ink)] bg-[var(--ink)] text-white shadow-[4px_4px_0_var(--coral)]"
                  : "border-[var(--line)] bg-white/72 text-black/62 hover:border-[var(--ink)] hover:text-[var(--ink)]"
              }`}
            >
              {category.label}
              <span className="ms-2 text-xs opacity-62">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      <div className="mt-14 grid gap-8">
        {filteredProjects.map((project, index) => (
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
              <div className="relative mb-7 aspect-[16/10] overflow-hidden rounded-[8px] border-2 border-[var(--ink)] bg-white shadow-[8px_8px_0_#171513]">
                <Image
                  src={project.previewImage}
                  alt={`${labels.previewAltPrefix}${project.title}${labels.previewAltSuffix ?? ""}`}
                  fill
                  sizes="(min-width: 1024px) 720px, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="text-xl leading-9 text-black/68">{project.description}</p>
              {project.liveUrl ? (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-cta mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-black"
                >
                  {labels.liveSite}
                  <ArrowUpRight size={18} />
                </Link>
              ) : null}
              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div key={metric} className="rounded-[8px] border border-[var(--line)] bg-white p-4">
                    <p className="font-black">{metric}</p>
                    <p className="mt-2 text-sm text-black/52">{labels.metricNote}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
