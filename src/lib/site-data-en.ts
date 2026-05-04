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
    title: "Web Design",
    description:
      "Conversion-focused websites with memorable art direction, clear storytelling, and responsive layouts.",
    icon: LayoutDashboard,
  },
  {
    title: "Mobile App Design",
    description:
      "Native-feeling iOS and Android experiences with thoughtful flows, polished UI, and scalable components.",
    icon: Smartphone,
  },
  {
    title: "Design Systems",
    description:
      "Reusable tokens, components, interaction patterns, and documentation that keep products moving fast.",
    icon: Blocks,
  },
  {
    title: "UX Strategy",
    description:
      "Audits, user journeys, wireframes, and prioritization that turn fuzzy ideas into buildable product direction.",
    icon: Compass,
  },
];

export const projects = [
  {
    slug: "nova-pay",
    title: "Nova Pay",
    type: "Fintech mobile app",
    year: "2026",
    description:
      "A confident wallet experience for freelancers who need fast invoices, clean analytics, and instant payouts.",
    metrics: ["42% faster onboarding", "18 screens", "Design system"],
    palette: "from-[#006d77] via-[#94e857] to-[#ffd166]",
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
    title: "Discover",
    description:
      "We clarify goals, audience, constraints, and the commercial job the interface needs to do.",
    icon: ScanSearch,
  },
  {
    title: "Shape",
    description:
      "I map flows, sketch wireframes, and define the hierarchy before pushing pixels.",
    icon: PencilRuler,
  },
  {
    title: "Design",
    description:
      "High-fidelity screens, component states, motion notes, and design system foundations come together.",
    icon: WandSparkles,
  },
  {
    title: "Hand Off",
    description:
      "You receive dev-ready files, specs, assets, and support during implementation.",
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
