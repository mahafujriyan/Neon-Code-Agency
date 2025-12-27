// app/home/Services.jsx
"use client";

import { useLanguage } from "../../context/LanguageContext";
import React, { useRef } from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// === অরবিটিং আইকন কম্পোনেন্ট ===
// এটি আইকনকে বৃত্তাকার পথে ঘোরাবে এবং আইকনটিকে সোজা রাখবে (Counter Rotate করে)
const OrbitingIcon = ({ icon, radius, duration, angle, reverse = false }) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      style={{
        width: radius * 2,
        height: radius * 2,
        x: "-50%",
        y: "-50%",
        rotate: angle, // শুরুর পজিশন
      }}
      animate={{ rotate: reverse ? angle - 360 : angle + 360 }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
    >
      {/* আইকনটি বৃত্তের পরিধিতে থাকবে */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#1a1a1a] border border-white/20 rounded-2xl p-3 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center"
      >
        {/* আইকন যাতে উল্টো না হয়, তাই এটাকে উল্টো দিকে ঘোরানো হচ্ছে */}
        <motion.div
          className="relative w-full h-full"
          animate={{ rotate: reverse ? 360 : -360 }}
          transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
        >
          <Image src={icon} alt="Service Icon" fill className="object-contain" />
        </motion.div>
      </div>
    </motion.div>
  );
};

// === কার্ড কম্পোনেন্ট (আগের মতোই) ===
const Card = ({ i, title, desc, icon, img, hoverColor, progress, range, targetScale }) => {
  const containerRef = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
        className="relative flex flex-col w-[350px] md:w-[450px] h-[420px] origin-top group cursor-pointer"
      >
        <div className="absolute -top-6 -left-6 z-50 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 border-4 border-black">
          <div className="relative w-12 h-12">
            <Image src={icon} alt="Icon" fill className="object-contain" />
          </div>
        </div>
        <div className="relative w-full h-full rounded-[30px] overflow-hidden shadow-2xl bg-[#1a1a1a]">
          <div className="absolute inset-0 z-0">
            <Image src={img} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-50"></div>
          <div className={`absolute inset-0 bg-gradient-to-t ${hoverColor} to-transparent z-20 opacity-0 group-hover:opacity-90 transition-opacity duration-300`}></div>
          <div className="absolute bottom-0 left-0 w-full p-8 z-30 transform transition-transform duration-300 group-hover:-translate-y-2">
            <span className="block text-4xl font-bold text-gray-500/50 mb-2 group-hover:text-black/50 transition-colors">0{i + 1}</span>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-black transition-colors leading-tight">{title}</h3>
            <p className="text-gray-300 text-sm line-clamp-3 group-hover:text-black/90 transition-colors font-medium">{desc}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// === মেইন কম্পোনেন্ট ===
export default function Services() {
  const { t } = useLanguage();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  if (!t) return null;

  // সার্ভিস ডাটা
  const servicesData = [
    { title: t.services.items.s1_title, desc: t.services.items.s1_desc, img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop", hoverColor: "from-[#FFD700]", icon: "/servicesImg/branding1.png" },
    { title: t.services.items.s2_title, desc: t.services.items.s2_desc, img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop", hoverColor: "from-[#00D4FF]", icon: "/servicesImg/coding2.png" },
    { title: t.services.items.s3_title, desc: t.services.items.s3_desc, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop", hoverColor: "from-[#FF4D4D]", icon: "/servicesImg/advertisig-agency3.png" },
    { title: t.services.items.s4_title, desc: t.services.items.s4_desc, img: "/servicesImg/uiux.jpg", hoverColor: "from-[#A020F0]", icon: "/servicesImg/ux4.png" },
    { title: t.services.items.s5_title, desc: t.services.items.s5_desc, img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop", hoverColor: "from-[#00FF7F]", icon: "/servicesImg/usability5.png" },
    { title: t.services.items.s6_title, desc: t.services.items.s6_desc, img: "https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=1470&auto=format&fit=crop", hoverColor: "from-[#FF8C00]", icon: "/servicesImg/seo6.png" },
  ];

  return (
    <section className="bg-black text-white">

      <div className="pt-24 pb-10 text-center container mx-auto px-6">
        <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">{t.services.tag}</span>
        <motion.h2
          animate={{ x: 50 }}
          transition={{ duration: 2, delay: 1, ease: easeInOut, repeat: Infinity }}
          className="text-4xl md:text-5xl font-bold mt-2">{t.services.title}</motion.h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">{t.services.desc}</p>
      </div>

      <div ref={containerRef} className="relative flex flex-col lg:flex-row">

        {/* === বাম পাশ: ORBIT ANIMATION (New) === */}
        <div className="hidden lg:flex w-1/2 h-screen sticky top-0 items-center justify-center overflow-hidden">

          <div className="relative w-[500px] h-[500px] flex items-center justify-center">

            {/* ১. সেন্ট্রাল লোগো */}
            <div className="absolute z-20 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <Image
                src="https://i.ibb.co/pjcnbgCd/Neon-Studio-icon.png" // আপনার লোগো
                alt="Center Logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>

            {/* ২. ভেতরের বৃত্তের লাইন */}
            <div className="absolute border border-white/10 rounded-full w-[280px] h-[280px]"></div>

            {/* ৩. বাইরের বৃত্তের লাইন */}
            <div className="absolute border border-white/10 rounded-full w-[450px] h-[450px]"></div>


            {/* --- অরবিটিং আইকনসমূহ --- */}

            {/* ইনার সার্কেল (৩টি আইকন) - বাম দিকে ঘুরবে */}
            <OrbitingIcon icon={servicesData[0].icon} radius={140} duration={25} angle={0} />
            <OrbitingIcon icon={servicesData[1].icon} radius={140} duration={25} angle={120} />
            <OrbitingIcon icon={servicesData[2].icon} radius={140} duration={25} angle={240} />

            {/* আউটার সার্কেল (৩টি আইকন) - ডান দিকে ঘুরবে (Reverse) */}
            <OrbitingIcon icon={servicesData[3].icon} radius={225} duration={35} angle={60} reverse={true} />
            <OrbitingIcon icon={servicesData[4].icon} radius={225} duration={35} angle={180} reverse={true} />
            <OrbitingIcon icon={servicesData[5].icon} radius={225} duration={35} angle={300} reverse={true} />

            {/* Scroll Down টেক্সট */}
            <p className="absolute bottom-[-60px] text-gray-500 text-sm font-bold tracking-widest uppercase animate-pulse">
              Scroll Down &darr;
            </p>

          </div>
        </div>

        {/* === ডান পাশ: Cards Scroll Area === */}
        <div className="w-full lg:w-1/2 px-4 md:px-0 pb-20">
          {servicesData.map((service, i) => {
            const targetScale = 1 - (servicesData.length - i) * 0.05;
            const rangeStart = i * (1 / servicesData.length);
            const rangeEnd = 1;

            return (
              <Card
                key={i}
                i={i}
                {...service}
                progress={scrollYProgress}
                range={[rangeStart, rangeEnd]}
                targetScale={targetScale}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}