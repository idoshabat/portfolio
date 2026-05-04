"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site-data";
import { localeFromPath, withLocale } from "@/lib/i18n";
import { usePathname } from "next/navigation";

type Project = (typeof projects)[number];

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const locale = localeFromPath(usePathname());

  return (
    <Link
      href={`${withLocale("/work", locale)}#${project.slug}`}
      className="tilt-card group block overflow-hidden rounded-[8px] border-2 border-[var(--ink)] bg-white shadow-[10px_10px_0_#171513]"
    >
      <div className={`h-72 bg-gradient-to-br ${project.palette} p-5`}>
        <div className="flex h-full flex-col justify-between rounded-[8px] border border-white/45 bg-white/18 p-4 text-white backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-[var(--ink)]">
              0{index + 1}
            </span>
            <ArrowUpRight className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45" />
          </div>
          <div>
            <div className="mb-4 grid grid-cols-3 gap-2">
              <span className="h-14 rounded-[6px] bg-white/82 transition duration-300 group-hover:-translate-y-1" />
              <span className="h-14 rounded-[6px] bg-white/42 transition duration-300 group-hover:translate-y-1" />
              <span className="h-14 rounded-[6px] bg-white/64 transition duration-300 group-hover:-translate-y-2" />
            </div>
            <div className="h-20 rounded-[8px] bg-[var(--ink)]/80 p-3">
              <span className="block h-3 w-2/3 rounded-full bg-white/80" />
              <span className="mt-3 block h-3 w-1/2 rounded-full bg-white/35" />
              <span className="mt-3 block h-3 w-5/6 rounded-full bg-white/35" />
            </div>
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
