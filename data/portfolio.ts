import type { PortfolioData } from "@/types";

/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  EDIT EVERYTHING HERE — single source of truth for the website.    ║
 * ║  Change text, links, skills, services, etc. without ever opening   ║
 * ║  a React component. Featured projects live in:                     ║
 * ║      data/websites.ts · data/videos.ts · data/games.ts             ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */
export const portfolio: PortfolioData = {
  /* ----------------------------- SEO / Meta ----------------------------- */
  meta: {
    title:
      "Densel Lacson — Social Media Specialist, Video Editor & Graphic Designer",
    description:
      "Portfolio of Densel Lacson — Social Media Specialist, Remote Video Editor & Graphic Designer, and Virtual Assistant. I create scroll-stopping content, polished edits and clean, on-brand design — powered by AI.",
    siteUrl: "https://densel-lacson.vercel.app",
    keywords: [
      "Densel Lacson",
      "Social Media Specialist",
      "Social Media Manager",
      "Video Editor",
      "Remote Video Editor",
      "Graphic Designer",
      "Virtual Assistant",
      "Content Creator",
      "CapCut Editor",
      "Canva Designer",
      "Portfolio",
    ],
  },

  /* ------------------------------- Person ------------------------------- */
  person: {
    name: "Densel Lacson",
    firstName: "Densel",
    greeting: "Hi, I'm",
    degree: "Social Media Specialist & Content Creator",
    specialization: "Remote Video Editor · Graphic Designer · Virtual Assistant",
    // Drives the typing effect in the hero.
    roles: [
      "Social Media Specialist",
      "Remote Video Editor",
      "Graphic Designer",
      "Virtual Assistant",
      "Content Creator",
    ],
    location: "Philippines",
    email: "densellacson015@gmail.com",
    phone: "+63 900 000 0000",
    // 📸 YOUR PHOTO: just replace /public/avatar.jpg with your own image
    // (keep the same filename) — no need to edit this line.
    avatar: "/avatar.jpg",
    // Drop your CV in /public/resume.pdf and keep this path.
    resumeUrl: "/resume.pdf",
    available: true,
  },

  /* -------------------------------- Hero -------------------------------- */
  hero: {
    badge: "Available for remote & freelance work",
    tagline:
      "I help brands and creators grow with scroll-stopping social content, polished video edits and clean, on-brand design — backed by reliable virtual assistance and AI-powered workflows.",
  },

  /* -------------------------------- About ------------------------------- */
  about: {
    heading: "Content that connects, design that converts.",
    paragraphs: [
      "I'm a Social Media Specialist, Remote Video Editor & Graphic Designer who helps brands and creators show up online and stand out. From planning the content to editing the final cut and designing the assets around it, I handle the full creative journey — so your feed stays consistent, on-brand and growing.",
      "My day-to-day is short-form video editing, eye-catching graphics, content calendars and the kind of dependable virtual assistance that keeps everything running smoothly. I lean on AI tools like ChatGPT and Claude to work faster and smarter without losing the human touch.",
      "I also bring a technical background — I hold a BS in Information Technology and can build websites and systems when a project calls for it. That mix means I understand both the creative and the technical side of getting things done.",
    ],
    highlights: [
      {
        title: "Social Media Management",
        description:
          "Content calendars, on-brand creatives and growth strategies across TikTok, IG, FB & YouTube.",
        icon: "megaphone",
      },
      {
        title: "Video Editing",
        description:
          "Short-form & long-form edits in CapCut Pro with AI-assisted captions, voiceovers and pacing.",
        icon: "video",
      },
      {
        title: "Graphic Design",
        description:
          "Brand kits, thumbnails and marketing assets crafted in Canva & Adobe Photoshop.",
        icon: "palette",
      },
      {
        title: "Virtual Assistance",
        description:
          "Reliable admin, research, scheduling and operations support to keep you focused.",
        icon: "headset",
      },
      {
        title: "AI-Powered Workflows",
        description:
          "Faster content, captions and ideation using ChatGPT, Claude and modern AI tooling.",
        icon: "bot",
      },
      {
        title: "Web & Technical Skills",
        description:
          "Not just creative — I can also build websites and systems with React, Next.js & more.",
        icon: "code",
      },
    ],
    stats: [
      { label: "Videos edited", value: "100+" },
      { label: "Designs created", value: "200+" },
      { label: "Happy clients", value: "20+" },
      { label: "Platforms managed", value: "5+" },
    ],
  },

  /* ------------------------------- Skills ------------------------------- */
  skills: [
    { name: "HTML", level: 95, category: "Frontend" },
    { name: "CSS", level: 92, category: "Frontend" },
    { name: "JavaScript", level: 88, category: "Frontend" },
    { name: "TypeScript", level: 82, category: "Frontend" },
    { name: "React", level: 85, category: "Frontend" },
    { name: "Next.js", level: 84, category: "Frontend" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },

    { name: "VB.NET", level: 80, category: "Backend & Data" },
    { name: "SQL Server", level: 78, category: "Backend & Data" },
    { name: "Firebase", level: 80, category: "Backend & Data" },

    { name: "Git", level: 85, category: "Tools & DevOps" },
    { name: "GitHub", level: 88, category: "Tools & DevOps" },
    { name: "Vercel", level: 86, category: "Tools & DevOps" },
    { name: "Cursor", level: 84, category: "Tools & DevOps" },

    { name: "CapCut Pro", level: 92, category: "Design & Media" },
    { name: "Canva", level: 94, category: "Design & Media" },
    { name: "Adobe Photoshop", level: 82, category: "Design & Media" },
    { name: "Video Editing", level: 90, category: "Design & Media" },
    { name: "Graphic Design", level: 86, category: "Design & Media" },

    { name: "AI Prompt Engineering", level: 90, category: "AI & Automation" },
    { name: "ChatGPT", level: 92, category: "AI & Automation" },
    { name: "Claude", level: 90, category: "AI & Automation" },
    { name: "AI Automation", level: 85, category: "AI & Automation" },
    { name: "Social Media Management", level: 88, category: "AI & Automation" },
  ],

  /* ------------------------------ Services ------------------------------ */
  services: [
    {
      title: "Social Media Management",
      description:
        "End-to-end content strategy, creation and scheduling that grows audiences and keeps brands consistent.",
      icon: "megaphone",
      features: ["Content calendars", "On-brand creatives", "Growth strategy", "Community management"],
    },
    {
      title: "Video Editing",
      description:
        "Scroll-stopping short-form and polished long-form edits with captions, motion and AI voiceovers.",
      icon: "video",
      features: ["Reels & Shorts", "AI captions", "Color & sound", "Motion graphics"],
    },
    {
      title: "Graphic Design",
      description:
        "Thumbnails, brand kits and marketing assets that look premium and convert.",
      icon: "palette",
      features: ["Brand kits", "Thumbnails", "Ad creatives", "Print & digital"],
    },
    {
      title: "Virtual Assistance",
      description:
        "Dependable admin, research and operations support so you can focus on what matters.",
      icon: "headset",
      features: ["Inbox & calendar", "Research", "Data entry", "Operations"],
    },
    {
      title: "Content Strategy",
      description:
        "Content calendars, hooks and ideas that keep your feed consistent and on-brand.",
      icon: "workflow",
      features: ["Content planning", "Hook writing", "Trend research", "Captions & copy"],
    },
    {
      title: "AI Automation",
      description:
        "AI-powered workflows that speed up content creation, captions, ideation and more.",
      icon: "bot",
      features: ["AI captions & scripts", "Faceless content", "Prompt engineering", "Workflows"],
    },
  ],

  /* ----------------------------- Experience ----------------------------- */
  experience: [
    {
      title: "BS Information Technology",
      organization: "University",
      period: "2022 — Present",
      description:
        "Pursuing a degree in Information Technology, building a strong foundation in programming, databases and software engineering.",
      type: "education",
    },
    {
      title: "Specialization in Game Development",
      organization: "University",
      period: "2023 — Present",
      description:
        "Focused track exploring game design, mechanics, engines and interactive systems with Unity and beyond.",
      type: "education",
    },
    {
      title: "Freelance Projects",
      organization: "Self-employed",
      period: "2023 — Present",
      description:
        "Delivering web development, video editing, graphic design and virtual assistance for clients across platforms.",
      type: "work",
    },
    {
      title: "Portfolio Projects",
      organization: "Personal",
      period: "2022 — Present",
      description:
        "Designing and building management systems, dashboards, games and AI tools to sharpen my craft.",
      type: "project",
    },
    {
      title: "Continuous Learning",
      organization: "Online & Self-study",
      period: "Always",
      description:
        "Constantly leveling up in modern web frameworks, AI tooling and design — learning in public and shipping often.",
      type: "learning",
    },
  ],

  /* ------------------------------- Social ------------------------------- */
  social: [
    { label: "GitHub", href: "https://github.com/", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
    { label: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
    { label: "Email", href: "mailto:densellacson015@gmail.com", icon: "mail" },
    { label: "Phone", href: "tel:+639000000000", icon: "phone" },
  ],
};

export default portfolio;
