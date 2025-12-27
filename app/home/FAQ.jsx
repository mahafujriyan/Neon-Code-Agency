// app/home/FAQ.jsx
"use client";

import { useLanguage } from "../../context/LanguageContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0); // প্রথমটি ডিফল্টভাবে খোলা থাকবে

  if (!t) return null;

  // প্রশ্ন টগল করার ফাংশন
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 bg-black text-white overflow-hidden">
      
      {/* ব্যাকগ্রাউন্ড গ্লো */}
      <div className="absolute left-[-20%] top-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* === ১. বাম পাশ: টাইটেল এবং ইনফো === */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                {t.faq.tag}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {t.faq.title}
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                {t.faq.desc}
              </p>

              {/* সাপোর্ট বাটন */}
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300 group">
                <span className="font-semibold">Contact Support</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </motion.div>
          </div>


          {/* === ২. ডান পাশ: একর্ডিয়ন (Accordions) === */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {t.faq.questions.map((item, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => toggleFAQ(index)}
                  className={`border rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "bg-[#101010] border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]" 
                      : "bg-[#050505] border-white/10 hover:border-white/30"
                  }`}
                >
                  
                  {/* প্রশ্ন (Header) */}
                  <div className="p-6 flex justify-between items-center gap-4">
                    <h3 className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? "text-white" : "text-gray-300"}`}>
                      {item.q}
                    </h3>
                    
                    {/* আইকন (+ / -) */}
                    <div className={`relative w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "bg-blue-500 border-blue-500 text-white rotate-180" : "border-white/20 text-gray-400"}`}>
                       {isOpen ? (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M4.25 12a.75.75 0 01.75-.75h14a.75.75 0 010 1.5H5a.75.75 0 01-.75-.75z" clipRule="evenodd" /></svg> // মাইনাস
                       ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" /></svg> // প্লাস
                       )}
                    </div>
                  </div>

                  {/* উত্তর (Body) - অ্যানিমেশন */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}