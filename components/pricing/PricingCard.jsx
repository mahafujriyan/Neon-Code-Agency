"use client";

import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "8801344224787";

const buildWhatsAppLink = ({ lang, serviceLabel, pageLabel, packageName, modeLabel, price, suffix }) => {
  const message =
    lang === "bn"
      ? `Assalamu Alaikum, ami apnader ${serviceLabel}${pageLabel ? ` er ${pageLabel}` : ""} ${packageName} package somporke bistarito jante chai. Billing: ${modeLabel}. Price: $${price} ${suffix}. Plz janaben.`
      : `Hello, I want to know details about your ${serviceLabel}${pageLabel ? ` ${pageLabel}` : ""} ${packageName} package. Billing: ${modeLabel}. Price: $${price} ${suffix}. Please share details.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message.trim())}`;
};

export default function PricingCard({ plan, lang, labels, activeMode, index, serviceKey, pageKey }) {
  const name = plan.names[lang] || plan.names.en;
  const description = plan.descriptions[lang] || plan.descriptions.en;
  const features = plan.features[lang] || plan.features.en;
  const price = plan.prices[activeMode] ?? plan.prices.oneTime ?? plan.prices.monthly;
  const ctaLabel = labels.ctas[plan.ctaType] || labels.ctas.default;
  const suffix = labels.priceSuffix[activeMode] || "";
  const serviceLabel = labels.serviceTabs?.[serviceKey] || serviceKey;
  const pageLabel = pageKey ? labels.pageTabs?.[pageKey] || pageKey : "";
  const modeLabel = labels.modeTabs?.[activeMode] || activeMode;
  const waHref = buildWhatsAppLink({
    lang,
    serviceLabel,
    pageLabel,
    packageName: name,
    modeLabel,
    price,
    suffix,
  });

  const highlightTone = plan.featured
    ? "from-[#00F5D4]/20 via-[#00F5D4]/5 to-transparent"
    : "from-[#7C3AED]/20 via-[#7C3AED]/5 to-transparent";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      whileHover={{ y: -10, scale: 1.01 }}
      className={`group relative isolate overflow-hidden rounded-[28px] border p-6 backdrop-blur-xl transition-all duration-300 ${
        plan.featured
          ? "scale-[1.03] bg-gradient-to-br from-[#1f2937]/95 via-[#0f182b]/95 to-[#0b0f19]/95 border-[#00F5D4]/70 shadow-[0_0_38px_rgba(0,245,212,0.22)]"
          : "bg-gradient-to-br from-[#111827]/90 to-[#0b0f19]/95 border-[#1F2937] hover:border-[#00F5D4]/40 hover:shadow-[0_0_32px_rgba(124,58,237,0.18)]"
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className={`absolute -right-24 -top-24 h-52 w-52 rounded-full bg-gradient-to-br ${highlightTone} blur-3xl`} />
        <div className="absolute -left-16 bottom-6 h-32 w-32 rounded-full bg-[#0EA5E9]/10 blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.00)_45%)]" />
      </div>

      {plan.featured && (
        <span className="absolute right-5 top-5 rounded-full border border-[#00F5D4]/70 bg-[#03111a]/90 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-[#67FFE9]">
          {labels.popularBadge}
        </span>
      )}

      <div className="relative z-10">
        <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#CBD5E1]">
          {activeMode === "monthly" ? "Retainer" : activeMode === "daily" ? "Campaign" : "Project"}
        </p>
        <h3 className="mt-4 text-2xl font-bold text-white">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">{description}</p>
      </div>

      <div className="relative z-10 mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
        <div className="flex items-end gap-2">
          <span className="text-4xl font-extrabold tracking-tight text-white">${price}</span>
          <span className="pb-1 text-sm text-[#9CA3AF]">{suffix}</span>
        </div>
        <p className="mt-2 text-xs text-[#94A3B8]">Scope-based customization available</p>
      </div>

      <ul className="relative z-10 mt-6 space-y-3">
        {features.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-[#E5E7EB]">
            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#00F5D4]/40 bg-[#00F5D4]/15 text-[11px] text-[#67FFE9]">
              +
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative z-10 mt-7 block rounded-xl px-4 py-3 text-center text-sm font-semibold transition-all duration-300 ${
          plan.featured
            ? "bg-gradient-to-r from-[#00F5D4] to-[#4ADE80] text-[#062326] hover:brightness-110 hover:shadow-[0_0_22px_rgba(0,245,212,0.35)]"
            : "border border-white/20 bg-white/5 text-white hover:border-[#00F5D4]/55 hover:bg-[#00F5D4]/10"
        }`}
      >
        {ctaLabel} &gt;
      </a>
    </motion.article>
  );
}
