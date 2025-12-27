export const translations = {
  // =================================================================
  // ENGLISH TRANSLATIONS
  // =================================================================
  en: {
    // --- Navbar ---
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      career: "Career",
      contact: "Contact",
      login: "Login",
      signup: "Signup",
    },

    // --- Hero Section ---
    home: {
      top_tagline: "CREATE SOMETHING EXTRAORDINARY WITH NEON STUDIO ✨",
      line1: "BUILD. DESIGN.",
      line2: "THAT'S",
      line3: "NEON STUDIO",
      desc: "We are a creative agency focused on branding, web design, and digital marketing solutions. Let's build something unique together.",
      btn_primary: "Get Started",
      btn_secondary: "View Our Work",
    },

    // --- About Section ---
    about: {
      tag: "WHO WE ARE",
      title: "We craft digital experiences that excite & inspire",
      desc: "We are a team of creative minds dedicated to transforming brands. From strategy to execution, we bring your vision to life with modern technology and neon aesthetics.",
      btn: "Read Our Story",
      stats: {
        s1_num: "5+", 
        s1_text: "Years Experience",
        s2_num: "120+", 
        s2_text: "Projects Done",
        s3_num: "50+", 
        s3_text: "Happy Clients",
      }
    },

    // --- Services Section (Main Page) ---
    services: {
      tag: "WHAT WE DO",
      title: "Our Expertise",
      desc: "Innovative solutions for complex challenges designed to grow your business.",
      items: {
        s1_title: "Branding & Identity",
        s1_desc: "We create memorable brand identities that resonate with your audience and stand out in the market.",
        s2_title: "Web Development",
        s2_desc: "Custom, high-performance websites built with modern technologies like Next.js and React.",
        s3_title: "Digital Marketing",
        s3_desc: "Data-driven strategies to increase your online visibility, traffic, and conversion rates.",
        s4_title: "UI/UX Design",
        s4_desc: "User-centric interfaces that offer seamless and engaging experiences for your customers.",
        s5_title: "Mobile App Development",
        s5_desc: "Native and Cross-platform mobile applications for iOS and Android tailored to your needs.",
        s6_title: "SEO Optimization",
        s6_desc: "Comprehensive SEO strategies to rank your website at the top of search engine results."
      }
    },

    // --- Service Details (Individual Pages) ---
    service_details: {
      "branding": {
        title: "Branding & Identity",
        full_desc: "A brand is more than just a logo. We build comprehensive brand identities that communicate your values and resonate with your target audience. From logo design to brand guidelines, we cover it all.",
        features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Rebranding"],
      },
      "web-development": {
        title: "Web Development",
        full_desc: "We build fast, secure, and scalable websites using the latest technologies like Next.js and React. Our websites are optimized for performance and SEO.",
        features: ["Custom Websites", "E-commerce", "CMS Development", "API Integration"],
      },
      "digital-marketing": {
        title: "Digital Marketing",
        full_desc: "Grow your business with our data-driven marketing strategies. We help you reach the right audience at the right time using social media, email, and PPC.",
        features: ["Social Media Marketing", "PPC Campaigns", "Content Marketing", "Email Marketing"],
      },
      "ui-ux-design": {
        title: "UI/UX Design",
        full_desc: "We design user interfaces that are not only beautiful but also intuitive. We focus on user experience to ensure high engagement and conversion.",
        features: ["User Research", "Wireframing", "Prototyping", "Mobile App Design"],
      },
      "mobile-app": {
        title: "Mobile App Development",
        full_desc: "Turn your ideas into mobile applications. We develop native and cross-platform apps for iOS and Android ensuring smooth performance.",
        features: ["iOS & Android", "Flutter / React Native", "App Store Optimization", "Maintenance"],
      },
      "seo": {
        title: "SEO Optimization",
        full_desc: "Improve your website's visibility on search engines. Our SEO experts use white-hat techniques to rank you higher and drive organic traffic.",
        features: ["Keyword Research", "On-page SEO", "Link Building", "Technical SEO"],
      }
    },

    // --- Why Choose Us ---
    why_choose: {
      tag: "WHY CHOOSE US",
      title: "Why We Are The Best?",
      desc: "We don't just build websites; we build experiences that drive growth and engagement.",
      items: {
        w1_title: "Creative Approach",
        w1_desc: "We bring fresh and unique ideas to every project to make your brand stand out.",
        w2_title: "Expert Team",
        w2_desc: "Our team consists of industry experts with years of experience in digital solutions.",
        w3_title: "Fast Delivery",
        w3_desc: "We value your time. We ensure on-time delivery without compromising quality.",
        w4_title: "24/7 Support",
        w4_desc: "Our support team is always available to help you with any issues or queries."
      }
    },

    // --- Portfolio Section ---
    portfolio: {
      tag: "OUR WORK",
      title: "Recent Projects",
      desc: "Explore some of our finest work delivered to clients worldwide.",
      categories: ["All", "Branding", "Web Design", "App Dev", "Marketing"],
      items: {
        p1_title: "Neon Brand Identity", p1_cat: "Branding",
        p2_title: "Fintech Dashboard", p2_cat: "UI/UX Design",
        p3_title: "Eco-Friendly App", p3_cat: "Mobile App",
        p4_title: "Fashion E-commerce", p4_cat: "Web Development",
        p5_title: "Tech Startup Marketing", p5_cat: "Digital Marketing",
        p6_title: "Modern Architecture", p6_cat: "Web Design",
      }
    },

    // --- Team Section ---
    team: {
      view_team: "View Team",
      tag: "OUR TEAM",
      title: "Meet The Minds",
      desc: "The creative strategists, tech experts, and visionaries making it all happen.",
      members: [
        { name: "Alex Morgan", role: "CEO & Founder" },
        { name: "Sarah Jenkins", role: "Creative Director" },
        { name: "David Ross", role: "Lead Developer" },
        { name: "Emily Clark", role: "Marketing Head" },
        { name: "Daniel Kim", role: "UI/UX Designer" },
        { name: "Sophia Martinez", role: "Content Strategist" },
        { name: "James Wilson", role: "SEO Specialist" }
      ]
    },

    // --- Testimonials Section ---
    testimonials: {
      tag: "TESTIMONIALS",
      title: "What Our Clients Say",
      desc: "Don't just take our word for it. Check out what our satisfied clients have to say about our work.",
      reviews: [
        { name: "Sarah Johnson", role: "CEO, TechFlow", comment: "Neon Studio transformed our brand entirely. The team is incredibly talented and easy to work with." },
        { name: "Michael Lee", role: "Founder, StartUp X", comment: "The website they built for us increased our conversion rate by 200%. Highly recommended!" },
        { name: "Emily Davis", role: "Marketing Director", comment: "Their SEO strategies are top-notch. We ranked on the first page of Google within 3 months." },
        { name: "David Brown", role: "Product Manager", comment: "Amazing UI/UX design skills. They understood our vision perfectly and delivered beyond expectations." },
        { name: "Jessica Wilson", role: "Owner, FashionHub", comment: "Professional, creative, and timely delivery. The best agency I have worked with so far." },
        { name: "Robert Smith", role: "CTO, DataCorp", comment: "Great code quality and performance. The Next.js implementation was flawless." }
      ]
    },

    // --- FAQ Section ---
    faq: {
      tag: "FAQ",
      title: "Common Questions",
      desc: "Everything you need to know about our services, pricing, and workflow.",
      questions: [
        {
          q: "How do we start a project?",
          a: "We start with a discovery call to understand your needs. Then we create a roadmap, sign a contract, and kick off the project with our expert team."
        },
        {
          q: "What is your pricing structure?",
          a: "Our pricing depends on the scope of the project. We offer both fixed-price packages and hourly rates based on your requirements."
        },
        {
          q: "How long does it take to build a website?",
          a: "A standard corporate website takes 2-4 weeks, while complex e-commerce or web apps may take 8-12 weeks depending on features."
        },
        {
          q: "Do you provide support after delivery?",
          a: "Yes! We offer 3 months of free support after launch. After that, you can subscribe to our maintenance packages."
        },
        {
          q: "What technologies do you use?",
          a: "We specialize in modern stacks like Next.js, React, Node.js, Tailwind CSS, and Framer Motion for animations."
        }
      ]
    },

    // --- Contact Section ---
    contact: {
      tag: "GET IN TOUCH",
      title: "Let's Start a Conversation",
      desc: "Ready to take your business to the next level? Fill out the form or reach out to us directly.",
      info: {
         address_title: "Visit Us",
         address: "123 Neon Street, Creative City, NY",
         
         phone_title: "Call Us",
         phone: "+1 234 567 890",
         
         email_title: "Email Us",
         email: "hello@neonstudio.com"
      },
      form: {
        name: "Your Name",
        email: "Email Address",
        subject: "Subject",
        message: "Your Message",
        btn: "Send Message",
      },
    },

    // --- Footer ---
    footer: {
      desc: "Transforming ideas into digital reality. We are a full-service creative agency building brands for the future.",
      titles: {
        links: "Quick Links",
        services: "Services",
        newsletter: "Newsletter"
      },
      links: ["Home", "About Us", "Portfolio", "Career", "Contact"],
      services: ["Branding", "Web Development", "SEO Marketing", "App Design"],
      newsletter_desc: "Subscribe to our newsletter for latest updates and news.",
      placeholder: "Enter your email",
      btn: "Subscribe",
      copyright: "© 2024 NeonStudio. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    },

    // --- Login Section (New) ---
    auth: {
      full_name: "Full Name",
      login_title: "Welcome Back",
      login_desc: "Please enter your details to sign in.",
      email: "Email Address",
      password: "Password",
      remember: "Remember me",
      forgot: "Forgot Password?",
      btn_login: "Sign In",
      divider: "Or continue with",
      no_account: "Don't have an account?",
      signup_link: "Sign up",
      signup_title: "Create Account", // সাইন আপ পেজের জন্য
      signup_desc: "Join us and start your journey.", // সাইন আপ পেজের জন্য
      btn_signup: "Create Account" // সাইন আপ পেজের জন্য
    },

    // --- Career Section (New) ---
    career: {
      tag: "JOIN OUR TEAM",
      title: "Build the Future With Us",
      desc: "We are looking for passionate individuals to join our growing team. If you love innovation and creativity, this is the place for you.",
      benefits_title: "Why Join NeonStudio?",
      benefits: [
        { title: "Remote Work", desc: "Work from anywhere in the world." },
        { title: "Flexible Hours", desc: "We value output over hours." },
        { title: "Health Insurance", desc: "Comprehensive health coverage for you." },
        { title: "Learning Budget", desc: "Annual budget for courses and books." }
      ],
      jobs_title: "Open Positions",
      jobs: [
        { title: "Senior Frontend Developer", type: "Full Time", location: "Remote" },
        { title: "UI/UX Designer", type: "Full Time", location: "Dhaka, BD" },
        { title: "Digital Marketing Specialist", type: "Part Time", location: "Remote" },
        { title: "Content Writer", type: "Contract", location: "Remote" }
      ],
      apply_btn: "Apply Now"
    }
  },

  // =================================================================
  // BENGALI TRANSLATIONS
  // =================================================================
  bn: {
    // --- Navbar ---
    nav: {
      home: "হোম",
      about: "সম্পর্ক",
      services: "সার্ভিস",
      portfolio: "পোর্টফোলিও",
      career: "ক্যারিয়ার",
      contact: "যোগাযোগ",
      login: "লগইন",
      signup: "সাইন আপ",
    },

    // --- Hero Section ---
    home: {
      top_tagline: "নিয়ন স্টুডিওর সাথে অসাধারণ কিছু তৈরি করুন ✨",
      line1: "তৈরি করুন। ডিজাইন।",
      line2: "এটাই",
      line3: "নিয়ন স্টুডিও",
      desc: "আমরা ব্র্যান্ডিং, ওয়েব ডিজাইন এবং ডিজিটাল মার্কেটিং সলিউশনে ফোকাস করা একটি ক্রিয়েটিভ এজেন্সি। চলুন একসাথে অনন্য কিছু তৈরি করি।",
      btn_primary: "শুরু করুন",
      btn_secondary: "কাজ দেখুন",
    },

    // --- About Section ---
    about: {
      tag: "আমরা কে?",
      title: "আমরা ডিজিটাল অভিজ্ঞতা তৈরি করি যা অনুপ্রাণিত করে",
      desc: "আমরা সৃজনশীল মানুষের একটি দল যারা ব্র্যান্ড পরিবর্তন করতে নিবেদিত। কৌশল থেকে শুরু করে বাস্তবায়ন পর্যন্ত, আমরা আধুনিক প্রযুক্তির মাধ্যমে আপনার স্বপ্নকে বাস্তবে রূপ দিই।",
      btn: "আমাদের গল্প পড়ুন",
      stats: {
        s1_num: "5+", 
        s1_text: "বছরের অভিজ্ঞতা",
        s2_num: "120+", 
        s2_text: "প্রজেক্ট সম্পন্ন",
        s3_num: "50+", 
        s3_text: "সন্তুষ্ট ক্লায়েন্ট",
      }
    },

    // --- Services Section (Main Page) ---
    services: {
      tag: "আমরা যা করি",
      title: "আমাদের দক্ষতা",
      desc: "জটিল চ্যালেঞ্জের জন্য উদ্ভাবনী সমাধান যা আপনার ব্যবসার প্রসারে সাহায্য করে।",
      items: {
        s1_title: "ব্র্যান্ডিং এবং আইডেন্টিটি",
        s1_desc: "আমরা স্মরণীয় ব্র্যান্ড আইডেন্টিটি তৈরি করি যা আপনার দর্শকদের মনে দাগ কাটে।",
        s2_title: "ওয়েব ডেভেলপমেন্ট",
        s2_desc: "Next.js এবং React-এর মতো আধুনিক প্রযুক্তিতে তৈরি কাস্টম এবং দ্রুতগতির ওয়েবসাইট।",
        s3_title: "ডিজিটাল মার্কেটিং",
        s3_desc: "আপনার অনলাইন দৃশ্যমানতা, ট্রাফিক এবং বিক্রয় বাড়ানোর জন্য ডেটা-নির্ভর কৌশল।",
        s4_title: "UI/UX ডিজাইন",
        s4_desc: "ব্যবহারকারী-কেন্দ্রিক ইন্টারফেস যা আপনার গ্রাহকদের জন্য সহজ এবং আকর্ষণীয় অভিজ্ঞতা নিশ্চিত করে।",
        s5_title: "মোবাইল অ্যাপ ডেভেলপমেন্ট",
        s5_desc: "আপনার প্রয়োজন অনুযায়ী iOS এবং Android এর জন্য নেটিভ এবং ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ।",
        s6_title: "SEO অপ্টিমাইজেশন",
        s6_desc: "সার্চ ইঞ্জিনের ফলাফলের শীর্ষে আপনার ওয়েবসাইটকে র‍্যাঙ্ক করানোর জন্য কার্যকরী কৌশল।"
      }
    },

    // --- Service Details (Individual Pages - BN) ---
    service_details: {
      "branding": {
        title: "ব্র্যান্ডিং এবং আইডেন্টিটি",
        full_desc: "একটি ব্র্যান্ড লোগোর চেয়েও বেশি কিছু। আমরা সম্পূর্ণ ব্র্যান্ড আইডেন্টিটি তৈরি করি যা আপনার মূল্যবোধ প্রকাশ করে এবং টার্গেট অডিয়েন্সের সাথে সংযোগ স্থাপন করে।",
        features: ["লোগো ডিজাইন", "ব্র্যান্ড গাইডলাইন", "ভিজ্যুয়াল আইডেন্টিটি", "রিব্র্যান্ডিং"],
      },
      "web-development": {
        title: "ওয়েব ডেভেলপমেন্ট",
        full_desc: "আমরা Next.js এবং React ব্যবহার করে দ্রুত, নিরাপদ এবং স্কেলেবল ওয়েবসাইট তৈরি করি। আমাদের সাইটগুলো পারফর্মেন্স এবং এসইও অপ্টিমাইজড।",
        features: ["কাস্টম ওয়েবসাইট", "ই-কমার্স", "CMS ডেভেলপমেন্ট", "API ইন্টিগ্রেশন"],
      },
      "digital-marketing": {
        title: "ডিজিটাল মার্কেটিং",
        full_desc: "আমাদের ডেটা-নির্ভর মার্কেটিং কৌশলের মাধ্যমে আপনার ব্যবসা বাড়ান। আমরা সোশ্যাল মিডিয়া এবং ইমেইলের মাধ্যমে সঠিক অডিয়েন্সের কাছে পৌঁছাই।",
        features: ["সোশ্যাল মিডিয়া", "PPC ক্যাম্পেইন", "কন্টেন্ট মার্কেটিং", "ইমেইল মার্কেটিং"],
      },
      "ui-ux-design": {
        title: "UI/UX ডিজাইন",
        full_desc: "আমরা এমন ইউজার ইন্টারফেস ডিজাইন করি যা দেখতে সুন্দর এবং ব্যবহার করা সহজ। আমরা ইউজার এক্সপেরিয়েন্সকে সর্বোচ্চ গুরুত্ব দিই।",
        features: ["ইউজার রিসার্চ", "ওয়্যারফ্রেমিং", "প্রোটোটাইপিং", "অ্যাপ ডিজাইন"],
      },
      "mobile-app": {
        title: "মোবাইল অ্যাপ ডেভেলপমেন্ট",
        full_desc: "আপনার আইডিয়াকে মোবাইল অ্যাপে রূপান্তর করুন। আমরা iOS এবং Android এর জন্য নেটিভ এবং ক্রস-প্ল্যাটফর্ম অ্যাপ তৈরি করি।",
        features: ["iOS ও Android", "ফ্লাটার / রিয়্যাক্ট নেটিভ", "অ্যাপ স্টোর অপ্টিমাইজেশন", "মেইনটেন্যান্স"],
      },
      "seo": {
        title: "SEO অপ্টিমাইজেশন",
        full_desc: "সার্চ ইঞ্জিনে আপনার ওয়েবসাইটের র‍্যাঙ্ক বাড়ান। আমাদের এসইও বিশেষজ্ঞরা অর্গানিক ট্রাফিক বাড়াতে হোয়াইট-হ্যাট টেকনিক ব্যবহার করেন।",
        features: ["কিওয়ার্ড রিসার্চ", "অন-পেজ এসইও", "লিংক বিল্ডিং", "টেকনিক্যাল এসইও"],
      }
    },

    // --- Why Choose Us ---
    why_choose: {
      tag: "কেন আমাদের বেছে নেবেন",
      title: "কেন আমরাই সেরা?",
      desc: "আমরা শুধু ওয়েবসাইট তৈরি করি না; আমরা এমন অভিজ্ঞতা তৈরি করি যা আপনার ব্যবসার বৃদ্ধি নিশ্চিত করে।",
      items: {
        w1_title: "সৃজনশীল দৃষ্টিভঙ্গি",
        w1_desc: "আপনার ব্র্যান্ডকে আলাদা করে তুলতে আমরা প্রতিটি প্রজেক্টে নতুন এবং অনন্য আইডিয়া নিয়ে আসি।",
        w2_title: "দক্ষ টিম",
        w2_desc: "আমাদের টিমে রয়েছে ডিজিটাল সলিউশনে দীর্ঘদিনের অভিজ্ঞতাসম্পন্ন দক্ষ সব সদস্য।",
        w3_title: "দ্রুত ডেলিভারি",
        w3_desc: "আমরা আপনার সময়ের মূল্য দিই। গুণমান ঠিক রেখে আমরা সঠিক সময়ে কাজ বুঝিয়ে দিই।",
        w4_title: "২৪/৭ সাপোর্ট",
        w4_desc: "যেকোনো সমস্যা বা জিজ্ঞাসায় আমাদের সাপোর্ট টিম সর্বদা আপনার পাশে আছে।"
      }
    },

    // --- Portfolio Section ---
    portfolio: {
      tag: "আমাদের কাজ",
      title: "সাম্প্রতিক প্রজেক্টসমূহ",
      desc: "বিশ্বজুড়ে আমাদের ক্লায়েন্টদের জন্য করা সেরা কিছু কাজের নমুনা দেখুন।",
      categories: ["সব", "ব্র্যান্ডিং", "ওয়েব ডিজাইন", "অ্যাপ", "মার্কেটিং"],
      items: {
        p1_title: "নিয়ন ব্র্যান্ড আইডেন্টিটি", p1_cat: "ব্র্যান্ডিং",
        p2_title: "ফিনটেক ড্যাশবোর্ড", p2_cat: "UI/UX ডিজাইন",
        p3_title: "ইকো-ফ্রেন্ডলি অ্যাপ", p3_cat: "মোবাইল অ্যাপ",
        p4_title: "ফ্যাশন ই-কমার্স", p4_cat: "ওয়েব ডেভেলপমেন্ট",
        p5_title: "টেক স্টার্টআপ মার্কেটিং", p5_cat: "ডিজিটাল মার্কেটিং",
        p6_title: "মডার্ন আর্কিটেকচার", p6_cat: "ওয়েব ডিজাইন",
      }
    },

    // --- Team Section ---
    team: {
      view_team: "টিম দেখুন",
      tag: "আমাদের টিম",
      title: "আমাদের কারিগররা",
      desc: "সৃজনশীল কৌশলবিদ, প্রযুক্তি বিশেষজ্ঞ এবং স্বপ্নদ্রষ্টারা যারা সবকিছু সম্ভব করছেন।",
      members: [
        { name: "অ্যালেক্স মর্গান", role: "সিইও এবং ফাউন্ডার" },
        { name: "সারা জেনকিন্স", role: "ক্রিয়েটিভ ডিরেক্টর" },
        { name: "ডেভিড রস", role: "লিড ডেভেলপার" },
        { name: "এমিলি ক্লার্ক", role: "মার্কেটিং হেড" },
        { name: "ড্যানিয়েল কিম", role: "UI/UX ডিজাইনার" },
        { name: "সোফিয়া মার্টিনেজ", role: "কন্টেন্ট স্ট্র্যাটেজিস্ট" },
        { name: "জেমস উইলসন", role: "এসইও স্পেশালিস্ট" }
      ]
    },

    // --- Testimonials Section ---
    testimonials: {
      tag: "গ্রাহকের মতামত",
      title: "আমাদের ক্লায়েন্টরা যা বলেন",
      desc: "শুধু আমাদের কথায় বিশ্বাস করবেন না। আমাদের কাজের বিষয়ে সন্তুষ্ট ক্লায়েন্টরা কী বলছেন তা দেখে নিন।",
      reviews: [
        { name: "সারা জনসন", role: "সিইও, টেকফ্লো", comment: "নিয়ন স্টুডিও আমাদের ব্র্যান্ডকে পুরোপুরি বদলে দিয়েছে। তাদের টিম অত্যন্ত প্রতিভাবান।" },
        { name: "মাইকেল লি", role: "ফাউন্ডার, স্টার্টআপ এক্স", comment: "তারা যে ওয়েবসাইটটি বানিয়েছে তাতে আমাদের সেলস ২০০% বেড়েছে। তাদের কাজ অসাধারণ!" },
        { name: "এমিলি ডেভিস", role: "মার্কেটিং ডিরেক্টর", comment: "তাদের এসইও কৌশল খুবই কার্যকরী। ৩ মাসের মধ্যে আমরা গুগলের প্রথম পেজে চলে এসেছি।" },
        { name: "ডেভিড ব্রাউন", role: "প্রোডাক্ট ম্যানেজার", comment: "অসাধারণ UI/UX ডিজাইন। তারা আমাদের ভিশন বুঝতে পেরেছে এবং প্রত্যাশার চেয়ে ভালো কাজ দিয়েছে।" },
        { name: "জেসিকা উইলসন", role: "ওনার, ফ্যাশনহ হাব", comment: "পেশাদার, সৃজনশীল এবং সঠিক সময়ে ডেলিভারি। এখন পর্যন্ত সেরা এজেন্সি।" },
        { name: "রবার্ট স্মিথ", role: "সিটিও, ডাটা কর্প", comment: "কোডিং কোয়ালিটি এবং পারফরম্যান্স দারুণ। Next.js এর কাজ ছিল নিখুঁত।" }
      ]
    },

    // --- FAQ Section ---
    faq: {
      tag: "জিজ্ঞাসাবাদ",
      title: "সচরাচর জিজ্ঞাসিত প্রশ্ন",
      desc: "আমাদের সার্ভিস, মূল্য এবং কাজের প্রক্রিয়া সম্পর্কে আপনার যা জানা প্রয়োজন।",
      questions: [
        {
          q: "আমরা কিভাবে একটি প্রজেক্ট শুরু করব?",
          a: "আমরা প্রথমে আপনার প্রয়োজন বোঝার জন্য একটি মিটিং করি। এরপর আমরা একটি রোডম্যাপ তৈরি করি, চুক্তি স্বাক্ষর করি এবং কাজ শুরু করি।"
        },
        {
          q: "আপনাদের প্রাইসিং বা খরচ কেমন?",
          a: "আমাদের খরচ প্রজেক্টের পরিধুব ওপর নির্ভর করে। আমরা আপনার চাহিদা অনুযায়ী ফিক্সড প্যাকেজ এবং ঘণ্টাভিত্তিক রেট অফার করি।"
        },
        {
          q: "একটি ওয়েবসাইট তৈরি করতে কত সময় লাগে?",
          a: "একটি সাধারণ কর্পোরেট ওয়েবসাইটের জন্য ২-৪ সপ্তাহ লাগে। তবে জটিল ই-কমার্স বা অ্যাপের জন্য ৮-১২ সপ্তাহ লাগতে পারে।"
        },
        {
          q: "আপনারা কি কাজের পরে সাপোর্ট দেন?",
          a: "হ্যাঁ! আমরা প্রজেক্ট ডেলিভারির পর ৩ মাস ফ্রি সাপোর্ট দিই। এরপর আপনি আমাদের মেইনটেন্যান্স প্যাকেজ নিতে পারেন।"
        },
        {
          q: "আপনারা কোন প্রযুক্তি ব্যবহার করেন?",
          a: "আমরা আধুনিক প্রযুক্তি যেমন Next.js, React, Node.js, Tailwind CSS এবং অ্যানিমেশনের জন্য Framer Motion ব্যবহার করি।"
        }
      ]
    },

    // --- Contact Section ---
    contact: {
      tag: "যোগাযোগ",
      title: "চলুন কথা বলি",
      desc: "আপনার ব্যবসাকে পরবর্তী স্তরে নিয়ে যেতে প্রস্তুত? ফর্মটি পূরণ করুন বা সরাসরি আমাদের সাথে যোগাযোগ করুন।",
      info: {
         address_title: "আমাদের ঠিকানা",
         address: "১২৩ নিয়ন স্ট্রিট, ক্রিয়েটিভ সিটি",
         
         phone_title: "কল করুন",
         phone: "+৮৮০ ১৭১১ ০০০ ০০০",
         
         email_title: "ইমেইল করুন",
         email: "hello@neonstudio.com"
      },
      form: {
        name: "আপনার নাম",
        email: "ইমেইল ঠিকানা",
        subject: "বিষয়",
        message: "আপনার বার্তা",
        btn: "বার্তা পাঠান",
      },
    },

    // --- Footer ---
    footer: {
      desc: "আইডিয়াকে ডিজিটাল বাস্তবে রূপান্তর করা। আমরা একটি পূর্ণাঙ্গ ক্রিয়েটিভ এজেন্সি যা ভবিষ্যতের জন্য ব্র্যান্ড তৈরি করে।",
      titles: {
        links: "কুইক লিঙ্ক",
        services: "সার্ভিসসমূহ",
        newsletter: "নিউজলেটার"
      },
      links: ["হোম", "আমাদের সম্পর্কে", "পোর্টফোলিও", "ক্যারিয়ার", "যোগাযোগ"],
      services: ["ব্র্যান্ডিং", "ওয়েব ডেভেলপমেন্ট", "এসইও মার্কেটিং", "অ্যাপ ডিজাইন"],
      newsletter_desc: "সর্বশেষ আপডেট এবং খবরের জন্য আমাদের নিউজলেটার সাবস্ক্রাইব করুন।",
      placeholder: "আপনার ইমেইল দিন",
      btn: "সাবস্ক্রাইব",
      copyright: "© ২০২৪ নিয়ন স্টুডিও। সর্বস্বত্ব সংরক্ষিত।",
      privacy: "গোপনীয়তা নীতি",
      terms: "শর্তাবলী"
    },

    // --- Login Section (New) ---
    auth: {
      full_name: "সম্পূর্ণ নাম",
      login_title: "স্বাগতম",
      login_desc: "সাইন ইন করতে আপনার তথ্য দিন।",
      email: "ইমেইল ঠিকানা",
      password: "পাসওয়ার্ড",
      remember: "মনে রাখুন",
      forgot: "পাসওয়ার্ড ভুলে গেছেন?",
      btn_login: "লগইন করুন",
      divider: "অথবা",
      no_account: "একাউন্ট নেই?",
      signup_link: "সাইন আপ",
      signup_title: "একাউন্ট খুলুন",
      signup_desc: "আমাদের সাথে যুক্ত হন এবং যাত্রা শুরু করুন।",
      btn_signup: "একাউন্ট তৈরি করুন"
    },

    career: {
      tag: "আমাদের টিমে যোগ দিন",
      title: "আমাদের সাথে ভবিষ্যৎ গড়ুন",
      desc: "আমরা আমাদের ক্রমবর্ধমান টিমের জন্য উদ্যমী মানুষ খুঁজছি। আপনি যদি উদ্ভাবন এবং সৃজনশীলতা পছন্দ করেন, তবে এটিই আপনার জন্য সঠিক জায়গা।",
      benefits_title: "কেন আমাদের সাথে যোগ দেবেন?",
      benefits: [
        { title: "রিমোট ওয়ার্ক", desc: "বিশ্বের যেকোনো প্রান্ত থেকে কাজ করুন।" },
        { title: "ফ্লেক্সিবল সময়", desc: "আমরা কাজের ফলাফলের ওপর গুরুত্ব দিই।" },
        { title: "হেলথ ইন্স্যুরেন্স", desc: "আপনার জন্য সম্পূর্ণ স্বাস্থ্য বীমা।" },
        { title: "শেখার বাজেট", desc: "কোর্স এবং বইয়ের জন্য বার্ষিক বাজেট।" }
      ],
      jobs_title: "খালি পদসমূহ",
      jobs: [
        { title: "সিনিয়র ফ্রন্টএন্ড ডেভেলপার", type: "ফুল টাইম", location: "রিমোট" },
        { title: "UI/UX ডিজাইনার", type: "ফুল টাইম", location: "ঢাকা, বিডি" },
        { title: "ডিজিটাল মার্কেটিং স্পেশালিস্ট", type: "পার্ট টাইম", location: "রিমোট" },
        { title: "কন্টেন্ট রাইটার", type: "চুক্তিভিত্তিক", location: "রিমোট" }
      ],
      apply_btn: "আবেদন করুন"
    }
  },
};