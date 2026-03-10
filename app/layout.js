import { Poppins, Hind_Siliguri } from "next/font/google"; // ১. আমাদের ফন্ট ইম্পোর্ট
import "./globals.css";
import Navbar from "@/components/Navbar";

import { LanguageProvider } from "@/context/LanguageContext";
import GTMPageView from "@/components/GTMPageView";
import Script from "next/script";
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
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-NLB229SN";

  return (
    <html lang="en">
   
      <body
        className={`${poppins.variable} ${hindSiliguri.variable} flex flex-col min-h-screen text-white bg-black`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
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
