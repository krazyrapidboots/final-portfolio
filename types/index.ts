/**
 * Shared TypeScript contracts for all editable content.
 * Every data file (portfolio.ts, websites.ts, videos.ts, games.ts)
 * is typed against these interfaces so the editor gives you autocomplete
 * and catches typos before they reach the browser.
 */

import type { LucideIcon } from "lucide-react";

/* ---------------------------------- Core ---------------------------------- */

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  /** lucide-react icon name, resolved in the component layer */
  icon:
    | "github"
    | "linkedin"
    | "facebook"
    | "mail"
    | "phone"
    | "instagram"
    | "youtube"
    | "briefcase";
}

export interface Skill {
  name: string;
  level: number; // 0 - 100
  category: SkillCategory;
}

export type SkillCategory =
  | "Frontend"
  | "Backend & Data"
  | "Tools & DevOps"
  | "Design & Media"
  | "AI & Automation";

export interface Service {
  title: string;
  description: string;
  icon: keyof typeof import("@/lib/icon-map").iconMap;
  features: string[];
}

export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "education" | "work" | "project" | "learning";
}

export interface AboutHighlight {
  title: string;
  description: string;
  icon: keyof typeof import("@/lib/icon-map").iconMap;
}

export interface PortfolioData {
  meta: {
    title: string;
    description: string;
    siteUrl: string;
    keywords: string[];
  };
  person: {
    name: string;
    firstName: string;
    greeting: string;
    degree: string;
    specialization: string;
    roles: string[]; // used by the typing effect
    location: string;
    email: string;
    phone: string;
    avatar: string;
    resumeUrl: string;
    available: boolean;
  };
  hero: {
    badge: string;
    tagline: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
    highlights: AboutHighlight[];
    stats: { label: string; value: string }[];
  };
  skills: Skill[];
  services: Service[];
  experience: ExperienceItem[];
  social: SocialLink[];
}

/* ----------------------------- Featured work ------------------------------ */

export type VideoPlatform =
  | "TikTok"
  | "Instagram"
  | "YouTube Shorts"
  | "Facebook Reels"
  | "YouTube";

export interface VideoProject {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  platform: VideoPlatform;
  editingSoftware: string[];
  aiTools: string[];
  tags: string[];
  videoUrl?: string; // YouTube/Vimeo embed url
  details: {
    objective: string;
    process: string;
    results: string;
  };
}

export interface GraphicProject {
  id: string;
  title: string;
  category: string; // e.g. Thumbnail, Branding, Poster, Social Post, Logo
  image: string;
  tools: string[];
  description: string;
}

export interface SocialCampaign {
  id: string;
  title: string;
  platform: string; // e.g. TikTok, Instagram, Multi-platform
  image: string;
  description: string;
  services: string[];
  metrics: { label: string; value: string }[];
  details: {
    objective: string;
    strategy: string;
    results: string;
  };
}
