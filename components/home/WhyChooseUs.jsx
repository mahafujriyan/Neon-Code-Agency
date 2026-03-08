// app/home/WhyChooseUs.jsx
"use client";

import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  // 1. Scroll Progress Track kora
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  if (!t) return null;

  const features = [
    { id: 1, title: t.why_choose.items.w1_title, desc: t.why_choose.items.w1_desc, icon: "🛡️", openRotate: -25, openX: -180 },
    { id: 2, title: t.why_choose.items.w2_title, desc: t.why_choose.items.w2_desc, icon: "⚡", openRotate: -10, openX: -60 },
    { id: 3, title: t.why_choose.items.w3_title, desc: t.why_choose.items.w3_desc, icon: "🚀", openRotate: 10, openX: 60 },
    { id: 4, title: t.why_choose.items.w4_title, desc: t.why_choose.items.w4_desc, icon: "💎", openRotate: 25, openX: 180 },
  ];

  return (
    <section ref={sectionRef} className="relative w-full py-32 bg-[#050505] text-white overflow-hidden min-h-[120vh] flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 italic tracking-tighter">
              {t.why_choose.title}
            </h2>
            <p className="text-gray-400 text-lg">{t.why_choose.desc}</p>
        </div>

        {/* --- Scroll-Linked Card Stack --- */}
        <div className="relative flex items-center justify-center h-[500px] [perspective:1200px]">
          {features.map((feature, index) => {
            
            // 2. Scroll er sathe Rotate ebong X-axis er transformation
            // Scroll korle 0 theke openRotate e jabe, abar up korle 0 hoye jabe
            const rotate = useTransform(scrollYProgress, [0.1, 0.4], [0, feature.openRotate]);
            const x = useTransform(scrollYProgress, [0.1, 0.4], [0, feature.openX]);
            const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

            return (
              <motion.div
                key={feature.id}
                style={{
                  rotateZ: rotate,
                  x: x,
                  opacity: opacity,
                  zIndex: index,
                }}
                whileHover={{
                  scale: 1.1,
                  rotateZ: 0,
                  y: -20,
                  zIndex: 100,
                  transition: { duration: 0.3 }
                }}
                className="absolute w-[280px] h-[380px] md:w-[300px] md:h-[420px] 
                           bg-[#0d0d0d] border border-white/10 rounded-[2.5rem] p-10 
                           cursor-pointer shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
                           flex flex-col items-start justify-end group overflow-hidden"
              >
                {/* Content Area */}
                <div className="relative z-10">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">
                      {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                {/* Card Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}