// app/home/Testimonials.jsx
"use client";

import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";

const userImages = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop",
];

// === রিভিউ কার্ড ===
const ReviewCard = ({ review, index }) => (
  <div className="w-[350px] md:w-[450px] bg-[#151515] border border-white/10 p-8 rounded-2xl flex-shrink-0 mx-4 hover:border-blue-500/30 transition-colors duration-300 group">
    
    <div className="flex gap-1 mb-4 text-yellow-500">
      {[...Array(5)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
      ))}
    </div>

    <p className="text-gray-300 text-lg italic mb-6 leading-relaxed group-hover:text-white transition-colors">
      "{review.comment}"
    </p>

    <div className="flex items-center gap-4">
      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
        <Image src={userImages[index % userImages.length]} alt={review.name} fill className="object-cover" />
      </div>
      <div>
        <h4 className="font-bold text-white text-base">{review.name}</h4>
        <p className="text-gray-500 text-sm">{review.role}</p>
      </div>
    </div>
  </div>
);

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
            // 👇 এখানে দেখুন: duration বাড়িয়ে 120 করা হয়েছে (এটি ২ মিনিটেরও বেশি সময় নেবে)
            transition={{ repeat: Infinity, ease: "linear", duration: 120 }} 
            
            // মাউস নিলে অ্যানিমেশন থামানোর চেষ্টা (CSS hack এর মাধ্যমে করা ভালো, এখানে simple রাখা হলো)
            style={{ width: "max-content" }}
          >
            {/* ডুপ্লিকেট কমানো হয়েছে (৩ বার) যাতে লোড কম পড়ে, কিন্তু লুপ স্মুথ থাকে */}
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