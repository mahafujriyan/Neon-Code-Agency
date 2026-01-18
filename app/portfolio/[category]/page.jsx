"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PortfolioCategoryPage() {
  const { category } = useParams();
  const title = decodeURIComponent(category);

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          {title}
        </motion.h1>

        <p className="text-gray-400 text-lg mb-16">
          This section is under development.
        </p>

        <div className="max-w-xl mx-auto bg-[#101010] border border-white/10 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4">Coming Soon 🚀</h2>
          <p className="text-gray-400 mb-8">
            We are preparing high-quality projects for this category.
          </p>

          <Link
            href="/portfolio"
            className="inline-block px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-blue-600 hover:text-white transition"
          >
            Back to Portfolio
          </Link>
        </div>

      </div>
    </main>
  );
}
