"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  
  // প্রথমবার মাউন্ট হয়েছে কিনা তা ট্র্যাক করার জন্য
  const isFirstRender = useRef(true);

  useEffect(() => {
    // ১. চেক করি আগে কখনো লোড হয়েছে কিনা (sessionStorage)
    const hasLoadedOnce = sessionStorage.getItem("has-loaded");

    // ২. যদি প্রথমবার রেন্ডার হয় অথবা সেশন স্টোরেজ না থাকে
    if (isFirstRender.current || !hasLoadedOnce) {
      sessionStorage.setItem("has-loaded", "true");
      isFirstRender.current = false; // পরবর্তী পরিবর্তনের জন্য ফ্ল্যাগ অফ করে দিলাম
      return; // এখানেই থেমে যাবে, রিফ্রেশে লোডার দেখাবে না
    }

    // ৩. শুধুমাত্র পেজ চেঞ্জ বা নেভিগেশন হলে নিচের অংশ কাজ করবে
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // ৮০০ মিলিসেকেন্ড পর লোডার চলে যাবে

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#050505]"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs tracking-[0.4em] uppercase text-gray-400">
              Loading
            </span>

            <div className="w-40 h-[2px] bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 0.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}