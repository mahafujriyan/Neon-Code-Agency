import { Poppins, Hind_Siliguri } from "next/font/google"; // ১. আমাদের ফন্ট ইম্পোর্ট
import "./globals.css";
import Navbar from "@/components/Navbar";

import { LanguageProvider } from "@/context/LanguageContext";
import { GoogleTagManager } from "@next/third-parties/google";
import GTMPageView from "@/components/GTMPageView";
import React from "react";
import Preloader from "../components/Preloader";   // প্রথমবার লোড হওয়ার জন্য
import DynamicPageLoader from "@/components/DynamicPageLoader";
import Footer from "@/components/Footer";

import ContactWhatsAppFloat from "../components/WhatsAppFloat";

// ২. Poppins (ইংরেজি) কনফিগারেশন
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins", // ভেরিয়েবল নাম
});

// ৩. Hind Siliguri (বাংলা) কনফিগারেশন
const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind", 
});

export const metadata = {
  title: "NeonCode ",
  description: "Digital Solutions",
  icons: {
    icon: "/navbaricon/navicon.jpg",
    shortcut:"/navbaricon/navicon.jpg",
    apple: "/navbaricon/navicon.jpg",
  },
};
/** @param {{ children: React.ReactNode }} props */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
      <body
        className={`${poppins.variable} ${hindSiliguri.variable} flex flex-col min-h-screen text-white bg-black`}
      >
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-NLB229SN"} />
        <LanguageProvider>
          <GTMPageView />
          <Preloader /> {/* রিফ্রেশ দিলে কাজ করবে (৩.৫ সেকেন্ড) */}
          <DynamicPageLoader />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ContactWhatsAppFloat />
        </LanguageProvider>
      </body>
    </html>
  );
}
