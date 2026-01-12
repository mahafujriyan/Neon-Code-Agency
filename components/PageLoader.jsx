// components/PageLoader.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return; 
    }

    setLoading(true);
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md"
        >
          
          {/* === স্টাইলিশ লোডার (Small Neon Spinner) === */}
          <div className="relative w-16 h-16">
            
            {/* বাইরের রিং (নীল) */}
            <motion.span
              className="absolute w-full h-full border-4 border-transparent border-t-blue-500 rounded-full box-border"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              style={{ boxShadow: "0 0 15px rgba(59, 130, 246, 0.6)" }} 
            ></motion.span>

            {/* ভেতরের রিং (বেগুনি - উল্টো ঘুরবে) */}
            <motion.span
              className="absolute top-2 left-2 w-12 h-12 border-4 border-transparent border-b-purple-500 rounded-full box-border"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              style={{ boxShadow: "0 0 15px rgba(168, 85, 247, 0.6)" }}
            ></motion.span>

          </div>

          {/* লোডিং টেক্সট */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-xs font-bold tracking-widest text-gray-400 uppercase animate-pulse"
          >
            Loading...
          </motion.p>

        </motion.div>
      )}
    </AnimatePresence>
  );
}