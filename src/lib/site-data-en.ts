import {
  Blocks,
  CalendarCheck,
  Code2,
  Layers3,
  LayoutDashboard,
  MessagesSquare,
  MousePointer2,
  PencilRuler,
  Rocket,
  ScanSearch,
  Smartphone,
  WandSparkles,
} from "lucide-react";

export const services = [
  {
    title: "Landing Pages",
    description:
      "Focused landing pages for campaigns, launches, lead generation, or selling one clear offer, with sharp messaging, strong hierarchy, and a conversion-focused call to action.",
    icon: MousePointer2,
  },
  {
    title: "Business Websites",
    description:
      "Websites for businesses, professionals, and studios that need to present who they are, what they do, selected work, testimonials, and a clear path to contact.",
    icon: LayoutDashboard,
  },
  {
    title: "E-commerce Websites",
    description:
      "Online stores with strong product pages, clear categories, smooth shopping experiences, and design that builds trust and supports sales.",
    icon: Blocks,
  },
  {
    title: "Web Platforms",
    description:
      "More complex digital products such as dashboards, management systems, and web platforms, with clear user flows and polished interfaces.",
    icon: Code2,
  },
  {
    title: "Mobile Apps",
    description:
      "Design and development for mobile apps with smooth usability, focused screens, clear flows, and an experience built around real user needs.",
    icon: Smartphone,
  },
  {
    title: "Redesign & Improvement",
    description:
      "A focused refresh for an existing website, app, or platform to improve visual quality, UX, hierarchy, trust, and conversions without starting from zero.",
    icon: WandSparkles,
  },
];

export const projects = [
  {
    slug: "layout-design",
    title: "Layout Design",
    categories: ["business-websites"],
    type: "Architecture & planning studio",
    year: "2026",
    description:
      "A polished company website for an architecture and planning studio, built around clear navigation, confident visual hierarchy, project discovery, and a direct path from interest to contact.",
    metrics: ["Brand website", "Project gallery", "Client inquiries"],
    palette: "from-[#211913] via-[#4f6042] to-[#d8a85d]",
    previewImage: "/projects/layout-design.png",
    liveUrl: "https://www.layout-net.com/",
  },
  {
    slug: "next-level-academy",
    title: "Next Level Academy",
    categories: ["business-websites"],
    type: "Basketball academy",
    year: "2026",
    description:
      "An energetic website for a basketball academy, designed to speak clearly to parents and players, present training programs, and create a strong path toward joining the academy.",
    metrics: ["Sports website", "Training signups", "Mobile experience"],
    palette: "from-[#211913] via-[#b85f45] to-[#2f8f8a]",
    previewImage: "/projects/next-level.png",
    liveUrl: "https://www.nextlevelacademy.com/",
  },
  {
    slug: "shalva-yoga-studio",
    title: "Shalva Studio",
    categories: ["business-websites"],
    type: "Yoga studio website",
    year: "2026",
    description:
      "A boutique Hebrew RTL yoga studio concept with a calm editorial visual system, responsive home page, class schedule, pricing, teachers, studio information, contact flow, and a polished booking experience.",
    metrics: ["Full RTL", "Class schedule", "Booking flow"],
    palette: "from-[#3b2a21] via-[#c98f7d] to-[#f7efe3]",
    previewImage: "/projects/shalva-yoga.png",
    liveUrl: "https://yoga-app-zeta.vercel.app/",
  },
  {
    slug: "hoopprogress",
    title: "HoopProgress",
    categories: ["web-platforms", "mobile-apps"],
    type: "Basketball training platform",
    year: "2026",
    description:
      "A training platform for basketball players and coaches, combining a mobile app, web dashboard, and full coach-player connection. The product supports workout tracking, shooting stats, assigned plans, connection requests, calendars, and notifications.",
    metrics: ["Mobile app", "Coach dashboard", "Performance tracking"],
    palette: "from-[#211913] via-[#4f6042] to-[#8fa58a]",
    previewImage: "/projects/hoopprogress.png",
    liveUrl: "https://hoop-progress-frontend.vercel.app/",
  },
];

export const workCategories = [
  { id: "all", label: "All" },
  { id: "landing-pages", label: "Landing Pages" },
  { id: "business-websites", label: "Business Websites" },
  { id: "ecommerce-websites", label: "E-commerce Websites" },
  { id: "web-platforms", label: "Web Platforms" },
  { id: "mobile-apps", label: "Mobile Apps" },
  { id: "redesign", label: "Redesigns" },
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
  "Landing pages",
  "Business websites",
  "E-commerce websites",
  "Web platforms",
  "Mobile apps",
  "Redesigns",
  "Figma UI design",
  "Interactive prototypes",
  "Wireframes",
  "User experience",
  "Responsive design",
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
    title: "Conversion Landing Page",
    price: "From $1,800",
    description:
      "For a business, campaign, or service that needs one sharp page built around a clear offer and inquiry path.",
    items: ["Structure and copy direction", "Responsive design", "Form or WhatsApp flow", "Launch-ready build"],
  },
  {
    title: "Website or Store",
    price: "From $3,500",
    description:
      "For businesses that need a full brand website or e-commerce store with a clear shopping or contact experience.",
    items: ["Core content pages", "Design and development", "Mobile optimization", "Testing and launch"],
  },
  {
    title: "Platform or App",
    price: "Custom",
    description:
      "For more complex products such as web platforms, dashboards, mobile apps, or redesigns of existing digital products.",
    items: ["UX definition", "Screens and flows", "Design and development", "Existing product improvement"],
  },
];

export const contactReasons = [
  { label: "Landing page", icon: MousePointer2 },
  { label: "Business website", icon: LayoutDashboard },
  { label: "E-commerce website", icon: Blocks },
  { label: "Web platform", icon: Code2 },
  { label: "Mobile app", icon: Smartphone },
  { label: "Redesign & improvement", icon: WandSparkles },
];
