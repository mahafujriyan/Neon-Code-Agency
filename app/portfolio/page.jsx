// app/portfolio/page.jsx
"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  const { t, lang } = useLanguage();

  const ALL = lang === "en" ? "All" : "সব";
  const [activeCategory, setActiveCategory] = useState(ALL);

  if (!t) return null;

  const categories = t.portfolio.categories;

 const projects = [
  {
    id: 1,
    title: "Neon Brand Identity",
    category: lang === "en" ? "Branding" : "ব্র্যান্ডিং",
    img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Fintech Dashboard",
    category: lang === "en" ? "Web Design" : "ওয়েব ডিজাইন",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Eco-Friendly App",
    category: lang === "en" ? "App Dev" : "অ্যাপ",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Fashion E-commerce",
    category: lang === "en" ? "Web Development" : "ওয়েব ডিজাইন",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Tech Startup Marketing",
    category: lang === "en" ? "Marketing" : "মার্কেটিং",
    img: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Modern Architecture",
    category: lang === "en" ? "Branding" : "ব্র্যান্ডিং",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Professional Page Setup",
    category: lang === "en"
      ? "Professional Page Setup"
      : "প্রফেশনাল পেজ সেটআপ",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1000&auto=format&fit=crop",
  },
];


  const filteredProjects =
    activeCategory === ALL
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-black text-white min-h-screen pt-24 pb-20">

      {/* HERO */}
      <section className="container mx-auto px-6 text-center mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">
            {t.portfolio.tag}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Showcase</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.portfolio.desc}
          </p>
        </motion.div>
      </section>

      {/* FILTERS */}
      <section className="container mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {[ ...categories].map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold border transition-all ${
                activeCategory === cat
                  ? "bg-white text-black border-white"
                  : "border-white/20 text-gray-400 hover:text-white hover:border-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="container mx-auto px-6">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/${encodeURIComponent(project.category)}`}
              >
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
                >
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition" />

                  <div className="absolute bottom-0 left-0 w-full p-6 opacity-0 group-hover:opacity-100 transition">
                    <span className="text-blue-400 text-xs uppercase font-bold">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mt-1">
                      {project.title}
                    </h3>
                    <p className="text-sm mt-2 text-white/70">
                      View Category →
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

    </main>
  );
}
