"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Hero() {
  const { t } = useLanguage();
  const mouseRef = useRef(null);
  
  // ১. স্ক্রল প্যারালাক্স কনফিগ
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 400], [0, -50]);
  const yImage = useTransform(scrollY, [0, 400], [0, 80]);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (mouseRef.current) {
        const { clientX, clientY } = e;
        mouseRef.current.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, { duration: 600, fill: "forwards" });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!t) return null;

  return (
    <section className="relative w-full min-h-[110vh] flex items-center justify-center bg-[#030303] text-white pt-20 pb-10 overflow-hidden cursor-none">
      
      {/* Dynamic Mouse Glow */}
      <div
        ref={mouseRef}
        className="fixed top-0 left-0 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none z-50 mix-blend-screen transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />

      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT CONTENT --- */}
          <motion.div style={{ y: yText }}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400">
                Available for new projects
              </span>
            </motion.div>

            <h1 className="font-black tracking-tight leading-[0.95] mb-8">
              <motion.span 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="block text-6xl md:text-8xl lg:text-9xl bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-transparent"
              >
                {t.home.line1}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="block text-4xl md:text-6xl text-indigo-400 font-light italic mt-2"
              >
                {t.home.line2}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="block text-5xl md:text-7xl lg:text-8xl mt-4 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent"
              >
                {t.home.line3}
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 text-lg md:text-xl mb-12 max-w-lg leading-relaxed font-light border-l-2 border-indigo-500/30 pl-6"
            >
              {t.home.desc}
            </motion.p>

            <motion.div className="flex flex-wrap gap-6">
              <Link href="/contact" className="relative px-10 py-5 bg-white text-black font-black rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
                {t.home.btn_primary}
              </Link>
              <Link href="/portfolio" className="px-10 py-5 border border-white/10 rounded-2xl font-bold hover:bg-white/5 transition-all backdrop-blur-xl">
                {t.home.btn_secondary}
              </Link>
            </motion.div>
          </motion.div>

          {/* --- RIGHT CONTENT: INNOVATIVE CARDS --- */}
          <motion.div 
            style={{ y: yImage }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Main Visual Image */}
            <div className="relative w-[320px] h-[450px] md:w-[450px] md:h-[580px] rounded-[3rem] overflow-hidden border border-white/10 rotate-2 group transition-all duration-700 hover:rotate-0">
              <Image
                src="/heroimg/team.jpeg"
                alt="Studio"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Card 1: Success Rate */}
            <motion.div 
              animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -left-12 top-20 p-6 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl z-20"
            >
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white italic">98%</span>
                <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold">Project Success</span>
                <div className="flex gap-1 mt-2">
                  {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-3 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: `${i*0.1}s`}} />)}
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2: Satisfied Clients */}
            <motion.div 
              animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 6, delay: 1 }}
              className="absolute -right-8 bottom-20 p-6 bg-indigo-600/10 backdrop-blur-2xl border border-indigo-500/20 rounded-3xl shadow-2xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-[10px] font-bold">U{i}</div>
                  ))}
                </div>
                <div>
                  <span className="block text-xl font-black">250+</span>
                  <span className="text-[10px] uppercase text-gray-500 font-bold">Happy Clients</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 3: Experience */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -bottom-6 left-1/4 px-6 py-4 bg-white text-black rounded-2xl font-black text-sm z-30 shadow-2xl rotate-[-5deg]"
            >
              🚀 5+ YEARS EXP.
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Background Particles - সূক্ষ্ম এবং প্রিমিয়াম */}
      <Particles
        className="absolute inset-0 z-0 pointer-events-none"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 30 },
            color: { value: "#4338ca" },
            opacity: { value: 0.2 },
            size: { value: 1.5 },
            move: { enable: true, speed: 0.5 },
            links: { enable: true, distance: 200, color: "#4338ca", opacity: 0.1 }
          }
        }}
      />
    </section>
  );
}