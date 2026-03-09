// app/home/About.jsx
"use client";

// import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

// === ১. এনিমেটেড কাউন্টার কম্পোনেন্ট (আলাদা ফাংশন) ===
const AnimatedCounter = ({ targetString, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const { lang } = useLanguage();
  
  // স্ট্রিং থেকে নম্বর এবং চিহ্ন (+ বা %) আলাদা করা
  // যেমন: "120+" থেকে number=120, suffix="+"
  const numberPart = parseInt(targetString.replace(/\D/g, "")); // শুধু সংখ্যা বের করবে
  const suffix = targetString.replace(/[0-9]/g, ""); // বাকি চিহ্ন (+, %) বের করবে (ইংরেজির জন্য)
  // বাংলার জন্য ম্যানুয়ালি '+' যোগ করতে হবে কারণ বাংলা টেক্সট ভিন্ন হতে পারে

  useEffect(() => {
    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      // কতটুকু সময় পার হয়েছে তার ওপর ভিত্তি করে সংখ্যা বাড়ানো
      if (progress < duration) {
        const nextCount = Math.floor((progress / duration) * numberPart);
        setCount(nextCount);
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(numberPart); // শেষ হলে সঠিক সংখ্যা বসিয়ে দেওয়া
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [numberPart, duration]);

  // ইংরেজি সংখ্যাকে বাংলায় রূপান্তর করার ফাংশন
  const toBengaliNumber = (n) => {
    const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return n.toString().split("").map(digit => bengaliDigits[digit] || digit).join("");
  };

  // রেন্ডারিং (ভাষা অনুযায়ী)
  return (
    <span>
      {lang === 'bn' ? toBengaliNumber(count) : count}
      <span className="text-blue-500">{lang === 'bn' ? '+' : suffix}</span>
    </span>
  );
};


// === ২. মেইন About কম্পোনেন্ট ===
export default function About() {
  const { t } = useLanguage();

  if (!t) return null;

  return (
    <section className="relative w-full py-20 bg-black text-white overflow-hidden">
      
      {/* ব্যাকগ্রাউন্ড গ্লো */}
      <div className="absolute left-0 top-1/2 h-[220px] w-[220px] -translate-y-1/2 rounded-full bg-blue-900/20 blur-[100px] sm:h-[300px] sm:w-[300px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* === বাম পাশ: ইমেজ গ্রিড === */}
          <div className="relative">
            {/* বড় ছবি */}
            <div className="relative z-10 ml-auto aspect-[3/4] w-full max-w-[440px] overflow-hidden rounded-2xl border border-white/10 sm:w-[85%]">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop" 
                alt="Our Team" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-blue-900/30 opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>
            </div>

            {/* ছোট ছবি */}
            <div className="group absolute -bottom-6 left-2 z-20 aspect-square w-[56%] max-w-[240px] overflow-hidden rounded-2xl border-2 border-black shadow-2xl sm:bottom-8 sm:left-0">
              <Image 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop" 
                alt="Working" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* ডেকোরেটিভ ডট */}
            <div className="absolute -right-3 -top-3 h-16 w-16 animate-spin-slow rounded-full border border-white/20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50 sm:-right-5 sm:-top-5 sm:h-24 sm:w-24"></div>
          </div>


          {/* === ডান পাশ: টেক্সট এবং কাউন্টার === */}
          <div>
            
            <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2 block">
              {t.about.tag}
            </span>

            <h2 className="mb-6 text-3xl font-bold leading-tight md:text-5xl">
              {t.about.title}
            </h2>

            <p className="mb-8 text-base leading-relaxed text-gray-400 sm:text-lg">
              {t.about.desc}
            </p>

            {/* --- পরিসংখ্যান (Stats with Counter) --- */}
            <div className="mb-10 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              
              {/* কাউন্টার ১ */}
              <div>
                <h3 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
                  {/* এখানে AnimatedCounter ব্যবহার করা হয়েছে */}
                  <AnimatedCounter targetString={t.about.stats.s1_num} />
                </h3>
                <p className="text-gray-500 text-sm font-medium">{t.about.stats.s1_text}</p>
              </div>

              {/* কাউন্টার ২ */}
              <div>
                <h3 className="mb-2 text-3xl font-bold text-blue-400 sm:text-4xl">
                  <AnimatedCounter targetString={t.about.stats.s2_num} />
                </h3>
                <p className="text-gray-500 text-sm font-medium">{t.about.stats.s2_text}</p>
              </div>

              {/* কাউন্টার ৩ */}
              <div>
                <h3 className="mb-2 text-3xl font-bold text-purple-400 sm:text-4xl">
                  <AnimatedCounter targetString={t.about.stats.s3_num} />
                </h3>
                <p className="text-gray-500 text-sm font-medium">{t.about.stats.s3_text}</p>
              </div>

            </div>

            <Link href="/about" className="inline-flex items-center gap-2 text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors group">
              <span className="font-semibold">{t.about.btn}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}
