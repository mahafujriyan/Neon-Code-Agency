// app/home/Portfolio.jsx
"use client";

import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Portfolio() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  if (!t) return null;

  // ডামি প্রজেক্ট ডাটা (ইমেজ Unsplash থেকে)
  const projects = [
    {
      id: 1,
      title: t.portfolio.items.p1_title,
      category: t.portfolio.items.p1_cat,
      img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: 2,
      title: t.portfolio.items.p2_title,
      category: t.portfolio.items.p2_cat,
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: t.portfolio.items.p3_title,
      category: t.portfolio.items.p3_cat,
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: 4,
      title: t.portfolio.items.p4_title,
      category: t.portfolio.items.p4_cat,
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
    },
    {
      id: 5,
      title: t.portfolio.items.p5_title,
      category: t.portfolio.items.p5_cat,
      img: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1412&auto=format&fit=crop",
    },
    {
      id: 6,
      title: t.portfolio.items.p6_title,
      category: t.portfolio.items.p6_cat,
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1631&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-black text-white">
      
      <div className="container mx-auto px-6">
        
        {/* --- হেডার এবং ফিল্টার --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          
          {/* টেক্সট */}
          <div className="max-w-2xl">
            <motion.span 
               initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
               className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2 block"
            >
              {t.portfolio.tag}
            </motion.span>
            <motion.h2 
               initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
               className="text-3xl md:text-5xl font-bold mb-4"
            >
              {t.portfolio.title}
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
               className="text-gray-400 text-lg"
            >
              {t.portfolio.desc}
            </motion.p>
          </div>

          {/* ফিল্টার বাটন (ভিজুয়্যাল) */}
          <div className="flex flex-wrap gap-2">
            {t.portfolio.categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeTab === index 
                    ? "bg-white text-black border-white" 
                    : "bg-transparent text-gray-400 border-white/20 hover:border-white hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- প্রজেক্ট গ্রিড --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* ইমেজ */}
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* ওভারলে (হোভার করলে আসবে) */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* কন্টেন্ট (হোভার করলে নিচ থেকে আসবে) */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                
                {/* ক্যাটাগরি */}
                <span className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-2">
                  {project.category}
                </span>

                {/* টাইটেল এবং অ্যারো */}
                <div className="flex justify-between items-end">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  
                  {/* অ্যারো বাটন */}
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black transform rotate-45 group-hover:rotate-0 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* --- View All Button --- */}
        <div className="text-center mt-16">
            <Link href="/portfolio" className="inline-block px-10 py-4 border border-white/20 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300">
                View All Projects
            </Link>
        </div>

      </div>
    </section>
  );
}