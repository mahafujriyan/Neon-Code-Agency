// app/career/page.jsx
"use client";


import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function CareerPage() {
  const { t } = useLanguage();

  if (!t) return null;

  return (
    <main className="bg-black text-white min-h-screen pt-24 pb-20">
      
      {/* === ১. হিরো সেকশন === */}
      <section className="container mx-auto px-6 text-center mb-24 relative">
        {/* ব্যাকগ্রাউন্ড গ্লো */}
        <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">
            {t.career.tag}
          </span>
          <h1 className="text-4xl md:text-7xl font-bold mb-6">
            {t.career.title}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {t.career.desc}
          </p>
        </motion.div>
      </section>


      {/* === ২. বেনিফিটস গ্রিড === */}
      <section className="container mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold mb-10 text-center">{t.career.benefits_title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.career.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#101010] p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-2 group"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                ✓
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* === ৩. জব ওপেনিংস === */}
      <section className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">{t.career.jobs_title}</h2>

        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {t.career.jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-center bg-[#101010] p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all group"
            >
              
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {job.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-1 justify-center md:justify-start">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {job.location}
                  </span>
                </div>
              </div>

              <Link href="/contact" className="px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-lg transform hover:-translate-y-1 text-sm">
                {t.career.apply_btn}
              </Link>

            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}