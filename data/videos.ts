import type { VideoProject } from "@/types";

/**
 * AI Content & Edited Videos — append an object to add a new video.
 * Set `videoUrl` to a YouTube/Vimeo embed URL to play it inside the modal;
 * leave it undefined to show the thumbnail with a play overlay.
 */
export const videos: VideoProject[] = [
  {
    id: "tiktok-product-ad",
    title: "Viral TikTok Product Ad",
    description:
      "A punchy product ad edited for maximum retention with AI captions and a trending hook.",
    thumbnail:
      "https://images.unsplash.com/photo-1607968565043-36af90dde238?q=80&w=1200&auto=format&fit=crop",
    platform: "TikTok",
    editingSoftware: ["CapCut Pro"],
    aiTools: ["ChatGPT", "AI Voice"],
    tags: ["CapCut Pro", "ChatGPT", "AI Voice", "AI Workflow"],
    videoUrl: "https://www.youtube.com/embed/OIkAdJxXROE",
    details: {
      objective:
        "Drive clicks and sales for a trending product with a 3-second hook and tight pacing.",
      process:
        "Scripted the hook with ChatGPT, generated a natural AI voiceover, then cut to the beat in CapCut Pro with auto-captions and zoom transitions.",
      results:
        "Strong watch-through and a noticeable lift in profile visits and link clicks.",
    },
  },
  {
    id: "fb-reel-promo",
    title: "Facebook Reels Promo",
    description:
      "A high-energy promo built for the Facebook Reels audience with bold text and quick cuts.",
    thumbnail:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=1200&auto=format&fit=crop",
    platform: "Facebook Reels",
    editingSoftware: ["CapCut Pro", "Canva"],
    aiTools: ["AI Images", "ChatGPT"],
    tags: ["CapCut Pro", "Canva", "AI Images", "ChatGPT"],
    videoUrl: "https://www.youtube.com/embed/z5K0Kj4_vi0",
    details: {
      objective: "Promote an offer with a thumb-stopping first frame.",
      process:
        "Designed bold title cards in Canva, scripted with ChatGPT and edited rapid cuts in CapCut Pro.",
      results: "Increased reach and click-throughs to the landing page.",
    },
  },
  {
    id: "ai-faceless-channel",
    title: "Faceless AI Video",
    description:
      "A fully AI-assisted faceless video — script, voice and visuals generated and edited end to end.",
    thumbnail:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    platform: "YouTube",
    editingSoftware: ["CapCut Pro"],
    aiTools: ["Claude", "AI Voice", "AI Images", "AI Workflow"],
    tags: ["Claude", "AI Voice", "AI Images", "AI Workflow", "CapCut Pro"],
    videoUrl: "https://www.youtube.com/embed/SX0W5T7Qs40",
    details: {
      objective: "Produce a polished long-form video without on-camera footage.",
      process:
        "Wrote the script with Claude, generated narration and visuals with AI, then edited and synced everything in CapCut Pro.",
      results: "A repeatable, scalable workflow for faceless content.",
    },
  },
];

export default videos;
