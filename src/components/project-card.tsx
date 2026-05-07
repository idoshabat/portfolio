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
      className="tilt-card group block overflow-hidden rounded-[8px] border-2 border-[var(--ink)] bg-white shadow-[10px_10px_0_#171513]"
    >
      <div className={`relative h-72 overflow-hidden bg-gradient-to-br ${project.palette} p-5`}>
        {project.previewImage ? (
          <Image
            src={project.previewImage}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : null}
        <div className="relative z-10 flex h-full flex-col justify-between rounded-[8px] border border-white/45 bg-white/12 p-4 text-white backdrop-blur-[2px]">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-[var(--ink)]">
              0{index + 1}
            </span>
            <span className="grid size-10 place-items-center rounded-full bg-[var(--ink)]/78">
              <ArrowUpRight className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45" />
            </span>
          </div>
          <div className="w-fit rounded-full bg-[var(--ink)]/82 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] shadow-sm">
            Preview
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-4 text-xs font-black uppercase tracking-[0.18em] text-black/46">
          <span>{project.type}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="mt-4 text-3xl font-black">{project.title}</h3>
        <p className="mt-3 leading-7 text-black/62">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.metrics.map((metric) => (
            <span key={metric} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs font-bold">
              {metric}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
