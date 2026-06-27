"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Megaphone, Clapperboard, Palette, Search, Plus } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal, StaggerGroup } from "@/components/motion-primitives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { SocialCard } from "./social-card";
import { VideoCard } from "./video-card";
import { GraphicCard } from "./graphic-card";

import { socialCampaigns } from "@/data/social-media";
import { videos } from "@/data/videos";
import { graphics } from "@/data/graphics";

type TabKey = "social" | "videos" | "graphics";

const TABS: { key: TabKey; label: string; icon: typeof Megaphone; emoji: string }[] = [
  { key: "social", label: "Social Media", icon: Megaphone, emoji: "📱" },
  { key: "videos", label: "Video Editing", icon: Clapperboard, emoji: "🎬" },
  { key: "graphics", label: "Graphic Design", icon: Palette, emoji: "🎨" },
];

// How many items to reveal per "Load more" click (keeps things fast & scalable).
const PAGE_SIZE = 6;

export function FeaturedWork() {
  const [tab, setTab] = useState<TabKey>("social");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  // Reset pagination & search whenever the tab changes.
  const changeTab = (key: TabKey) => {
    setTab(key);
    setVisible(PAGE_SIZE);
    setQuery("");
  };

  const q = query.trim().toLowerCase();

  const filteredSocial = useMemo(
    () =>
      socialCampaigns.filter((c) =>
        [c.title, c.description, c.platform, ...c.services]
          .join(" ")
          .toLowerCase()
          .includes(q)
      ),
    [q]
  );
  const filteredVideos = useMemo(
    () =>
      videos.filter((v) =>
        [v.title, v.description, v.platform, ...v.tags]
          .join(" ")
          .toLowerCase()
          .includes(q)
      ),
    [q]
  );
  const filteredGraphics = useMemo(
    () =>
      graphics.filter((g) =>
        [g.title, g.description, g.category, ...g.tools]
          .join(" ")
          .toLowerCase()
          .includes(q)
      ),
    [q]
  );

  const counts = {
    social: filteredSocial.length,
    videos: filteredVideos.length,
    graphics: filteredGraphics.length,
  };

  const totalForTab = counts[tab];

  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Work"
          title="Content, edits & designs I'm proud of"
          description="Social media campaigns, edited videos and graphic design — explore by category or search."
        />

        {/* Tabs */}
        <Reveal className="mt-12 flex flex-col items-center gap-5">
          <div className="glass flex w-full max-w-xl flex-col gap-1 rounded-2xl p-1.5 sm:flex-row">
            {TABS.map((t) => {
              const isActive = tab === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => changeTab(t.key)}
                  className={cn(
                    "relative flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="featured-tab"
                      className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-primary/25 to-accent/25 ring-1 ring-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span aria-hidden>{t.emoji}</span>
                  <span className="hidden sm:inline">{t.label}</span>
                  <span className="text-xs opacity-70">({counts[t.key]})</span>
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisible(PAGE_SIZE);
              }}
              placeholder="Search content, platforms, tools…"
              className="pl-10"
              aria-label="Search featured work"
            />
          </div>
        </Reveal>

        {/* Content */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {tab === "social" && (
                <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredSocial.slice(0, visible).map((c) => (
                    <SocialCard key={c.id} campaign={c} />
                  ))}
                </StaggerGroup>
              )}

              {tab === "videos" && (
                <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {filteredVideos.slice(0, visible).map((v) => (
                    <VideoCard key={v.id} video={v} />
                  ))}
                </StaggerGroup>
              )}

              {tab === "graphics" && (
                <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredGraphics.slice(0, visible).map((g) => (
                    <GraphicCard key={g.id} graphic={g} />
                  ))}
                </StaggerGroup>
              )}

              {totalForTab === 0 && (
                <p className="py-16 text-center text-muted-foreground">
                  No results for “{query}”. Try a different search.
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Load more */}
          {visible < totalForTab && (
            <div className="mt-12 flex justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
              >
                <Plus className="h-4 w-4" />
                Load more ({totalForTab - visible} more)
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
