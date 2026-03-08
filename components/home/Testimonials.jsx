// app/home/Testimonials.jsx
"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

import { ReviewCard } from "./ReviewCard";

export default function Testimonials() {
  const { t } = useLanguage();

  if (!t) return null;

  const reviewsRow1 = t.testimonials.reviews.slice(0, 3);
  const reviewsRow2 = t.testimonials.reviews.slice(3, 6);

  return (
    <section className="relative w-full py-24 bg-black text-white overflow-hidden">
      
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 mb-16 text-center relative z-10">
        <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2 block">
          {t.testimonials.tag}
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          {t.testimonials.title}
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {t.testimonials.desc}
        </p>
      </div>

      {/* === Infinite Scroll Container === */}
      <div className="relative w-full flex flex-col gap-8 overflow-hidden mask-gradient">
        
        {/* --- Row 1 (Left Direction) --- */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-100%"] }}
        
            transition={{ repeat: Infinity, ease: "linear", duration: 120 }} 
            
 
            style={{ width: "max-content" }}
          >
      
            {[...reviewsRow1, ...reviewsRow1, ...reviewsRow1, ...reviewsRow1].map((review, i) => (
              <ReviewCard key={i} review={review} index={i} />
            ))}
          </motion.div>
        </div>

        {/* --- Row 2 (Right Direction) --- */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: ["-100%", "0%"] }}
            // 👇 এখানে দেখুন: duration বাড়িয়ে 140 করা হয়েছে
            transition={{ repeat: Infinity, ease: "linear", duration: 140 }} 
            style={{ width: "max-content" }}
          >
            {[...reviewsRow2, ...reviewsRow2, ...reviewsRow2, ...reviewsRow2].map((review, i) => (
              <ReviewCard key={i} review={review} index={i + 3} />
            ))}
          </motion.div>
        </div>

      </div>

      {/* সাইড ফেড ইফেক্ট */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

    </section>
  );
}