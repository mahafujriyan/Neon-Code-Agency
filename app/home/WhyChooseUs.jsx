// app/home/WhyChooseUs.jsx
"use client";

import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  if (!t) return null;

  // ফিচার লিস্ট এবং আইকন (SVG)
  const features = [
    {
      id: 1,
      title: t.why_choose.items.w1_title,
      desc: t.why_choose.items.w1_desc,
      color: "group-hover:text-blue-400",
      bgHover: "group-hover:border-blue-500/50",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.854 1.566-2.126 1.412-.423 2.572-.99 3.424-1.65m-10.8 1.65c.852.66 2.012 1.227 3.424 1.65.908.272 1.566 1.143 1.566 2.126v.192M14.25 12a6.001 6.001 0 01-12 0 6.001 6.001 0 0112 0zm0 0h2.99a3 3 0 100-6h-2.99a3 3 0 100 6z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: t.why_choose.items.w2_title,
      desc: t.why_choose.items.w2_desc,
      color: "group-hover:text-purple-400",
      bgHover: "group-hover:border-purple-500/50",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: t.why_choose.items.w3_title,
      desc: t.why_choose.items.w3_desc,
      color: "group-hover:text-green-400",
      bgHover: "group-hover:border-green-500/50",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: t.why_choose.items.w4_title,
      desc: t.why_choose.items.w4_desc,
      color: "group-hover:text-pink-400",
      bgHover: "group-hover:border-pink-500/50",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full py-24 bg-[#090909] text-white overflow-hidden">
      
      {/* ব্যাকগ্রাউন্ড গ্লো */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- হেডার --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2 block">
              {t.why_choose.tag}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {t.why_choose.title}
            </h2>
            <p className="text-gray-400 text-lg">
              {t.why_choose.desc}
            </p>
          </motion.div>
        </div>

        {/* --- ফিচার গ্রিড --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // একটার পর একটা আসবে
              viewport={{ once: true }}
              className={`group p-8 bg-[#151515] border border-white/5 rounded-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden ${feature.bgHover}`}
            >
              
              {/* আইকন বক্স */}
              <div className={`w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-gray-300 transition-colors duration-300 ${feature.color} border border-white/5 group-hover:border-white/20`}>
                {feature.icon}
              </div>

              {/* টাইটেল */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white transition-colors">
                {feature.title}
              </h3>

              {/* বর্ণনা */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>

              {/* ব্যাকগ্রাউন্ড হোভার গ্লো */}
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full blur-[50px] group-hover:bg-white/10 transition-all duration-500"></div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}