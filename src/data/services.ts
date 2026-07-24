import { MonitorPlay, Film, Radio, Layers, Calendar, Cpu } from "lucide-react";

export const services = [
  {
    id: "01",
    title: "Brand Identity & Strategy",
    slug: "brand-identity",
    icon: Layers,
    description: "We invent and reinvigorate brands. From initial consultation to complete brand overhauls, we build identities that connect with audiences based on deep consumer insights.",
    capabilities: [
      "Brand Consultation",
      "Logo Design",
      "Complete Brand Overhauls",
      "Network Branding",
      "Launch Campaigns",
    ],
  },
  {
    id: "02",
    title: "Film & Video Production",
    slug: "film-production",
    icon: Film,
    description: "Our TV working palette mixes live action, motion graphics, and direction to evoke a strong impactful message. We create cinematic experiences for any screen.",
    capabilities: [
      "Branded Content",
      "Television Commercials (TVCs)",
      "Corporate Films",
      "Broadcast Promos",
      "Explainer & Educational Videos",
    ],
  },
  {
    id: "03",
    title: "Broadcast Design",
    slug: "broadcast-design",
    icon: MonitorPlay,
    description: "Rooted in our deep heritage with major news networks, we deliver channel packaging, graphics packages, and UI designs that are both creatively and technically sound.",
    capabilities: [
      "Channel Packaging",
      "Graphics Packages",
      "Ticker Development",
      "Local Affiliate & Syndicated Broadcast",
    ],
  },
  {
    id: "04",
    title: "Motion Graphics",
    slug: "motion-graphics",
    icon: Radio,
    description: "We consider motion graphics as essential as the camera and lens themselves. We transform production value with high-end CGI, typography, and mixed media.",
    capabilities: [
      "2D & 3D Animation",
      "CGI",
      "Typography Animation",
      "Mixed Media",
    ],
  },
  {
    id: "05",
    title: "Broadcast Technology",
    slug: "broadcast-technology",
    icon: Cpu,
    description: "Pushing the boundaries of live broadcasting with cutting-edge immersive environments, trusted by national channels for major election and budget coverages.",
    capabilities: [
      "Augmented Reality (AR) Solutions",
      "Virtual Sets",
      "Vizrt Integration",
      "Stype Solutions",
    ],
  },
  {
    id: "06",
    title: "Events & Digital",
    slug: "events-digital",
    icon: Calendar,
    description: "Extending brand experiences into physical and digital spaces through studio design, conceptualization, and interactive webcast environments.",
    capabilities: [
      "Event Conceptualization & Design",
      "Studio Design",
      "Webcast Design",
      "UI/UX Design",
    ],
  },
];
