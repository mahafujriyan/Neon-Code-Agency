// app/contact/page.jsx
"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  const { t } = useLanguage();

  if (!t) return null;

  return (
    <main className="bg-black text-white min-h-screen pt-24 pb-20">
      
      <div className="container mx-auto px-6">
        
        {/* === ১. হেডার সেকশন === */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Lets <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Connect</span>
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.contact.desc}
          </p>
        </div>


        {/* === ২. মেইন কন্টেন্ট === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* --- বাম পাশ: ইনফরমেশন কার্ডস --- */}
          <div className="space-y-8">
            
            {/* Address Card */}
            <ContactCard 
              // ফিক্স: আইকনটি এখন একটি পূর্ণাঙ্গ SVG কম্পোনেন্ট হিসেবে পাস করা হচ্ছে
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              }
              title={t.contact.info.address_title}
              value={t.contact.info.address}
              color="text-blue-400"
              bgColor="bg-blue-500/10"
              borderColor="hover:border-blue-500/50"
            />

            {/* Phone Card */}
            <ContactCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              }
              title={t.contact.info.phone_title}
              value={t.contact.info.phone}
              color="text-green-400"
              bgColor="bg-green-500/10"
              borderColor="hover:border-green-500/50"
            />

            {/* Email Card */}
            <ContactCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              }
              title={t.contact.info.email_title}
              value={t.contact.info.email}
              color="text-purple-400"
              bgColor="bg-purple-500/10"
              borderColor="hover:border-purple-500/50"
            />

            {/* সোশ্যাল লিংকস */}
            <div className="pt-8">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                    <SocialLink href="#" label="FB" />
                    <SocialLink href="#" label="TW" />
                    <SocialLink href="#" label="IN" />
                    <SocialLink href="#" label="IG" />
                </div>
            </div>

          </div>


          {/* --- ডান পাশ: কন্টাক্ট ফর্ম --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#101010] p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative"
          >
             {/* ফর্মের ডেকোরেটিভ গ্লো */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full pointer-events-none"></div>

             <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-400 ml-1">{t.contact.form.name}</label>
                    <input type="text" className="w-full bg-[#050505] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600" placeholder="John Doe" />
                  </div>
                  
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-400 ml-1">{t.contact.form.email}</label>
                    <input type="email" className="w-full bg-[#050505] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600" placeholder="john@example.com" />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-400 ml-1">{t.contact.form.subject}</label>
                    <input type="text" className="w-full bg-[#050505] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600" placeholder="Project Inquiry" />
                </div>

                {/* Message */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-400 ml-1">{t.contact.form.message}</label>
                    <textarea rows="5" className="w-full bg-[#050505] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600 resize-none" placeholder="Tell us about your project..."></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300 transform hover:-translate-y-1">
                  {t.contact.form.btn}
                </button>
             </form>

          </motion.div>

        </div>


        {/* === ৩. ম্যাপ সেকশন === */}
        <div className="mt-24 rounded-3xl overflow-hidden border border-white/10 h-[400px] w-full grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902442430139!2d90.39108031536276!3d23.75085809468068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b888ad3b91bf%3A0xb27299b8b473866d!2sDhaka!5e0!3m2!1sen!2sbd!4v1646294378945!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
            ></iframe>
        </div>

      </div>
    </main>
  );
}

// === ছোট কম্পোনেন্টস ===

function ContactCard({ icon, title, value, color, bgColor, borderColor }) {
    return (
        <div className={`flex items-center gap-5 p-6 border border-white/10 rounded-2xl bg-[#101010] transition-colors duration-300 ${borderColor}`}>
            {/* আইকন রেন্ডারিং ফিক্স করা হয়েছে */}
            <div className={`w-14 h-14 ${bgColor} ${color} rounded-full flex items-center justify-center`}>
                {icon}
            </div>
            <div>
                <h4 className="text-white font-bold text-lg">{title}</h4>
                <p className="text-gray-400">{value}</p>
            </div>
        </div>
    )
}

function SocialLink({ href, label }) {
    return (
        <Link href={href} className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all hover:-translate-y-1 font-bold text-sm">
            {label}
        </Link>
    )
}