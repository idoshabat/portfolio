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
    type: "Architecture & planning studio",
    year: "2026",
    description:
      "A polished company website for an architecture and planning studio, built around clear navigation, confident visual hierarchy, project discovery, and a direct path from interest to contact.",
    metrics: ["Brand website", "Project gallery", "Client inquiries"],
    palette: "from-[#006d77] via-[#d9f99d] to-[#ffd166]",
    liveUrl: "https://www.layout-net.com/",
  },
  {
    slug: "next-level-academy",
    title: "Next Level Academy",
    type: "Basketball academy",
    year: "2026",
    description:
      "An energetic website for a basketball academy, designed to speak clearly to parents and players, present training programs, and create a strong path toward joining the academy.",
    metrics: ["Sports website", "Training signups", "Mobile experience"],
    palette: "from-[#12110f] via-[#ff4d2e] to-[#00a6fb]",
    liveUrl: "https://www.nextlevelacademy.com/",
  },
  {
    slug: "wellnest",
    title: "Wellnest",
    type: "Health booking platform",
    year: "2025",
    description:
      "A calmer booking flow that helps clients compare practitioners, reserve sessions, and manage care plans.",
    metrics: ["31% higher completion", "Web app", "UX research"],
    palette: "from-[#ff4d2e] via-[#00a6fb] to-[#94e857]",
  },
  {
    slug: "atlas-crm",
    title: "Atlas CRM",
    type: "B2B dashboard",
    year: "2025",
    description:
      "A dense sales workspace redesigned for scanning, confident follow-up, and fewer lost opportunities.",
    metrics: ["12 core flows", "SaaS UI", "Prototype"],
    palette: "from-[#12110f] via-[#006d77] to-[#ff4d2e]",
  },
];

export const processSteps = [
  {
    title: "Get in touch",
    description:
      "The process starts with a WhatsApp message or a contact-form submission. I reply, understand the project at a high level, and check whether it is a good fit.",
    icon: MessagesSquare,
  },
  {
    title: "Discovery call",
    description:
      "We clarify goals, audience, desired style, scope, deadline, and what success should look like for the business.",
    icon: ScanSearch,
  },
  {
    title: "Proposal & scope",
    description:
      "Once the direction is clear, you receive a structured proposal with deliverables, timeline, project stages, and what is included.",
    icon: CalendarCheck,
  },
  {
    title: "UX structure",
    description:
      "I define the page or screen structure, content hierarchy, and core user flow before moving into the full visual design.",
    icon: PencilRuler,
  },
  {
    title: "Design & feedback",
    description:
      "I create the polished visual direction, then we review, refine colors, components, screens, and details until the experience feels right.",
    icon: WandSparkles,
  },
  {
    title: "Development, testing & launch",
    description:
      "After the design is approved, the website moves into development, mobile and desktop testing, form and link setup, and a clean launch.",
    icon: Rocket,
  },
];

export const proofPoints = [
  { value: "36+", label: "Product screens designed" },
  { value: "4-6w", label: "Typical launch timeline" },
  { value: "100%", label: "Responsive by default" },
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
