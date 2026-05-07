import {
  BadgeCheck,
  Blocks,
  Brush,
  CalendarCheck,
  Code2,
  Compass,
  Layers3,
  LayoutDashboard,
  MessagesSquare,
  MousePointer2,
  PencilRuler,
  Rocket,
  ScanSearch,
  Smartphone,
  Sparkles,
  WandSparkles,
} from "lucide-react";

export const services = [
  {
    title: "Website Design & Development",
    description:
      "Brand websites and landing pages that look professional, load fast, and guide visitors toward a clear action, with responsive design and a strong mobile experience.",
    icon: LayoutDashboard,
  },
  {
    title: "App Design & Development",
    description:
      "Web and mobile apps with clear flows, polished interfaces, and user experiences that feel simple even when the product is complex.",
    icon: Smartphone,
  },
  {
    title: "Online Stores",
    description:
      "E-commerce experiences with strong product pages, smooth checkout flows, product presentation that sells, and UX that builds trust and improves conversions.",
    icon: Blocks,
  },
  {
    title: "UX Strategy",
    description:
      "Product definition, quick research, user journeys, wireframes, and prioritization that turn a messy idea into a clear product direction.",
    icon: Compass,
  },
];

export const projects = [
  {
    slug: "layout-design",
    title: "Layout Design",
    category: "business-websites",
    type: "Architecture & planning studio",
    year: "2026",
    description:
      "A polished company website for an architecture and planning studio, built around clear navigation, confident visual hierarchy, project discovery, and a direct path from interest to contact.",
    metrics: ["Brand website", "Project gallery", "Client inquiries"],
    palette: "from-[#006d77] via-[#d9f99d] to-[#ffd166]",
    previewImage: "/projects/layout-design.png",
    liveUrl: "https://www.layout-net.com/",
  },
  {
    slug: "next-level-academy",
    title: "Next Level Academy",
    category: "sports-wellness",
    type: "Basketball academy",
    year: "2026",
    description:
      "An energetic website for a basketball academy, designed to speak clearly to parents and players, present training programs, and create a strong path toward joining the academy.",
    metrics: ["Sports website", "Training signups", "Mobile experience"],
    palette: "from-[#12110f] via-[#ff4d2e] to-[#00a6fb]",
    previewImage: "/projects/next-level.png",
    liveUrl: "https://www.nextlevelacademy.com/",
  },
  {
    slug: "shalva-yoga-studio",
    title: "Shalva Studio",
    category: "sports-wellness",
    type: "Yoga studio website",
    year: "2026",
    description:
      "A boutique Hebrew RTL yoga studio concept with a calm editorial visual system, responsive home page, class schedule, pricing, teachers, studio information, contact flow, and a polished booking experience.",
    metrics: ["Full RTL", "Class schedule", "Booking flow"],
    palette: "from-[#3d2419] via-[#d8a47f] to-[#f2e8dc]",
    previewImage: "/projects/shalva-yoga.png",
    liveUrl: "https://yoga-app-zeta.vercel.app/",
  },
  {
    slug: "hoopprogress",
    title: "HoopProgress",
    category: "apps-platforms",
    type: "Basketball training platform",
    year: "2026",
    description:
      "A training platform for basketball players and coaches, combining a mobile app, web dashboard, and full coach-player connection. The product supports workout tracking, shooting stats, assigned plans, connection requests, calendars, and notifications.",
    metrics: ["Mobile app", "Coach dashboard", "Performance tracking"],
    palette: "from-[#0f0f11] via-[#f59e0b] to-[#34d399]",
    previewImage: "/projects/hoopprogress.png",
    liveUrl: "https://hoop-progress-frontend.vercel.app/",
  },
];

export const workCategories = [
  { id: "all", label: "All" },
  { id: "business-websites", label: "Websites" },
  { id: "sports-wellness", label: "Sports & Wellness" },
  { id: "apps-platforms", label: "Apps & Platforms" },
  { id: "ecommerce", label: "E-commerce" },
];

export const processSteps = [
  {
    title: "Initial Contact",
    description:
      "The process begins with a quick message via WhatsApp or the contact form. I review your request, understand the high-level vision, and confirm whether the project is a good fit.",
    icon: MessagesSquare,
  },
  {
    title: "Discovery call",
    description:
      "We dive deeper into your business goals, target audience, visual direction, and project scope. This ensures we are aligned on expectations and success criteria from the start.",
    icon: ScanSearch,
  },
  {
    title: "Proposal & Scope Definition",
    description:
      "You will receive a structured proposal outlining deliverables, timeline, milestones, and what is included in the project. Everything is clearly defined before moving forward.",
    icon: CalendarCheck,
  },
  {
    title: "UX & Structure",
    description:
      "I design the foundation of the experience: page structure, content hierarchy, and user flows, to ensure clarity and usability before visual design begins.",
    icon: PencilRuler,
  },
  {
    title: "Design & Iteration",
    description:
      "A polished visual direction is created, followed by a collaborative feedback process. We refine layouts, components, colors, and details until everything aligns with your vision.",
    icon: WandSparkles,
  },
  {
    title: "Development & Launch",
    description:
      "The approved design is translated into a fully functional website. This includes responsive development, testing across devices, and a smooth, production-ready launch.",
    icon: Rocket,
  },
];

export const capabilities = [
  "Product strategy",
  "UX audits",
  "Wireframes",
  "Figma UI design",
  "Interactive prototypes",
  "Landing pages",
  "Mobile apps",
  "Web apps",
  "Design systems",
  "Developer handoff",
  "No-code MVPs",
  "Brand direction",
];

export const principles = [
  {
    title: "Clarity before decoration",
    description:
      "Every screen needs a job. The visual layer should make that job easier, sharper, and more memorable.",
    icon: MousePointer2,
  },
  {
    title: "Taste that can ship",
    description:
      "The work should feel premium without becoming impossible for developers to build and maintain.",
    icon: Layers3,
  },
  {
    title: "Momentum over mystery",
    description:
      "You always know what is happening, what is next, and what decisions need your input.",
    icon: MessagesSquare,
  },
];

export const packages = [
  {
    title: "Launch Website",
    price: "From $1,800",
    description:
      "For founders and service businesses that need a sharp, credible site fast.",
    items: ["5-7 sections", "Responsive design", "Copy direction", "Developer handoff"],
  },
  {
    title: "App Design Sprint",
    price: "From $3,500",
    description:
      "For mobile or web apps that need a validated product flow and polished screens.",
    items: ["UX flow map", "10-18 screens", "Clickable prototype", "UI kit"],
  },
  {
    title: "Product Partner",
    price: "Custom",
    description:
      "For ongoing product teams that need senior design support across releases.",
    items: ["Weekly design cycles", "Design QA", "System evolution", "Strategy support"],
  },
];

export const contactReasons = [
  { label: "New website", icon: Brush },
  { label: "Mobile app", icon: Smartphone },
  { label: "Web app", icon: Code2 },
  { label: "Design audit", icon: BadgeCheck },
  { label: "Fast launch", icon: CalendarCheck },
  { label: "Something bold", icon: Sparkles },
];
