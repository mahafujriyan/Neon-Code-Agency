
"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import Image from "next/image";


export default function Footer() {

  const { t } = useLanguage();

  if (!t) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050505] text-white pt-20 pb-10 border-t border-white/10 overflow-hidden">
      
      {/* ব্যাকগ্রাউন্ড গ্লো */}
      <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* === টপ সেকশন === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* ১. লোগো এবং বিবরণ */}
          <div className="space-y-6">
            
            {/* লোগো সেকশন */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* 👇 এখানে আপনার লোগো বসানো হয়েছে */}
              <Image 
                src="https://i.ibb.co/pjcnbgCd/Neon-Studio-icon.png" // পাবলিক ফোল্ডারের পাথ
                width={40} 
                height={40} 
                alt="NeonCode Logo" 
                className="rounded-lg object-contain" // কিছুটা রাউন্ডেড করা হয়েছে
              />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                NeonCode
              </span>
            </Link>

            <p className="text-gray-400 leading-relaxed text-sm">
              {t.footer.desc}
            </p>
            
            {/* সোশ্যাল আইকনস */}
            <div className="flex gap-4">
            <a href="https://x.com/neoncode_co" target="_blank">
                <SocialIcon icon={<TwitterIcon />} />
              </a>
              <a href="https://www.facebook.com/neoncode.co" target="_blank">
                <SocialIcon icon={<FacebookIcon />} />
              </a>
              <a href="https://www.instagram.com/neoncode.co" target="_blank">
                <SocialIcon icon={<InstagramIcon />} />
              </a>
              <a href="https://www.linkedin.com/company/neoncode" target="_blank">
                <SocialIcon icon={<LinkedinIcon />} />
              </a>
            </div>
          </div>

          {/* ২. কুইক লিঙ্কস */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t.footer.titles.links}</h3>
            <ul className="space-y-3">
              {["/", "/about", "/portfolio", "/career", "/contact"].map((path, index) => (
                <li key={index}>
                  <Link href={path} className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-blue-400 transition-all duration-300"></span>
                    {t.footer.links[index]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ৩. সার্ভিসেস */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t.footer.titles.services}</h3>
            <ul className="space-y-3">
              {t.footer.services.map((service, index) => (
                <li key={index} className="text-gray-400 hover:text-purple-400 transition-colors text-sm cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* ৪. নিউজলেটার */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t.footer.titles.newsletter}</h3>
            <p className="text-gray-400 text-sm mb-4">{t.footer.newsletter_desc}</p>
            
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder={t.footer.placeholder} 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-600"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all text-sm shadow-lg shadow-blue-500/20">
                {t.footer.btn}
              </button>
            </form>
          </div>

        </div>


        {/* === বটম সেকশন === */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            {t.footer.copyright}
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">{t.footer.privacy}</Link>
            <Link href="#" className="hover:text-white transition-colors">{t.footer.terms}</Link>
          </div>

          {/* ব্যাক টু টপ বাটন */}
          <button 
            onClick={scrollToTop} 
            className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group"
          >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:-translate-y-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
          </button>
        </div>

      </div>
    </footer>
  );
}

// === আইকন কম্পোনেন্টস ===
function SocialIcon({ icon }) {
  return (
    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      {icon}
    </div>
  );
}

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
  >
    <path d="M18.244 2H21.78l-7.73 8.837L23 22h-6.97l-5.46-6.49L4.99 22H1.45l8.27-9.45L1 2h7.15l4.93 5.88L18.244 2Zm-1.22 18h1.96L7.04 4H5L17.02 20Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);