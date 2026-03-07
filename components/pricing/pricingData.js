export const pricingContentByLang = {
  en: {
    tag: "PREMIUM PRICING PLANS",
    title: "Choose The Perfect Plan For Your Business",
    desc: "Compare plans by service type, page volume, and billing model to pick the best fit.",
    popularBadge: "MOST POPULAR",
    serviceTabs: {
      website: "Website",
      webApp: "Web App",
      mobileApp: "Mobile App",
      branding: "Branding",
      businessProfile: "Business Profile",
      creativeDesign: "Creative Design",
    },
    modeTabs: {
      monthly: "Monthly",
      oneTime: "One-Time",
      daily: "Daily Campaign",
    },
    pageTabs: {
      p8: "8 Pages",
      p10: "10 Pages",
      p12: "12 Pages",
      p15: "15 Pages",
      p20: "20 Pages",
    },
    priceSuffix: {
      monthly: "/month",
      oneTime: "one-time",
      daily: "/day",
    },
    ctas: {
      default: "Get Started",
      trial: "Start Free Trial",
      consult: "Book Consultation",
    },
    trust: [
      "14-Day Free Trial",
      "No Credit Card Required",
      "Cancel Anytime",
      "Trusted by 500+ companies worldwide",
    ],
  },
  bn: {
    tag: "প্রিমিয়াম প্রাইসিং প্ল্যান",
    title: "আপনার বিজনেসের জন্য সঠিক প্ল্যান বেছে নিন",
    desc: "সার্ভিস টাইপ, পেজ সংখ্যা এবং বিলিং মডেল অনুযায়ী সহজে প্ল্যান কম্পেয়ার করুন।",
    popularBadge: "সবচেয়ে জনপ্রিয়",
    serviceTabs: {
      website: "ওয়েবসাইট",
      webApp: "ওয়েব অ্যাপ",
      mobileApp: "মোবাইল অ্যাপ",
      branding: "ব্র্যান্ডিং",
      businessProfile: "বিজনেস প্রোফাইল",
      creativeDesign: "ক্রিয়েটিভ ডিজাইন",
    },
    modeTabs: {
      monthly: "মাসিক",
      oneTime: "ওয়ান-টাইম",
      daily: "ডেইলি ক্যাম্পেইন",
    },
    pageTabs: {
      p8: "৮ পেজ",
      p10: "১০ পেজ",
      p12: "১২ পেজ",
      p15: "১৫ পেজ",
      p20: "২০ পেজ",
    },
    priceSuffix: {
      monthly: "/মাস",
      oneTime: "একবার",
      daily: "/দিন",
    },
    ctas: {
      default: "শুরু করুন",
      trial: "ফ্রি ট্রায়াল নিন",
      consult: "কনসালটেশন বুক করুন",
    },
    trust: [
      "১৪ দিনের ফ্রি ট্রায়াল",
      "ক্রেডিট কার্ড লাগবে না",
      "যেকোনো সময় ক্যানসেল করতে পারবেন",
      "৫০০+ কোম্পানি আমাদের উপর ভরসা করে",
    ],
  },
};

