"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // লোডিং টাইম প্রয়োজন অনুযায়ী পরিবর্তন করতে পারেন
    const t = setTimeout(() => setLoading(false), 2500); 
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-transparent pointer-events-none"
          exit={{ 
            opacity: 1, 
            transition: { duration: 1 } 
          }}
        >
          {/* লোডিং টেক্সট বা লোগো (ঐচ্ছিক) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            className="z-10 text-white text-xl font-bold"
          >
            {/* এখানে আপনার লোগো বা 'Loading...' দিতে পারেন */}
              <h2 className="text-2xl font-bold tracking-[0.3em] text-white uppercase animate-pulse">
              Neon Code
            </h2>
          </motion.div>

          {/* প্রধান পর্দার এনিমেশন - এটি নিচ থেকে উপরে যাবে */}
          <motion.div
            initial={{ y: "0%" }}
            animate={{ y: "0%" }}
            exit={{ 
              y: "-100%",
             
              borderBottomLeftRadius: "100vw",
              borderBottomRightRadius: "100vw",
            }}
            transition={{
              duration: 1.1,
              ease: [0.7, 0, 0.3, 1], // Custom Bezier for premium feel
            }}
            className="absolute inset-0 w-full h-[120vh] bg-[#050505]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}