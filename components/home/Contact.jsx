// app/home/Contact.jsx
"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
// import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  if (!t) return null;

  return (
    <section id="contact" className="relative w-full py-24 bg-[#050505] text-white overflow-hidden">
      
      {/* ব্যাকগ্রাউন্ড গ্লো */}
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* === ১. বাম পাশ: ইনফরমেশন === */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                {t.contact.tag}
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {t.contact.title}
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
                {t.contact.desc}
              </p>
            </motion.div>

            {/* কন্টাক্ট ডিটেইলস কার্ডস */}
            <div className="flex flex-col gap-6">
              
              {/* Address */}
              <motion.div 
                 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                 className="flex items-center gap-5 p-5 border border-white/5 rounded-2xl bg-white/5 hover:border-blue-500/30 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.contact.info.address_title}</h4>
                  <p className="text-gray-400">{t.contact.info.address}</p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                 className="flex items-center gap-5 p-5 border border-white/5 rounded-2xl bg-white/5 hover:border-purple-500/30 transition-colors"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.contact.info.phone_title}</h4>
                  <p className="text-gray-400">{t.contact.info.phone}</p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                 className="flex items-center gap-5 p-5 border border-white/5 rounded-2xl bg-white/5 hover:border-green-500/30 transition-colors"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.contact.info.email_title}</h4>
                  <p className="text-gray-400">{t.contact.info.email}</p>
                </div>
              </motion.div>

            </div>
          </div>


          {/* === ২. ডান পাশ: কন্টাক্ট ফর্ম === */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
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
      </div>
    </section>
  );
}