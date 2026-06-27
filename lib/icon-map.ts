import {
  Video,
  Share2,
  Palette,
  Code2,
  Bot,
  Headset,
  Sparkles,
  Brain,
  Rocket,
  Layers,
  PenTool,
  Megaphone,
  Workflow,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

/**
 * Central registry mapping the string keys used in data files
 * to real lucide-react icon components. Add a new icon here once
 * and reference it by key from any data file.
 */
export const iconMap = {
  video: Video,
  share: Share2,
  palette: Palette,
  code: Code2,
  bot: Bot,
  headset: Headset,
  sparkles: Sparkles,
  brain: Brain,
  rocket: Rocket,
  layers: Layers,
  pen: PenTool,
  megaphone: Megaphone,
  workflow: Workflow,
  graduation: GraduationCap,
} satisfies Record<string, LucideIcon>;

export type IconKey = keyof typeof iconMap;
