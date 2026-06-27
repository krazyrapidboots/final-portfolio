import type { SocialCampaign } from "@/types";

/**
 * Social Media Management — append an object to add a campaign/case.
 * The cards, search and modal (objective · strategy · results) update
 * automatically. Metrics are shown as quick stat chips on the card.
 */
export const socialCampaigns: SocialCampaign[] = [
  {
    id: "tiktok-growth",
    title: "TikTok Growth Campaign",
    platform: "TikTok",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    description:
      "Built and managed a content engine that turned a quiet account into a consistent source of reach and leads.",
    services: ["Content Calendar", "Short-form Editing", "Hooks & Captions", "Community Mgmt"],
    metrics: [
      { label: "Reach", value: "+320%" },
      { label: "Followers", value: "+12K" },
      { label: "Avg. views", value: "85K" },
    ],
    details: {
      objective:
        "Grow a brand-new TikTok presence into a reliable channel for awareness and inbound interest.",
      strategy:
        "Researched trends and hooks, planned a 3-posts-per-day calendar, edited punchy short-form videos and engaged the community daily to feed the algorithm.",
      results:
        "Reach grew over 320% in 90 days with several videos crossing 100K views and a steady stream of inbound messages.",
    },
  },
  {
    id: "ig-brand-management",
    title: "Instagram Brand Management",
    platform: "Instagram",
    image:
      "https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=1200&auto=format&fit=crop",
    description:
      "Full-service management of a lifestyle brand's Instagram — feed design, reels, stories and engagement.",
    services: ["Feed Design", "Reels Editing", "Stories", "Scheduling"],
    metrics: [
      { label: "Engagement", value: "+180%" },
      { label: "Saves", value: "+240%" },
      { label: "Reach", value: "+150%" },
    ],
    details: {
      objective:
        "Transform an inconsistent Instagram into a premium, cohesive brand presence that drives engagement.",
      strategy:
        "Designed a unified feed aesthetic, produced weekly reels and stories, and posted consistently with on-brand captions and hashtags.",
      results:
        "Engagement nearly tripled, saves and shares climbed sharply, and the brand's feed became instantly recognizable.",
    },
  },
  {
    id: "multi-platform-launch",
    title: "Multi-Platform Product Launch",
    platform: "Multi-platform",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop",
    description:
      "Coordinated a synchronized launch across TikTok, Instagram and Facebook with tailored content for each.",
    services: ["Campaign Strategy", "Video & Graphics", "Cross-posting", "Reporting"],
    metrics: [
      { label: "Launch reach", value: "500K+" },
      { label: "Clicks", value: "+9K" },
      { label: "Platforms", value: "3" },
    ],
    details: {
      objective:
        "Maximize awareness and traffic for a product launch across multiple social platforms at once.",
      strategy:
        "Built a launch calendar, adapted hero content into platform-native formats, scheduled a coordinated rollout and tracked performance throughout.",
      results:
        "The launch reached over half a million people in its first week and drove thousands of clicks to the landing page.",
    },
  },
  {
    id: "facebook-page-growth",
    title: "Facebook Page Revamp",
    platform: "Facebook",
    image:
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1200&auto=format&fit=crop",
    description:
      "Revived a dormant Facebook page with fresh branding, reels and a consistent posting rhythm.",
    services: ["Page Branding", "Reels", "Content Calendar", "Engagement"],
    metrics: [
      { label: "Page likes", value: "+85%" },
      { label: "Reach", value: "+210%" },
      { label: "Shares", value: "+160%" },
    ],
    details: {
      objective:
        "Bring an inactive Facebook page back to life and rebuild an engaged local audience.",
      strategy:
        "Refreshed the page branding, repurposed short-form video for Reels, and committed to a steady, value-first posting schedule.",
      results:
        "Reach more than tripled and the page rebuilt an active, growing community within months.",
    },
  },
];

export default socialCampaigns;
