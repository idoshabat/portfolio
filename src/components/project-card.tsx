"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { localeFromPath, withLocale } from "@/lib/i18n";
import { usePathname } from "next/navigation";

type Project = {
  slug: string;
  title: string;
  type: string;
  year: string;
  description: string;
  metrics: string[];
  palette: string;
  previewImage: string;
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const locale = localeFromPath(usePathname());

  return (
    <Link
      href={`${withLocale("/work", locale)}#${project.slug}`}
      className="tilt-card project-card group block overflow-hidden bg-[rgba(250,247,240,0.86)]"
    >
      <div className={`relative h-72 overflow-hidden bg-gradient-to-br ${project.palette} p-4`}>
        {project.previewImage ? (
          <Image
            src={project.previewImage}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : null}
        <div className="relative z-10 flex h-full flex-col justify-between border border-white/45 bg-white/10 p-4 text-white backdrop-blur-[2px]">
          <div className="flex items-center justify-between">
            <span className="bg-white px-3 py-1 text-xs font-semibold text-[var(--ink)]">
              0{index + 1}
            </span>
            <span className="grid size-10 place-items-center rounded-full bg-[var(--ink)]/78">
              <ArrowUpRight className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45" />
            </span>
          </div>
          <div className="w-fit bg-[var(--ink)]/82 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] shadow-sm">
            Preview
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-black/46">
          <span>{project.type}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="section-title mt-4 text-3xl">{project.title}</h3>
        <p className="mt-3 leading-7 text-black/62">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.metrics.map((metric) => (
            <span key={metric} className="border border-[var(--line)] bg-white/56 px-3 py-1 text-xs font-semibold">
              {metric}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
