// app/login/page.jsx
"use client";

import { useLanguage } from "../../context/LanguageContext";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
  const { t } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);

  if (!t) return null;

  return (
    <main className="min-h-screen w-full flex bg-black text-white pt-20">
      
      {/* === ১. বাম পাশ: ভিজ্যুয়াল সেকশন (শুধু ডেস্কটপে দেখাবে) === */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden">
        {/* ব্যাকগ্রাউন্ড ইমেজ */}
        <Image 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
          alt="Login Background"
          fill
          className="object-cover"
        />
        
        {/* কালার ওভারলে */}
        <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

        {/* টেক্সট কন্টেন্ট (ইমেজের ওপর) */}
        <div className="absolute bottom-20 left-20 z-10 max-w-md">
          <h2 className="text-4xl font-bold mb-4">Building the Future of Digital Experience.</h2>
          <p className="text-gray-300">Join NeonStudio and transform your brand with our innovative solutions.</p>
        </div>
      </div>


      {/* === ২. ডান পাশ: লগইন ফর্ম === */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
        
        {/* ব্যাকগ্রাউন্ড গ্লো */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8 relative z-10"
        >
          
          {/* হেডার */}
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
              {t.auth.login_title}
            </h1>
            <p className="text-gray-400">{t.auth.login_desc}</p>
          </div>

          {/* ফর্ম */}
          <form className="space-y-6">
            
            {/* ইমেইল */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">{t.auth.email}</label>
              <input 
                type="email" 
                placeholder="name@example.com"
                className="w-full bg-[#101010] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
              />
            </div>

            {/* পাসওয়ার্ড */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">{t.auth.password}</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full bg-[#101010] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600 pr-12"
                />
                {/* আই আইকন (Show/Hide) */}
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  )}
                </button>
              </div>
            </div>

            {/* রিমেম্বার ও ফরগট */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-blue-500/50" />
                <span className="text-gray-400 group-hover:text-white transition-colors">{t.auth.remember}</span>
              </label>
              <Link href="#" className="text-blue-400 hover:text-blue-300 font-medium">
                {t.auth.forgot}
              </Link>
            </div>

            {/* বাটন */}
            <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300 transform hover:-translate-y-1">
              {t.auth.btn_login}
            </button>

          </form>

          {/* ডিভাইডার */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-black text-gray-500 uppercase tracking-wider">{t.auth.divider}</span>
            </div>
          </div>

          {/* সোশ্যাল লগইন */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-3 border border-white/10 rounded-xl hover:bg-white/5 transition-all text-sm font-semibold">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
              Google
            </button>
            <button className="flex items-center justify-center gap-3 py-3 border border-white/10 rounded-xl hover:bg-white/5 transition-all text-sm font-semibold">
              <img src="https://www.svgrepo.com/show/448224/github.svg" className="w-5 h-5 invert" alt="GitHub" />
              GitHub
            </button>
          </div>

          {/* সাইন আপ লিংক */}
          <p className="text-center text-gray-400 text-sm">
            {t.auth.no_account}{" "}
            <Link href="/signup" className="text-blue-400 hover:text-white font-bold transition-colors">
              {t.auth.signup_link}
            </Link>
          </p>

        </motion.div>
      </div>

    </main>
  );
}