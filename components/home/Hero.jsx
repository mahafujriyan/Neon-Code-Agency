// app/home/Hero.jsx
"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import Image from "next/image";
// useRef ইম্পোর্ট করতে ভুলবেন না
import { useState, useEffect, useRef } from "react"; 

export default function Hero() {
  const { t } = useLanguage();
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // ১. মাউস ট্র্যাকার ref
  const mouseRef = useRef(null);

  useEffect(() => {
    // ২. স্ক্রল হ্যান্ডলার
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const progress = Math.min(scrolled / 250, 1); 
      setScrollProgress(progress);
    };

    // ৩. মাউস মুভ হ্যান্ডলার (অপটিমাইজড)
    const handleMouseMove = (e) => {
      if (mouseRef.current) {
        // মাউসের পজিশন অনুযায়ী ডিভ মুভ করানো
        const x = e.clientX;
        const y = e.clientY;
        
        // animate ব্যবহার করলে স্মুথ হয় এবং ল্যাগ করে না
        mouseRef.current.animate({
          left: `${x}px`,
          top: `${y}px`
        }, { duration: 500, fill: "forwards" }); // duration বাড়ালে একটু দেরিতে আসবে (smooth lag)
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!t) return null;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black text-white pt-20 pb-10 overflow-hidden cursor-none md:cursor-auto">
      
      {/* === 🔥 মাউস ফলোয়ার গ্লো (Mouse Glow) === */}
      <div 
        ref={mouseRef}
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-[100px] pointer-events-none z-50 mix-blend-screen transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
      ></div>


      {/* === ১. ডায়নামিক ব্যাকগ্রাউন্ড === */}
      <div 
        className="absolute inset-0 z-0 transition-all duration-500 ease-out"
        style={{ 
            opacity: scrollProgress, 
            transform: `scale(${1 + scrollProgress * 0.1})` 
        }} 
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-70"
        >
          <source src="https://github.com/mdabdullahm/video/raw/refs/heads/main/hero2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div 
        className="absolute inset-0 z-0 transition-opacity duration-300"
        style={{ opacity: 1 - scrollProgress }}
      >
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-700 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-700 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>


      {/* === ২. মেইন কন্টেন্ট === */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* --- বাম পাশ: টেক্সট --- */}
          <div className="text-center lg:text-left order-2 lg:order-1 relative z-20">
            <div className="inline-block mb-3">
              <span className="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-900/10 text-blue-300 text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
                {t.home.top_tagline}
              </span>
            </div>

            <h1 className="font-extrabold tracking-tight leading-tight mb-4">
              <span className="block text-3xl md:text-5xl lg:text-6xl text-white">
                {t.home.line1}
              </span>
              <span className="block text-2xl md:text-4xl text-gray-400 font-light italic mt-1">
                {t.home.line2}
              </span>
              <span className="block text-3xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mt-1 drop-shadow-lg">
                {t.home.line3}
              </span>
            </h1>

            <p className="text-gray-300 text-sm md:text-base mb-6 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
              {t.home.desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link href="/contact" className="px-6 py-2.5 bg-white text-black text-sm md:text-base font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                {t.home.btn_primary}
              </Link>
              <Link href="/portfolio" className="px-6 py-2.5 border border-white/20 text-white text-sm md:text-base font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
                {t.home.btn_secondary}
              </Link>
            </div>
          </div>

          {/* --- ডান পাশ: ইমেজ এবং রোটেটিং ব্যাজ --- */}
          <div className="hidden lg:order-2 lg:flex justify-center lg:justify-end relative z-20">
            
            {/* ১. ইমেজ কন্টেইনার */}
            <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <Image 
                src="/heroimg/heroimg.jpg" 
                alt="Hero Image" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* ২. রোটেটিং ব্যাজ */}
            <div className="absolute -bottom-8 -left-5 md:-bottom-10 md:-left-3 z-20">
              <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-black/80 rounded-full border border-white/20 backdrop-blur-xl shadow-lg shadow-blue-500/20">
                <div className="absolute inset-0 animate-[spin_10s_linear_infinite] w-full h-full p-2">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                    <path
                      id="textPath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text fontSize="11.5" fontWeight="bold" letterSpacing="2">
                      <textPath href="#textPath">
                        SCROLL DOWN • EXPLORE MORE •
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="text-blue-500 text-xl md:text-2xl animate-bounce">
                  ↓
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}