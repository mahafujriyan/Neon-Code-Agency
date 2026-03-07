"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PricingCard({ plan, lang, labels, activeMode, index }) {
  const name = plan.names[lang] || plan.names.en;
  const description = plan.descriptions[lang] || plan.descriptions.en;
  const features = plan.features[lang] || plan.features.en;
  const price = plan.prices[activeMode] ?? plan.prices.oneTime ?? plan.prices.monthly;
  const ctaLabel = labels.ctas[plan.ctaType] || labels.ctas.default;
  const suffix = labels.priceSuffix[activeMode] || "";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      whileHover={{ y: -10 }}
      className={`relative rounded-2xl border p-6 backdrop-blur-xl transition-all duration-300 ${
        plan.featured
          ? "scale-[1.03] bg-gradient-to-br from-[#1f2937]/95 to-[#111827]/95 border-[#00F5D4] shadow-[0_0_30px_rgba(0,245,212,0.30)]"
          : "bg-white/5 border-[#1F2937] hover:border-[#00F5D4]/50 hover:shadow-[0_0_26px_rgba(124,58,237,0.20)]"
      }`}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-[#00F5D4] bg-[#0B0F19] px-3 py-1 text-[11px] font-semibold tracking-wide text-[#00F5D4]">
          {labels.popularBadge}
        </span>
      )}

      <h3 className="mt-2 text-2xl font-bold text-white">{name}</h3>
      <p className="mt-2 text-sm text-[#9CA3AF]">{description}</p>

      <div className="mt-6 flex items-end gap-2">
        <span className="text-4xl font-extrabold text-white">${price}</span>
        <span className="pb-1 text-sm text-[#9CA3AF]">{suffix}</span>
      </div>

      <ul className="mt-6 space-y-3">
        {features.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-[#E5E7EB]">
            <span className="mt-[2px] text-[#00F5D4]">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className="mt-7 block rounded-xl bg-gradient-to-r from-[#00F5D4] to-[#7C3AED] px-4 py-3 text-center text-sm font-semibold text-[#0B0F19] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,245,212,0.35)]"
      >
        {ctaLabel}
      </Link>
    </motion.article>
  );
}
