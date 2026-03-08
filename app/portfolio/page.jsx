"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioCategories, portfolioProjects } from "@/utils/portfolioProjects";
import LeadProjectPopup from "@/components/LeadProjectPopup";

export default function PortfolioPage() {
  const { t } = useLanguage();

  const labels = useMemo(
    () => ({
      tag: "REAL PROJECT SHOWCASE",
      title: "Our Portfolio",
      subtitle: "Every project card includes delivery context, measurable outcomes, and visual references.",
      all: "All",
      viewCase: "View case study",
      startProject: "Start project",
      noData: "No projects found in this category.",
      duration: "Duration",
      team: "Team",
      outcome: "Top outcome",
      sector: "Sector",
    }),
    []
  );

  const [activeCategory, setActiveCategory] = useState(labels.all);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupPrefill, setPopupPrefill] = useState({ projectName: "", serviceType: "" });

  const normalizedCategories = useMemo(
    () => [labels.all, ...portfolioCategories.filter((category) => category !== "All")],
    [labels.all]
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === labels.all) return portfolioProjects;
    return portfolioProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory, labels.all]);

  if (!t) return null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05080a] pt-24 pb-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-[2%] h-72 w-72 rounded-full bg-cyan-600/15 blur-[130px]" />
        <div className="absolute right-[4%] top-[25%] h-[24rem] w-[24rem] rounded-full bg-orange-500/12 blur-[120px]" />
      </div>

      <section className="container relative z-10 mx-auto px-5 md:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs tracking-[0.22em] text-white/70">
            {labels.tag}
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">{t.portfolio?.title || labels.title}</h1>
          <p className="mt-4 max-w-3xl text-gray-300 md:text-lg">{t.portfolio?.desc || labels.subtitle}</p>
        </motion.div>

        <div className="mb-10 flex flex-wrap gap-3">
          {normalizedCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                activeCategory === category
                  ? "border-white bg-white text-black"
                  : "border-white/20 bg-white/5 text-gray-300 hover:border-white/35 hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.slug}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 14, scale: 0.98 }}
                transition={{ delay: index * 0.04, duration: 0.28 }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0c1216]/90 shadow-[0_15px_35px_rgba(0,0,0,0.35)]"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/30 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-gray-100">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-200">{project.year}</span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-2xl font-extrabold leading-tight">{project.title}</h3>
                  <p className="mt-1 text-sm text-cyan-200/90">{project.client}</p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">{project.summary}</p>

                  <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-gray-400">{labels.sector}</p>
                      <p className="mt-1 font-semibold text-white">{project.industry}</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-gray-400">{labels.duration}</p>
                      <p className="mt-1 font-semibold text-white">{project.duration}</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-gray-400">{labels.team}</p>
                      <p className="mt-1 font-semibold text-white">{project.teamSize}</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-gray-400">{labels.outcome}</p>
                      <p className="mt-1 font-semibold text-white">{project.outcomes[0]}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-black transition hover:scale-[1.03]"
                    >
                      {labels.viewCase}
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setPopupPrefill({
                          projectName: project.title,
                          serviceType: project.serviceTrack,
                        });
                        setPopupOpen(true);
                      }}
                      className="rounded-xl border border-white/25 px-4 py-2 text-sm font-semibold text-gray-100 transition hover:bg-white/10"
                    >
                      {labels.startProject}
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {!filteredProjects.length && (
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center text-sm text-gray-300">{labels.noData}</div>
        )}
      </section>

      {popupOpen && (
        <LeadProjectPopup
          open={popupOpen}
          onClose={() => setPopupOpen(false)}
          defaultProjectName={popupPrefill.projectName}
          defaultServiceType={popupPrefill.serviceType}
          key={`${popupPrefill.projectName}-${popupPrefill.serviceType}`}
        />
      )}
    </main>
  );
}
