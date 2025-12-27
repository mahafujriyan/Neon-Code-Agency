// app/home/Team.jsx
"use client";

import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Team() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null); // সেকশন রেফারেন্স

  if (!t) return null;

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

  // টিম মেম্বার ডাটা
  const teamData = [
    { id: 1, name: t.team.members[0].name, role: t.team.members[0].role, img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop", color: "group-hover:border-blue-500" },
    { id: 2, name: t.team.members[1].name, role: t.team.members[1].role, img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop", color: "group-hover:border-purple-500" },
    { id: 3, name: t.team.members[2].name, role: t.team.members[2].role, img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop", color: "group-hover:border-green-500" },
    { id: 4, name: t.team.members[3].name, role: t.team.members[3].role, img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop", color: "group-hover:border-pink-500" },
    { id: 5, name: t.team.members[4].name, role: t.team.members[4].role, img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop", color: "group-hover:border-yellow-500" },
    { id: 6, name: t.team.members[5].name, role: t.team.members[5].role, img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1000&auto=format&fit=crop", color: "group-hover:border-cyan-500" },
    { id: 7, name: t.team.members[6].name, role: t.team.members[6].role, img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop", color: "group-hover:border-red-500" },
  ];

  const infiniteTeam = [...teamData, ...teamData];

  // কার্ড রেন্ডারার
  const MemberCard = ({ member }) => (
    <div className={`group relative w-full h-[350px] rounded-2xl overflow-hidden border border-white/10 ${member.color} transition-colors duration-300 bg-black`}>
      <Image src={member.img} alt={member.name} fill className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
      
      <div className="absolute top-4 right-4 flex flex-col gap-3 translate-x-14 group-hover:translate-x-0 transition-transform duration-500 ease-out z-20">
        <Link href="#" className="w-9 h-9 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#0077b5] hover:text-white text-white border border-white/20 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></Link>
        <Link href="#" className="w-9 h-9 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black hover:text-white text-white border border-white/20 transition-all delay-75"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></Link>
        <Link href="#" className="w-9 h-9 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#E1306C] hover:text-white text-white border border-white/20 transition-all delay-100"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></Link>
        <Link href="#" className="w-9 h-9 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#1877F2] hover:text-white text-white border border-white/20 transition-all delay-150"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></Link>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
        <p className="text-blue-400 text-sm font-medium tracking-wide">{member.role}</p>
        <div className="w-12 h-1 bg-white/20 mt-4 group-hover:w-full group-hover:bg-blue-500 transition-all duration-500"></div>
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
            className="w-full md:w-auto flex justify-center md:justify-end"
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
          className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {teamData.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </motion.div>
      ) : (
        // Slider View
        <div className="w-full overflow-hidden border-y border-white/5 py-10 bg-white/5 backdrop-blur-sm relative">
          <div className="team-marquee">
            {infiniteTeam.map((member, index) => (
              <div key={`${member.id}-${index}`} className="px-4 w-[332px]">
                <MemberCard member={member} />
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none"></div>
        </div>
      )}

    </section>
  );
}