const buildWebsitePlans = (label) => [
  {
    id: `${label}-launch`,
    featured: false,
    ctaType: "default",
    names: { en: "Launch Package", bn: "লঞ্চ প্যাকেজ" },
    descriptions: {
      en: `${label} setup with clean design and core business pages.`,
      bn: `${label} সেটআপের জন্য ক্লিন ডিজাইন এবং প্রয়োজনীয় বিজনেস পেজ।`,
    },
    prices: { monthly: 180, oneTime: 1450 },
    features: {
      en: ["UI/UX design", "Responsive layout", "On-page SEO", "Basic analytics"],
      bn: ["UI/UX ডিজাইন", "রেসপনসিভ লেআউট", "অন-পেজ SEO", "বেসিক অ্যানালিটিকস"],
    },
  },
  {
    id: `${label}-growth`,
    featured: true,
    ctaType: "trial",
    names: { en: "Growth Package", bn: "গ্রোথ প্যাকেজ" },
    descriptions: {
      en: "Design + development + optimization for higher conversion.",
      bn: "ডিজাইন + ডেভেলপমেন্ট + অপ্টিমাইজেশন সহ কনভার্শন-ফোকাসড সেটআপ।",
    },
    prices: { monthly: 290, oneTime: 2380 },
    features: {
      en: ["Everything in Launch", "CMS integration", "Performance tuning", "2 months support"],
      bn: ["লঞ্চের সবকিছু", "CMS ইন্টিগ্রেশন", "পারফরম্যান্স টিউনিং", "২ মাস সাপোর্ট"],
    },
  },
  {
    id: `${label}-signature`,
    featured: false,
    ctaType: "consult",
    names: { en: "Signature Package", bn: "সিগনেচার প্যাকেজ" },
    descriptions: {
      en: "Premium architecture with scale-ready workflow.",
      bn: "স্কেল-রেডি ওয়ার্কফ্লো সহ প্রিমিয়াম আর্কিটেকচার।",
    },
    prices: { monthly: 390, oneTime: 3320 },
    features: {
      en: ["Everything in Growth", "Advanced tracking", "3 months maintenance", "Priority support"],
      bn: ["গ্রোথের সবকিছু", "অ্যাডভান্সড ট্র্যাকিং", "৩ মাস মেইনটেন্যান্স", "প্রায়োরিটি সাপোর্ট"],
    },
  },
];

