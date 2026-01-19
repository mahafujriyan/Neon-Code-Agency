"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

/**
 * helper → category normalize
 * "Web Design" → "web_design"
 * "ডিজিটাল মার্কেটিং" → "ডিজিটাল_মার্কেটিং"
 */
const normalize = (str = "") =>
  str.toLowerCase().replace(/\s+/g, "_");

export default function WorkShowcase() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(0);

  // 🔐 SAFETY GUARD (language load / switch safe)
  if (!t || !t.recent) return null;

  const categories = t.recent.categories ?? [];
  const projects = t.recent.projects ?? [];

  // 🧠 dynamic key (language independent)
  const activeKey =
    activeCategory === 0
      ? "all"
      : normalize(categories[activeCategory]);

  // 🎯 filter logic (FIXED)
  const filteredProjects =
    activeKey === "all"
      ? projects
      : projects.filter(
          (p) => normalize(p.category) === activeKey
        );

  // 📌 details (safe)
  const details = t.recent.details?.[activeKey];

  return (
    <section className="bg-black text-white py-28">
      <div className="container mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="max-w-2xl mb-16">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">
            {t.recent.tag}
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
            {t.recent.title}
          </h2>

          <p className="text-gray-400 text-lg">
            {t.recent.desc}
          </p>
        </div>

        {/* ================= CATEGORY BUTTONS ================= */}
        <div className="flex flex-wrap gap-3 mb-14">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              className={`px-5 py-2 rounded-full border text-sm font-semibold transition-all ${
                activeCategory === i
                  ? "bg-white text-black border-white"
                  : "border-white/20 text-gray-400 hover:border-white hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ================= PROJECT GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition" />

              <div className="absolute bottom-0 p-6 opacity-0 group-hover:opacity-100 transition">
                <p className="text-blue-400 text-sm uppercase font-bold">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold mt-1">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= DETAILS ================= */}
        <AnimatePresence>
          {details && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-24 border-t border-white/10 pt-16"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                {details.title_en}
              </h3>

              <p className="text-xl text-blue-400 mb-6">
                {details.title_bn}
              </p>

              <p className="text-gray-400 max-w-3xl mb-12">
                {details.desc}
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {details.points?.map((p, i) => (
                  <div
                    key={i}
                    className="bg-[#111] rounded-xl p-6"
                  >
                    <h4 className="font-bold mb-2">
                      {p.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
