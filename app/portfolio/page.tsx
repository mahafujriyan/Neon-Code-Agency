// app/portfolio/page.jsx
"use client";

import { useLanguage } from "../../context/LanguageContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  const { t, lang } = useLanguage();
  
  // ডিফল্ট ক্যাটাগরি 'All' (অথবা বাংলায় 'সব')
  const [activeCategory, setActiveCategory] = useState(lang === 'en' ? "All" : "সব");

  if (!t) return null;

  // ক্যাটাগরি লিস্ট (Translations থেকে নেওয়া)
  const categories = t.portfolio.categories;

  // বিস্তারিত প্রজেক্ট ডাটা (এখানে আমরা ম্যানুয়ালি কিছু ডাটা দিচ্ছি ডেমোর জন্য)
  // রিয়েল প্রজেক্টে এই ডাটাগুলোও translations.js বা ডাটাবেস থেকে আসতে পারে
  const projects = [
    {
      id: 1,
      title: "Neon Brand Identity",
      category: lang === 'en' ? "Branding" : "ব্র্যান্ডিং",
      img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Fintech Dashboard",
      category: lang === 'en' ? "Web Design" : "ওয়েব ডিজাইন", // ম্যাপিং ঠিক রাখার জন্য
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Eco-Friendly App",
      category: lang === 'en' ? "App Dev" : "অ্যাপ",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Fashion E-commerce",
      category: lang === 'en' ? "Web Design" : "ওয়েব ডিজাইন",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Tech Startup Marketing",
      category: lang === 'en' ? "Marketing" : "মার্কেটিং",
      img: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Modern Architecture",
      category: lang === 'en' ? "Branding" : "ব্র্যান্ডিং",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 7,
      title: "Crypto Wallet App",
      category: lang === 'en' ? "App Dev" : "অ্যাপ",
      img: "https://images.unsplash.com/photo-1526304640152-d4619684e484?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 8,
      title: "Social Media Growth",
      category: lang === 'en' ? "Marketing" : "মার্কেটিং",
      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 9,
      title: "Cyberpunk Game UI",
      category: lang === 'en' ? "Web Design" : "ওয়েব ডিজাইন",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  // ফিল্টার লজিক
  const filteredProjects = activeCategory === (lang === 'en' ? "All" : "সব")
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <main className="bg-black text-white min-h-screen pt-24 pb-20">
      
      {/* === ১. হিরো হেডার === */}
      <section className="container mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">
            {t.portfolio.tag}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Showcase</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            {t.portfolio.desc}
          </p>
        </motion.div>
      </section>


      {/* === ২. ফিল্টার বাটনস === */}
      <section className="container mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                  : "bg-transparent text-gray-400 border-white/20 hover:border-white hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>


      {/* === ৩. পোর্টফোলিও গ্রিড === */}
      <section className="container mx-auto px-6">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-white/10"
              >
                
                {/* ইমেজ */}
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />

                {/* ওভারলে (ডার্ক গ্রেডিয়েন্ট) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                {/* কন্টেন্ট (নিচ থেকে স্লাইড হবে) */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm font-semibold text-white/80">
                    View Case Study 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>


      {/* === ৪. কল টু অ্যাকশন (CTA) === */}
      <section className="container mx-auto px-6 mt-32 mb-10">
        <div className="bg-[#101010] border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
          
          {/* গ্লো ইফেক্ট */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
            Have a project in mind?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto relative z-10">
            Let’s collaborate and build something extraordinary together.
          </p>
          
          <Link href="/contact" className="relative z-10 inline-block px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]">
            Start a Project
          </Link>

        </div>
      </section>

    </main>
  );
}