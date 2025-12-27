// app/services/[slug]/page.jsx
"use client";

import { useLanguage } from "../../../context/LanguageContext";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function ServiceDetail() {
  const { t } = useLanguage();
  
  // URL থেকে slug নেওয়া (যেমন: branding, web-development)
  const params = useParams();
  const slug = params.slug;

  if (!t) return null;

  // বর্তমান পেজের ডাটা খুঁজে বের করা
  const serviceInfo = t.service_details[slug];

  // যদি ভুল URL হয়
  if (!serviceInfo) {
    return <div className="text-white text-center pt-40">Service Not Found</div>;
  }

  return (
    <main className="bg-black text-white min-h-screen pt-24 pb-20">
      
      {/* === ১. হিরো সেকশন === */}
      <section className="container mx-auto px-6 mb-20 text-center">
        <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">
          Service Details
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          {serviceInfo.title}
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          {serviceInfo.full_desc}
        </p>
      </section>

      {/* === ২. ফিচার এবং ইমেজ === */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* ফিচার লিস্ট */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceInfo.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-[#101010] border border-white/10 rounded-xl hover:border-blue-500/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">✓</div>
                  <span className="font-semibold">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-8">
              <Link href="/contact" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all">
                Start a Project
              </Link>
            </div>
          </div>

          {/* সাইড ইমেজ (ডামি) */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10">
             <Image 
               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
               alt={serviceInfo.title}
               fill
               className="object-cover"
             />
          </div>

        </div>
      </section>

    </main>
  );
}