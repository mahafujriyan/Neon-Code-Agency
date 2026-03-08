"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { portfolioProjects } from "@/utils/portfolioProjects";

export default function PortfolioCaseStudyPage() {
  const { category } = useParams();
  const slug = typeof category === "string" ? category : "";

  const project = portfolioProjects.find((item) => item.slug === slug);

  const labels = {
    back: "Back to portfolio",
    notFound: "Project not found.",
    service: "Service track",
    challenge: "Challenge",
    strategy: "Strategy",
    deliverables: "Deliverables",
    outcomes: "Outcomes",
    stack: "Tech stack",
    team: "Team",
    duration: "Duration",
    year: "Year",
    next: "Next case",
    start: "Start a similar project",
  };

  if (!project) {
    return (
      <main className="min-h-screen bg-[#05080a] pt-28 pb-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold">{labels.notFound}</h1>
          <Link href="/portfolio" className="mt-8 inline-block rounded-xl border border-white/20 px-5 py-2 text-sm">
            {labels.back}
          </Link>
        </div>
      </main>
    );
  }

  const currentIndex = portfolioProjects.findIndex((item) => item.slug === project.slug);
  const nextProject = portfolioProjects[(currentIndex + 1) % portfolioProjects.length];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040709] pt-24 pb-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className={`absolute left-[8%] top-[7%] h-64 w-64 rounded-full bg-gradient-to-br ${project.accent} opacity-20 blur-[120px]`} />
      </div>

      <section className="container relative z-10 mx-auto px-5 md:px-8">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <Link href="/portfolio" className="mb-6 inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs tracking-[0.2em] text-white/75">
            {labels.back}
          </Link>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <div className={`mb-5 h-2 w-44 rounded-full bg-gradient-to-r ${project.accent}`} />
              <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">{project.title}</h1>
              <p className="mt-2 text-cyan-200/90">{project.client}</p>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">{project.summary}</p>
            </div>
            <div className="relative h-64 overflow-hidden rounded-3xl border border-white/15 md:h-80">
              <Image src={project.coverImage} alt={project.title} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            <MetaCard label={labels.service} value={project.serviceTrack} />
            <MetaCard label={labels.team} value={project.teamSize} />
            <MetaCard label={labels.duration} value={project.duration} />
            <MetaCard label={labels.year} value={project.year} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <article className="space-y-6 rounded-3xl border border-white/10 bg-[#0b1014]/90 p-6 lg:col-span-3">
            <div className="grid gap-4 md:grid-cols-[1.1fr_1fr] md:items-center">
              <div>
                <SectionTitle title={labels.challenge} />
                <p className="text-sm leading-relaxed text-gray-300 md:text-base">{project.challenge}</p>
              </div>
              <div className="relative h-40 overflow-hidden rounded-2xl border border-white/10">
                <Image src={project.challengeImage} alt={`${project.title} challenge`} fill sizes="(max-width: 1024px) 100vw, 30vw" className="object-cover" />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[1.1fr_1fr] md:items-center">
              <div>
                <SectionTitle title={labels.strategy} />
                <div className="grid gap-2">
                  {project.strategy.map((point) => (
                    <div key={point} className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-gray-200">
                      {point}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-40 overflow-hidden rounded-2xl border border-white/10">
                <Image src={project.strategyImage} alt={`${project.title} strategy`} fill sizes="(max-width: 1024px) 100vw, 30vw" className="object-cover" />
              </div>
            </div>

            <div>
              <SectionTitle title={labels.deliverables} />
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {project.deliverables.map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/90">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6 lg:col-span-2">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b1014]/90">
              <div className="relative h-44 w-full">
                <Image src={project.outcomeImage} alt={`${project.title} outcome`} fill sizes="(max-width: 1024px) 100vw, 30vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
              </div>
              <div className="p-6">
                <SectionTitle title={labels.outcomes} />
                <ul className="space-y-2">
                  {project.outcomes.map((metric) => (
                    <li key={metric} className="rounded-xl border border-emerald-300/20 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-100">
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0b1014]/90 p-6">
              <SectionTitle title={labels.stack} />
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-gray-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-black transition hover:scale-[1.02]">
            {labels.start}
          </Link>
          <Link
            href={`/portfolio/${nextProject.slug}`}
            className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {labels.next}: {nextProject.title}
          </Link>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ title }) {
  return <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">{title}</h2>;
}

function MetaCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
      <p className="text-[11px] uppercase tracking-[0.15em] text-gray-400">{label}</p>
      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}
