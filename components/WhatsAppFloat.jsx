"use client";

import Image from "next/image";

export default function ContactWhatsAppFloat() {
  return (
    <a
      href="https://wa.me/8801344224787"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 group"
    >
      {/* Text bubble */}
      <div className="hidden md:block bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg animate-pulse group-hover:animate-none">
        Contact Us
      </div>

      {/* WhatsApp Icon */}
      <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
        <Image
          src="/whatsapp.png"
          alt="Contact NeonCode on WhatsApp"
          width={30}
          height={30}
          priority
        />
      </div>
    </a>
  );
}
