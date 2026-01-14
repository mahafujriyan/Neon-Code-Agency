import { Poppins, Hind_Siliguri } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

// ১. দুটো লোডার ইম্পোর্ট করুন
import Preloader from "@/components/Preloader";   // প্রথমবার লোড হওয়ার জন্য
import PageLoader from "@/components/PageLoader"; // এক পেজ থেকে অন্য পেজে যাওয়ার জন্য

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-poppins" 
});

const hindSiliguri = Hind_Siliguri({ 
  subsets: ["bengali"], 
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-hind" 
});

export const metadata = {
  title: "NeonCode Agency",
  description: "Digital Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${hindSiliguri.variable} flex flex-col min-h-screen text-white bg-black`}>
        <LanguageProvider>
          
          {/* === ২. দুটো লোডার পাশাপাশি বসিয়ে দিন === */}
          
          <Preloader />   {/* রিফ্রেশ দিলে কাজ করবে (৩.৫ সেকেন্ড) */}
          <PageLoader />  {/* লিংকে ক্লিক করলে কাজ করবে (১ সেকেন্ড) */}

          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          
        </LanguageProvider>
      </body>
    </html>
  );
}