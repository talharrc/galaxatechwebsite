export const SITE = {
  name: "Galaxa Tech",
  tagline: "Ecosystems, Optimized.",
  email: "mail.galaxatech@gmail.com",
  whatsapp: "[WHATSAPP_NUMBER]",
  linkedin: "[LINKEDIN_URL]",
  instagram: "[INSTAGRAM_URL]",
  location: "Dhaka, Bangladesh",
};

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Builders", href: "/builders" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    title: "Web Development",
    slug: "web-development",
    icon: "Globe",
    short: "Scalable websites and web apps engineered for growth — not just aesthetics.",
    problem: "Most businesses have websites that look decent but don't actually work as business tools. They're slow, confusing, and don't convert visitors into clients.",
    solution: "We build web infrastructure that serves your business goals — fast, scalable, conversion-optimised, and built to grow with you.",
    deliverables: [
      "Custom website or web app built on Next.js",
      "Mobile-first, responsive across all devices",
      "SEO-ready architecture from day one",
      "CMS integration for easy content management",
    ],
  },
  {
    title: "App Development",
    slug: "app-development",
    icon: "Smartphone",
    short: "Cross-platform mobile apps built as operational tools, not digital brochures.",
    problem: "Most mobile apps are built to exist — not to perform. They lack real utility, load slowly, and get deleted within a week.",
    solution: "We build apps that users return to — because they're built around real workflows, real use cases, and real value.",
    deliverables: [
      "iOS and Android apps (React Native / Expo)",
      "Integrated backend and API architecture",
      "Push notifications and real-time features",
      "App Store and Play Store deployment",
    ],
  },
  {
    title: "AI Automation",
    slug: "ai-automation",
    icon: "Bot",
    short: "We identify repetitive bottlenecks and replace them with intelligent, scalable automations.",
    problem: "Teams spend hours on tasks that could be automated — data entry, report generation, customer responses. This kills productivity and morale.",
    solution: "We map your workflows, identify automation opportunities, and implement AI-powered systems that scale with your business.",
    deliverables: [
      "Custom AI workflow design and implementation",
      "Chatbots and automated customer interactions",
      "Data processing and reporting automation",
      "Integration with your existing tools and stack",
    ],
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    icon: "TrendingUp",
    short: "SEO, paid media, and content systems engineered for measurable business outcomes.",
    problem: "Most digital marketing feels random — posts without strategy, ads without structure, SEO without direction. The result is spend without return.",
    solution: "We build marketing systems — structured, data-driven, and aligned with your actual business goals.",
    deliverables: [
      "SEO audit and content strategy",
      "Paid media setup and management (Google, Meta)",
      "Social media strategy and content calendar",
      "Monthly performance reporting and iteration",
    ],
  },
  {
    title: "Brand & Design",
    slug: "brand-design",
    icon: "Palette",
    short: "Your brand is infrastructure. We build visual identities that communicate authority and scale.",
    problem: "A weak brand doesn't just look bad — it costs you clients before you even get a chance to speak. It signals amateurism before the conversation starts.",
    solution: "We build complete brand systems — from logo and identity to design language — that make you look like what you actually are.",
    deliverables: [
      "Logo design and brand mark",
      "Full brand identity system",
      "Brand guidelines document",
      "UI/UX design for digital products",
    ],
  },
  {
    title: "Notion Systems",
    slug: "notion-systems",
    icon: "Layout",
    short: "Custom Notion workspaces that turn messy operations into structured, scalable systems.",
    problem: "Most businesses run on scattered spreadsheets, WhatsApp threads, and email chains. It works until it doesn't — and then it really doesn't.",
    solution: "We design custom Notion workspaces that bring clarity to your operations — CRMs, project trackers, wikis, and SOPs all in one place.",
    deliverables: [
      "Custom Notion workspace architecture",
      "CRM, project management, and task systems",
      "Team wiki and SOP documentation",
      "Training and onboarding for your team",
    ],
  },
];

export const PROJECTS = [
  {
    id: "harmans",
    name: "Harmans Trading",
    title: "Corporate Web Presence",
    category: "WEB",
    scope: "Corporate Web",
    description:
      "A professional corporate website for a Saudi-based manpower recruitment firm — structured for credibility and international reach.",
    challenge:
      "Harmans Trading needed a digital presence that could stand up to international scrutiny — potential clients in Saudi Arabia and beyond would judge them on their website before any conversation started.",
    approach:
      "We designed a clean, authoritative corporate site with a clear service structure, trust-building elements, and a straightforward inquiry flow. Arabic language support was built in from the start.",
    outcome:
      "A fully deployed corporate website that presents Harmans Trading as the professional, government-approved agency they are — with inquiry functionality and multilingual support.",
    image: "/images/projects/harmans.jpg",
    tags: ["Next.js", "Corporate", "Multilingual"],
  },
  {
    id: "sunnah-grandeur",
    name: "Sunnah Grandeur",
    title: "Full E-Commerce Ecosystem",
    category: "WEB + APP",
    scope: "Web + App",
    description:
      "Complete website and mobile app ecosystem — e-commerce store with integrated Namaz schedule, Qibla finder, Tasbeeh counter, and multilingual support.",
    challenge:
      "Sunnah Grandeur needed more than an online store — they needed a digital ecosystem that combined commerce with everyday Islamic utility tools, all under one brand.",
    approach:
      "We built both the e-commerce website and the companion mobile app in parallel — ensuring brand consistency and shared functionality across platforms. The app integrates prayer times, Qibla direction, Tasbeeh counter, and fasting tracker alongside the product store.",
    outcome:
      "A live e-commerce website and published mobile app — two interconnected digital products serving the same brand and user base with distinct but complementary roles.",
    image: "/images/projects/sunnah-website.jpg",
    appImage: "/images/projects/sunnah-app.jpg",
    tags: ["E-commerce", "Mobile App", "React Native", "Shopify"],
  },
  {
    id: "salfas-bazar",
    name: "Salfas Bazar",
    title: "Brand System & Digital Launch",
    category: "BRAND + WEB",
    scope: "Branding + Web",
    description:
      "Complete brand identity and website for an organic food business — from logo to digital presence.",
    challenge:
      "Salfas Bazar was entering a crowded organic food market and needed a brand that could communicate authenticity, quality, and trust from the very first touchpoint.",
    approach:
      "We started with brand strategy — defining their positioning and visual language — then built a complete identity system and launched it through a clean, product-focused website.",
    outcome:
      "A complete brand kit (logo, colors, typography, brand guidelines) and a live website ready for the Salfas Bazar launch — giving them a solid foundation to build their market presence.",
    image: "/images/projects/harmans.jpg",
    tags: ["Branding", "Logo Design", "Web", "Organic"],
  },
];

export const TEAM = [
  {
    initial: "T",
    name: "Talha (Miftahul Islam)",
    role: "Strategist & Finance Lead",
    bio: "Drives the strategic and operational direction of Galaxa Tech. Focused on systems thinking, client outcomes, and long-term ecosystem building.",
  },
  {
    initial: "R",
    name: "Rihad Hamid",
    role: "Creative & Project Lead",
    bio: "Leads creative direction, brand systems, and project delivery. Bridges design thinking with execution discipline.",
  },
  {
    initial: "A",
    name: "Asif Ahmed",
    role: "Developer",
    bio: "Builds the technical infrastructure behind GT's client projects — from web platforms to mobile applications.",
  },
];