export const pricingCatalog = {
  website: {
    billingModes: ["monthly", "oneTime"],
    pageKeys: ["p8", "p10", "p12", "p15", "p20"],
    plansByPage: {
      p8: buildWebsitePlans("8-page website"),
      p10: buildWebsitePlans("10-page website"),
      p12: buildWebsitePlans("12-page website"),
      p15: buildWebsitePlans("15-page website"),
      p20: buildWebsitePlans("20-page website"),
    },
  },
  webApp: {
    billingModes: ["monthly", "oneTime"],
    plans: [
      {
        id: "webapp-core",
        featured: false,
        ctaType: "default",
        names: { en: "Core Web App", bn: "কোর ওয়েব অ্যাপ" },
        descriptions: {
          en: "MVP web app for startups with auth and dashboard.",
          bn: "স্টার্টআপের জন্য অথেনটিকেশন ও ড্যাশবোর্ডসহ MVP ওয়েব অ্যাপ।",
        },
        prices: { monthly: 420, oneTime: 4200 },
        features: {
          en: ["Auth system", "Admin panel", "API integration", "Deployment"],
          bn: ["অথ সিস্টেম", "অ্যাডমিন প্যানেল", "API ইন্টিগ্রেশন", "ডিপ্লয়মেন্ট"],
        },
      },
      {
        id: "webapp-growth",
        featured: true,
        ctaType: "trial",
        names: { en: "Growth Web App", bn: "গ্রোথ ওয়েব অ্যাপ" },
        descriptions: {
          en: "Advanced product with scalable architecture and analytics.",
          bn: "স্কেলেবল আর্কিটেকচার ও অ্যানালিটিকসসহ অ্যাডভান্সড প্রোডাক্ট।",
        },
        prices: { monthly: 690, oneTime: 6900 },
        features: {
          en: ["Everything in Core", "Role management", "Event tracking", "CI/CD setup"],
          bn: ["কোরের সবকিছু", "রোল ম্যানেজমেন্ট", "ইভেন্ট ট্র্যাকিং", "CI/CD সেটআপ"],
        },
      },
      {
        id: "webapp-enterprise",
        featured: false,
        ctaType: "consult",
        names: { en: "Enterprise Web App", bn: "এন্টারপ্রাইজ ওয়েব অ্যাপ" },
        descriptions: {
          en: "Custom architecture, security hardening, and SLA support.",
          bn: "কাস্টম আর্কিটেকচার, সিকিউরিটি হার্ডেনিং এবং SLA সাপোর্ট।",
        },
        prices: { monthly: 990, oneTime: 9900 },
        features: {
          en: ["Custom modules", "Audit log", "High availability", "Dedicated team"],
          bn: ["কাস্টম মডিউল", "অডিট লগ", "হাই অ্যাভেইলেবিলিটি", "ডেডিকেটেড টিম"],
        },
      },
    ],
  },
  mobileApp: {
    billingModes: ["monthly", "oneTime"],
    plans: [
      {
        id: "mobile-mvp",
        featured: false,
        ctaType: "default",
        names: { en: "MVP App", bn: "MVP অ্যাপ" },
        descriptions: {
          en: "Cross-platform app with core features and backend sync.",
          bn: "কোর ফিচার ও ব্যাকএন্ড সিঙ্কসহ ক্রস-প্ল্যাটফর্ম অ্যাপ।",
        },
        prices: { monthly: 550, oneTime: 5500 },
        features: {
          en: ["Android + iOS", "Push notification", "API integration", "App deploy support"],
          bn: ["Android + iOS", "পুশ নোটিফিকেশন", "API ইন্টিগ্রেশন", "অ্যাপ ডিপ্লয় সাপোর্ট"],
        },
      },
      {
        id: "mobile-growth",
        featured: true,
        ctaType: "trial",
        names: { en: "Growth App", bn: "গ্রোথ অ্যাপ" },
        descriptions: {
          en: "Performance-focused app with analytics and optimization.",
          bn: "অ্যানালিটিকস ও অপ্টিমাইজেশনসহ পারফরম্যান্স-ফোকাসড অ্যাপ।",
        },
        prices: { monthly: 780, oneTime: 7800 },
        features: {
          en: ["Everything in MVP", "Crash analytics", "Store optimization", "2 months support"],
          bn: ["MVP-এর সবকিছু", "ক্র্যাশ অ্যানালিটিকস", "স্টোর অপ্টিমাইজেশন", "২ মাস সাপোর্ট"],
        },
      },
      {
        id: "mobile-scale",
        featured: false,
        ctaType: "consult",
        names: { en: "Scale App", bn: "স্কেল অ্যাপ" },
        descriptions: {
          en: "Enterprise-grade app for high traffic and retention.",
          bn: "হাই ট্রাফিক ও রিটেনশনের জন্য এন্টারপ্রাইজ-গ্রেড অ্যাপ।",
        },
        prices: { monthly: 1100, oneTime: 11000 },
        features: {
          en: ["Realtime modules", "Advanced security", "Multi-env release", "SLA support"],
          bn: ["রিয়েলটাইম মডিউল", "অ্যাডভান্সড সিকিউরিটি", "মাল্টি-এনভ রিলিজ", "SLA সাপোর্ট"],
        },
      },
    ],
  },
  branding: {
    billingModes: ["oneTime"],
    plans: [
      {
        id: "brand-starter",
        featured: false,
        ctaType: "default",
        names: { en: "Starter Brand Kit", bn: "স্টার্টার ব্র্যান্ড কিট" },
        descriptions: {
          en: "Logo, typography, and basic identity setup.",
          bn: "লোগো, টাইপোগ্রাফি এবং বেসিক ব্র্যান্ড আইডেন্টিটি সেটআপ।",
        },
        prices: { oneTime: 650 },
        features: {
          en: ["Logo concepts", "Color palette", "Font pairing", "Brand guideline mini"],
          bn: ["লোগো কনসেপ্ট", "কালার প্যালেট", "ফন্ট পেয়ারিং", "ব্র্যান্ড গাইডলাইন মিনি"],
        },
      },
      {
        id: "brand-growth",
        featured: true,
        ctaType: "consult",
        names: { en: "Growth Branding", bn: "গ্রোথ ব্র্যান্ডিং" },
        descriptions: {
          en: "Strategic identity package for serious market positioning.",
          bn: "সিরিয়াস মার্কেট পজিশনিংয়ের জন্য স্ট্রাটেজিক আইডেন্টিটি প্যাকেজ।",
        },
        prices: { oneTime: 1400 },
        features: {
          en: ["Everything in Starter", "Social media kit", "Brand voice guide", "Usage guideline"],
          bn: ["স্টার্টারের সবকিছু", "সোশ্যাল মিডিয়া কিট", "ব্র্যান্ড ভয়েস গাইড", "ইউজেজ গাইডলাইন"],
        },
      },
      {
        id: "brand-signature",
        featured: false,
        ctaType: "consult",
        names: { en: "Signature Branding", bn: "সিগনেচার ব্র্যান্ডিং" },
        descriptions: {
          en: "Complete visual and strategic branding system.",
          bn: "পূর্ণাঙ্গ ভিজুয়াল ও স্ট্রাটেজিক ব্র্যান্ডিং সিস্টেম।",
        },
        prices: { oneTime: 2600 },
        features: {
          en: ["Brand strategy", "Full visual system", "Campaign direction", "Launch playbook"],
          bn: ["ব্র্যান্ড স্ট্রাটেজি", "ফুল ভিজুয়াল সিস্টেম", "ক্যাম্পেইন ডিরেকশন", "লঞ্চ প্লেবুক"],
        },
      },
    ],
  },
  businessProfile: {
    billingModes: ["monthly", "oneTime"],
    pageKeys: ["p8", "p10", "p12", "p15", "p20"],
    plansByPage: {
      p8: buildWebsitePlans("8-page business profile"),
      p10: buildWebsitePlans("10-page business profile"),
      p12: buildWebsitePlans("12-page business profile"),
      p15: buildWebsitePlans("15-page business profile"),
      p20: buildWebsitePlans("20-page business profile"),
    },
  },
  creativeDesign: {
    billingModes: ["monthly", "daily"],
    plans: [
      {
        id: "creative-monthly",
        featured: false,
        ctaType: "default",
        names: { en: "Monthly Creative", bn: "মাসিক ক্রিয়েটিভ" },
        descriptions: {
          en: "Monthly design support for social media and ad creatives.",
          bn: "সোশ্যাল মিডিয়া ও অ্যাড ক্রিয়েটিভের জন্য মাসিক ডিজাইন সাপোর্ট।",
        },
        prices: { monthly: 220, daily: 20 },
        features: {
          en: ["20 creatives / month", "Post + story variants", "Brand consistency", "2 revision rounds"],
          bn: ["মাসে ২০টি ক্রিয়েটিভ", "পোস্ট + স্টোরি ভ্যারিয়েন্ট", "ব্র্যান্ড কনসিস্টেন্সি", "২ রাউন্ড রিভিশন"],
        },
      },
      {
        id: "creative-ads",
        featured: true,
        ctaType: "trial",
        names: { en: "Ads Campaign Creative", bn: "অ্যাডস ক্যাম্পেইন ক্রিয়েটিভ" },
        descriptions: {
          en: "Daily ad campaign design with optimization-focused variants.",
          bn: "অপ্টিমাইজেশন-ফোকাসড ভ্যারিয়েন্টসহ ডেইলি অ্যাড ক্যাম্পেইন ডিজাইন।",
        },
        prices: { monthly: 390, daily: 35 },
        features: {
          en: ["Daily ad creatives", "A/B variants", "CTR-focused hooks", "Performance feedback loop"],
          bn: ["ডেইলি অ্যাড ক্রিয়েটিভ", "A/B ভ্যারিয়েন্ট", "CTR-ফোকাসড হুক", "পারফরম্যান্স ফিডব্যাক লুপ"],
        },
      },
      {
        id: "creative-premium",
        featured: false,
        ctaType: "consult",
        names: { en: "Premium Creative Retainer", bn: "প্রিমিয়াম ক্রিয়েটিভ রিটেইনার" },
        descriptions: {
          en: "High-volume brand creatives and campaign asset pipeline.",
          bn: "হাই-ভলিউম ব্র্যান্ড ক্রিয়েটিভ ও ক্যাম্পেইন অ্যাসেট পাইপলাইন।",
        },
        prices: { monthly: 620, daily: 55 },
        features: {
          en: ["Everything in Ads", "Video cover concepts", "Seasonal campaign packs", "Priority delivery"],
          bn: ["Ads-এর সবকিছু", "ভিডিও কভার কনসেপ্ট", "সিজনাল ক্যাম্পেইন প্যাক", "প্রায়োরিটি ডেলিভারি"],
        },
      },
    ],
  },
};
