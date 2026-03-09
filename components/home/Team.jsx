// app/home/Team.jsx
"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Team() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null); // সেকশন রেফারেন্স

  // বাটন ক্লিক হ্যান্ডলার
  const handleShowAll = () => {
    setShowAll(true);
    // বাটনে ক্লিক করলে সেকশনের শুরুতে স্ক্রল করে নিয়ে যাবে (যাতে শুরু থেকে দেখা যায়)
    if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // স্ক্রল ডিটেকশন লজিক (ফিক্সড)
  useEffect(() => {
    if (!showAll) return;

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        
        // লজিক: সেকশনটি কি এখন ভিউপোর্টের বাইরে চলে গেছে?
        // rect.bottom < 0 : মানে সেকশনটি উপরে উঠে গেছে (দেখা যাচ্ছে না)
        // rect.top > window.innerHeight : মানে সেকশনটি নিচে নেমে গেছে (দেখা যাচ্ছে না)
        
        const isOutOfView = rect.bottom < 0 || rect.top > window.innerHeight;

        if (isOutOfView) {
          setShowAll(false); // সেকশন থেকে বের হলেই স্লাইডারে ফিরে যাবে
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAll]);

  if (!t) return null;

  // টিম মেম্বার ডাটা
const teamData = [
  { id: 1, name: t.team.members[0].name, role: t.team.members[0].role, img: "https://i.ibb.co/Jjtt8b9L/M-Abdur-Rahaman.jpg", color: "group-hover:border-blue-500" },
  { id: 2, name: t.team.members[1].name, role: t.team.members[1].role, img: "https://i.ibb.co/zWsL7Swz/Sahed.jpg", color: "group-hover:border-purple-500" },
  { id: 3, name: t.team.members[2].name, role: t.team.members[2].role, img: "https://i.ibb.co/fZBXfmR/Tareq-Hassan.jpg", color: "group-hover:border-pink-500" },
  { id: 4, name: t.team.members[3].name, role: t.team.members[3].role, img: "https://i.ibb.co/SD9yJDnK/i-QBAL.jpg", color: "group-hover:border-yellow-500" },
  { id: 5, name: t.team.members[4].name, role: t.team.members[4].role, img: "https://i.ibb.co/67pgYb73/Mahfuj-vai.jpg", color: "group-hover:border-cyan-500" },
  { id: 6, name: t.team.members[5].name, role: t.team.members[5].role, img: "https://i.ibb.co/zHLGHRv3/abdullah-dev.jpg", color: "group-hover:border-red-500" },
  { id: 7, name: t.team.members[6].name, role: t.team.members[6].role, img: "https://i.ibb.co/0R9r5r9w/Arko.jpg", color: "group-hover:border-red-500" },
  { id: 8, name: t.team.members[7].name, role: t.team.members[7].role, img: "https://i.ibb.co/nKwJwfm/Redown.jpg", color: "group-hover:border-red-500" },
  { id: 9, name: t.team.members[8].name, role: t.team.members[8].role, img: "https://i.ibb.co/HLs5DgZs/Abdullah-vai.jpg", color: "group-hover:border-red-500" },
  { id: 10, name: t.team.members[9].name, role: t.team.members[9].role, img: "https://i.ibb.co/215WfXVf/sagor.jpg", color: "group-hover:border-green-500" },
];


  const infiniteTeam = [...teamData, ...teamData];

  // কার্ড রেন্ডারার
const MemberCard = ({ member }) => (
  <div className="group w-full rounded-2xl overflow-hidden border border-white/10 bg-black transition-all duration-300">
    
    {/* Image Section */}
    <div className={`relative h-[300px] overflow-hidden ${member.color}`}>
      <Image
        src={member.img}
        alt={member.name}
        fill
        className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
      />

    
    </div>

    {/* Text Section (image এর নিচে) */}
    <div className="p-5 text-center bg-[#0b0b0b]">
      <h3 className="text-lg font-bold text-white mb-1">
        {member.name}
      </h3>
    {/* Fixed WhatsApp Contact */}
    <div>
    <a
      href="https://wa.me/8801344224787"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-500 hover:scale-110 transition-transform"
      title="Contact on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.52 3.48A11.82 11.82 0 0 0 12.01 0C5.38 0 .02 5.37 0 12c0 2.12.55 4.2 1.6 6.04L0 24l6.15-1.6A11.9 11.9 0 0 0 12 24h.01c6.63 0 11.99-5.37 11.99-12 0-3.19-1.24-6.18-3.48-8.52Z"/>
      </svg>
    </a>
  </div>

      <p className="text-blue-400 text-sm font-medium tracking-wide">
        {member.role}
      </p>
      
      <div className="w-10 h-[2px] bg-blue-500/40 mx-auto mt-3 group-hover:w-16 transition-all duration-300"></div>
    </div>

  </div>
);



  return (
    // sectionRef এখানে ব্যবহার করা হয়েছে
    <section ref={sectionRef} className="relative w-full py-24 bg-[#080808] text-white overflow-hidden">
      
      <style jsx>{`
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .team-marquee {
          display: flex;
          width: max-content;
          animation: scrollRight 60s linear infinite;
        }
        .team-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          
          <div className="text-center md:text-left max-w-2xl">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2 block">{t.team.tag}</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.team.title}</h2>
              <p className="text-gray-400 text-lg">{t.team.desc}</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex w-full justify-center md:w-auto md:justify-end"
          >
            <button 
              onClick={handleShowAll} 
              className={`group flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 ${showAll ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={showAll}
            >
              <span className="font-bold text-sm">
                {t.team.view_team}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </motion.div>

        </div>
      </div>

      {showAll ? (
        // Grid View
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="container mx-auto grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {teamData.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </motion.div>
      ) : (
        // Slider View
        <div className="relative w-full overflow-hidden border-y border-white/5 bg-white/5 py-8 backdrop-blur-sm sm:py-10">
          <div className="team-marquee">
            {infiniteTeam.map((member, index) => (
              <div key={`${member.id}-${index}`} className="w-[78vw] max-w-[332px] px-2 sm:w-[332px] sm:px-4">
                <MemberCard member={member} />
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#080808] to-transparent sm:w-20"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#080808] to-transparent sm:w-20"></div>
        </div>
      )}

    </section>
  );
}
