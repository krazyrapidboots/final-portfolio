import type { GraphicProject } from "@/types";

/**
 * Graphic Design — append an object to add a new design piece.
 * The gallery, search and lightbox modal update automatically.
 * Replace Unsplash images with your real designs in /public.
 */
export const graphics: GraphicProject[] = [
  {
    id: "yt-thumbnail-pack",
    title: "YouTube Thumbnail Pack",
    category: "Thumbnail",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop",
    tools: ["Adobe Photoshop", "Canva"],
    description:
      "High-CTR thumbnails with bold typography, clean cut-outs and punchy color — designed to win the click.",
  },
  {
    id: "brand-identity-kit",
    title: "Brand Identity Kit",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
    tools: ["Canva", "Adobe Photoshop"],
    description:
      "A cohesive brand kit — logo, color palette, fonts and templates — for a consistent look across every platform.",
  },
  {
    id: "instagram-carousel",
    title: "Instagram Carousel",
    category: "Social Post",
    image:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1200&auto=format&fit=crop",
    tools: ["Canva"],
    description:
      "Swipe-worthy educational carousels with clear hierarchy, on-brand colors and a strong call to action.",
  },
  {
    id: "event-poster",
    title: "Event Promo Poster",
    category: "Poster",
    image:
      "https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&w=1200&auto=format&fit=crop",
    tools: ["Adobe Photoshop"],
    description:
      "A bold, modern event poster built to grab attention both online and in print.",
  },
  {
    id: "logo-suite",
    title: "Minimal Logo Suite",
    category: "Logo",
    image:
      "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=1200&auto=format&fit=crop",
    tools: ["Canva", "Adobe Photoshop"],
    description:
      "Clean, versatile logo marks that scale from a favicon to a billboard without losing clarity.",
  },
  {
    id: "ad-creatives",
    title: "Ad Creative Set",
    category: "Social Post",
    image:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1200&auto=format&fit=crop",
    tools: ["Canva", "Adobe Photoshop"],
    description:
      "Scroll-stopping paid ad creatives in multiple sizes, optimized for conversions across platforms.",
  },
  {
    id: "product-mockups",
    title: "Product Mockups",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=1200&auto=format&fit=crop",
    tools: ["Adobe Photoshop"],
    description:
      "Polished product mockups that present merch and digital products in the best possible light.",
  },
  {
    id: "quote-graphics",
    title: "Quote Graphics Series",
    category: "Social Post",
    image:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1200&auto=format&fit=crop",
    tools: ["Canva"],
    description:
      "A consistent series of quote graphics that keep a feed cohesive and instantly recognizable.",
  },
];

export default graphics;
