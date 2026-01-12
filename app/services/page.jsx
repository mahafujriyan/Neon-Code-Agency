// app/services/page.jsx
"use client";

import { useLanguage } from "@/context/LanguageContext";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
// import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  if (!t) return null;

  // সার্ভিস লিস্টের সাথে লিংক (Slug) ম্যাপ করা
  const servicesList = [
    { slug: "branding", title: t.services.items.s1_title, desc: t.services.items.s1_desc, img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" },
    { slug: "web-development", title: t.services.items.s2_title, desc: t.services.items.s2_desc, img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop" },
    { slug: "digital-marketing", title: t.services.items.s3_title, desc: t.services.items.s3_desc, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" },
    { slug: "ui-ux-design", title: t.services.items.s4_title, desc: t.services.items.s4_desc, img: "/servicesImg/uiux.jpg" },
    { slug: "mobile-app", title: t.services.items.s5_title, desc: t.services.items.s5_desc, img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop" },
    { slug: "seo", title: t.services.items.s6_title, desc: t.services.items.s6_desc, img: "https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=1000&auto=format&fit=crop" },
  ];

  return (
    <main className="bg-black text-white min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        
        {/* হেডার */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.services.title}</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.services.desc}</p>
        </div>

        {/* সার্ভিস গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <Link key={index} href={`/services/${service.slug}`}>
              <motion.div
                whileHover={{ y: -10 }} // হোভার করলে উপরে উঠবে
                className="group relative bg-[#101010] rounded-2xl overflow-hidden border border-white/10 h-[400px] cursor-pointer"
              >
                {/* ইমেজ */}
                <div className="relative h-1/2 w-full overflow-hidden">
                  <Image 
                    src={service.img} 
                    alt={service.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* হোভার ওভারলে */}
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* কন্টেন্ট */}
                <div className="p-8 h-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-3">{service.desc}</p>
                  </div>
                  
                  {/* Read More Link */}
                  <div className="flex items-center text-sm font-bold text-white uppercase tracking-wider mt-4">
                    Explore Service 
                    <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>

              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}