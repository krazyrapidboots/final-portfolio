# Densel Lacson — Premium Portfolio

A production-ready, fully animated personal portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **shadcn/ui** and **Geist (Vercel) fonts**. Dark, minimal and premium — inspired by Linear, Vercel, Framer, Raycast and Stripe.

> ✨ **The best part:** you can edit your entire website by changing a few data files — without ever touching a React component.

---

## Table of contents

1. [Quick start](#1-quick-start)
2. [`npm install`](#2-npm-install)
3. [`npm run dev`](#3-npm-run-dev)
4. [`npm run build`](#4-npm-run-build)
5. [Deploy to Vercel](#5-deploy-to-vercel)
6. [Folder structure](#6-folder-structure)
7. [How to edit `portfolio.ts`](#7-how-to-edit-dataportfoliots)
8. [How to replace images](#8-how-to-replace-images)
9. [How to replace your resume](#9-how-to-replace-your-resume)
10. [How to add projects](#10-how-to-add-projects-social--videos--graphics)
11. [How to change colors](#11-how-to-change-colors)
12. [How to change fonts](#12-how-to-change-fonts)
13. [How to update social links](#13-how-to-update-social-links)

---

## 1. Quick start

You only need **[Node.js 18.18+](https://nodejs.org)** installed. Then, in the project folder:

```bash
npm install
npm run dev
```

Open **http://localhost:3000** in your browser. That's it. 🎉

---

## 2. `npm install`

This downloads every package the project needs (Next.js, React, Tailwind, Framer Motion, etc.) into a `node_modules` folder. Run it **once** after downloading the project, and again only when dependencies change.

```bash
npm install
```

---

## 3. `npm run dev`

Starts the **development server** with hot-reload — every time you save a file, the browser updates automatically. Use this while editing.

```bash
npm run dev
```

Visit **http://localhost:3000**.

---

## 4. `npm run build`

Creates an **optimized production build** and checks for TypeScript / lint errors. Run this before deploying to make sure everything is healthy.

```bash
npm run build      # build the production bundle
npm run start      # preview the production build locally
```

---

## 5. Deploy to Vercel

Vercel is free for personal projects and made by the creators of Next.js.

**Option A — from GitHub (recommended)**

1. Push this project to a GitHub repository.
2. Go to **[vercel.com/new](https://vercel.com/new)** and sign in with GitHub.
3. Click **Import** on your repository.
4. Leave all settings as default (Vercel auto-detects Next.js) and click **Deploy**.
5. Done — you get a live URL like `https://your-name.vercel.app`.

**Option B — from the terminal**

```bash
npm i -g vercel
vercel
```

> After deploying, update `meta.siteUrl` in `data/portfolio.ts` to your real Vercel URL so SEO links are correct.

---

## 6. Folder structure

```
.
├── app/                  # Next.js App Router: pages, layout, SEO routes
│   ├── globals.css       #   → global styles + color theme tokens
│   ├── layout.tsx        #   → root layout, fonts & site metadata (SEO)
│   ├── page.tsx          #   → the single-page site (assembles all sections)
│   ├── robots.ts         #   → auto-generated robots.txt
│   └── sitemap.ts        #   → auto-generated sitemap.xml
│
├── components/           # All React UI
│   ├── ui/               #   → shadcn/ui primitives (button, card, dialog…)
│   ├── sections/         #   → page sections (hero, about, skills, contact…)
│   ├── featured/         #   → Featured Work: tabs, cards & modals
│   └── *.tsx             #   → shared pieces (navbar, background, footer…)
│
├── data/                 # ⭐ EDIT YOUR CONTENT HERE (no coding needed)
│   ├── portfolio.ts      #   → name, about, skills, services, experience…
│   ├── social-media.ts   #   → "Social Media" campaign cards
│   ├── videos.ts         #   → "Video Editing" gallery
│   └── graphics.ts       #   → "Graphic Design" gallery
│
├── hooks/                # Reusable React hooks (scroll spy, mounted check)
├── lib/                  # Helpers (cn() class merger, icon registry)
├── types/                # TypeScript types for all the data files
├── public/               # Static files served as-is (resume.pdf, favicon…)
│
├── tailwind.config.ts    # Tailwind theme (colors, animations)
├── next.config.mjs       # Next.js config (image domains, etc.)
└── package.json          # Scripts & dependencies
```

### What each folder is for

| Folder | Purpose |
| --- | --- |
| **app/** | The pages and global setup. Most people never touch this. |
| **components/** | The visual building blocks. Edit here only to change *design/behavior*. |
| **data/** | Your content. **This is where you'll spend 99% of your time.** |
| **hooks/** | Small reusable bits of logic. |
| **lib/** | Utility functions and the icon registry. |
| **types/** | Type definitions that give you autocomplete and catch typos. |
| **public/** | Files like your `resume.pdf`, favicon and any local images. |

---

## 7. How to edit `data/portfolio.ts`

This single file controls your **name, hero text, about, skills, services, experience, social links and contact info**.

Open `data/portfolio.ts` and change the values. For example:

```ts
person: {
  name: "Densel Lacson",          // ← your name
  email: "you@example.com",        // ← your email
  phone: "+63 900 000 0000",       // ← your phone
  roles: [                          // ← the typing animation in the hero
    "Junior Web Developer",
    "Video Editor",
  ],
  resumeUrl: "/resume.pdf",         // ← your CV (see section 9)
},
```

Save the file and the site updates instantly. **No component edits required.**

To add a skill, just add a line:

```ts
skills: [
  { name: "Python", level: 80, category: "Backend & Data" },
]
```

---

## 8. How to replace images

You have two easy options:

**A) Use a local image (recommended for your photo)**

1. Drop the image into the `public/` folder, e.g. `public/avatar.jpg`.
2. Reference it with a leading slash:

```ts
avatar: "/avatar.jpg",
```

**B) Use an online image URL**

Paste any image URL directly:

```ts
image: "https://images.unsplash.com/photo-...",
```

> ℹ️ If you use a URL from a **new website**, add its domain to `next.config.mjs` under `images.remotePatterns` (Unsplash and YouTube are already allowed).

---

## 9. How to replace your resume

1. Name your CV exactly **`resume.pdf`**.
2. Put it in the **`public/`** folder (replace the placeholder that's there).
3. Make sure `data/portfolio.ts` has `resumeUrl: "/resume.pdf"`.

The **Download Resume** buttons will now serve your real CV.

---

## 10. How to add projects (Social · Videos · Graphics)

Each Featured Work category has its own file. **To add an item, copy an existing object and change the values — that's it.** The grid, search and modals update automatically.

### Social Media → `data/social-media.ts`

```ts
{
  id: "my-campaign",                       // unique id (kebab-case)
  title: "My Campaign",
  platform: "TikTok",                      // TikTok | Instagram | Facebook | YouTube | Multi-platform
  image: "/social/campaign.jpg",
  description: "Short one-liner.",
  services: ["Content Calendar", "Editing", "Captions"],
  metrics: [
    { label: "Reach", value: "+320%" },
    { label: "Followers", value: "+12K" },
    { label: "Avg. views", value: "85K" },
  ],
  details: { objective: "...", strategy: "...", results: "..." },
}
```

### Video Editing → `data/videos.ts`

```ts
{
  id: "my-reel",
  title: "My Reel",
  description: "...",
  thumbnail: "/videos/thumb.jpg",
  platform: "TikTok",                      // TikTok | Instagram | YouTube Shorts | Facebook Reels | YouTube
  editingSoftware: ["CapCut Pro"],
  aiTools: ["ChatGPT"],
  tags: ["CapCut Pro", "AI Voice"],
  videoUrl: "https://www.youtube.com/embed/VIDEO_ID", // optional → plays in modal
  details: { objective: "...", process: "...", results: "..." },
}
```

### Graphic Design → `data/graphics.ts`

```ts
{
  id: "my-design",
  title: "My Design",
  category: "Thumbnail",                    // Thumbnail | Branding | Poster | Social Post | Logo
  image: "/graphics/design.jpg",
  tools: ["Canva", "Adobe Photoshop"],
  description: "...",
}
```

> The site is built to scale to **100+ videos, 100+ designs and many campaigns** — a search bar and a **“Load more”** button keep everything fast.

---

## 11. How to change colors

All theme colors live as CSS variables in **`app/globals.css`** (inside `:root`). They use **HSL** values.

```css
:root {
  --background: 240 10% 3.9%;   /* page background  #09090B */
  --card:       240 6% 10%;     /* cards            #18181B */
  --primary:    142 72% 38%;    /* primary          #16A34A */
  --accent:     142 71% 45%;    /* accent           #22C55E */
  --foreground: 0 0% 98%;       /* text             #FAFAFA */
}
```

To convert a hex color to HSL, search “hex to hsl” online and paste the three numbers (without commas, without `hsl()`).

---

## 12. How to change fonts

The project uses **Geist** (Vercel's font) via the `geist` package, wired up in `app/layout.tsx`.

To switch to a Google Font instead:

```tsx
// app/layout.tsx
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });
// then add `inter.variable` to the <html> className
```

Keep the CSS variable name `--font-geist-sans` so the rest of the styling still works.

---

## 13. How to update social links

Edit the `social` array in **`data/portfolio.ts`**:

```ts
social: [
  { label: "GitHub",   href: "https://github.com/yourname",   icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/you",   icon: "linkedin" },
  { label: "Facebook", href: "https://facebook.com/you",      icon: "facebook" },
  { label: "Email",    href: "mailto:you@example.com",        icon: "mail" },
  { label: "Phone",    href: "tel:+639000000000",             icon: "phone" },
],
```

Available `icon` values: `github`, `linkedin`, `facebook`, `mail`, `phone`, `instagram`, `youtube`.

---

## Tech stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS** + **tailwindcss-animate**
- **Framer Motion** (animations)
- **shadcn/ui** primitives + **Radix UI**
- **lucide-react** (icons)
- **Geist** (Vercel fonts)

## License

Personal portfolio template — free for Densel Lacson to use and customize. 💜
