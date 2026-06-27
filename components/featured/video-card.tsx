"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Sparkles, Clapperboard } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { fadeUp } from "@/components/motion-primitives";
import type { VideoProject } from "@/types";

const platformColor: Record<string, string> = {
  TikTok: "bg-[#ff0050]/15 text-[#ff5c8a]",
  Instagram: "bg-fuchsia-500/15 text-fuchsia-400",
  "YouTube Shorts": "bg-red-500/15 text-red-400",
  "Facebook Reels": "bg-blue-500/15 text-blue-400",
  YouTube: "bg-red-500/15 text-red-400",
};

export function VideoCard({ video }: { video: VideoProject }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.article
        variants={fadeUp}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        onClick={() => setOpen(true)}
        className="gradient-border group flex h-full cursor-pointer flex-col overflow-hidden"
      >
        {/* Thumbnail (vertical-friendly) */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

          {/* play overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/20 transition-colors group-hover:bg-primary/80"
            >
              <Play className="h-6 w-6 translate-x-0.5 fill-white text-white" />
            </motion.span>
          </div>

          <span
            className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
              platformColor[video.platform] ?? "bg-white/10 text-white"
            }`}
          >
            {video.platform}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-4">
          <h3 className="text-base font-semibold">{video.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {video.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {video.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-[11px]">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </motion.article>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <div className="max-h-[90vh] overflow-y-auto">
            {/* video or thumbnail */}
            {video.videoUrl ? (
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={video.videoUrl}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            ) : (
              <div className="relative aspect-video w-full">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/80">
                    <Play className="h-6 w-6 translate-x-0.5 fill-white text-white" />
                  </span>
                </div>
              </div>
            )}

            <div className="space-y-6 p-6">
              <DialogHeader>
                <div className="mb-1 flex items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                      platformColor[video.platform] ?? "bg-white/10 text-white"
                    }`}
                  >
                    {video.platform}
                  </span>
                </div>
                <DialogTitle className="text-2xl">{video.title}</DialogTitle>
                <DialogDescription>{video.description}</DialogDescription>
              </DialogHeader>

              {/* Tool chips */}
              <div className="grid gap-4 sm:grid-cols-2">
                <ToolGroup
                  icon={<Clapperboard className="h-4 w-4" />}
                  label="Editing"
                  items={video.editingSoftware}
                />
                <ToolGroup
                  icon={<Sparkles className="h-4 w-4" />}
                  label="AI Tools"
                  items={video.aiTools}
                  accent
                />
              </div>

              <InfoBlock title="Client Objective" text={video.details.objective} />
              <InfoBlock title="Editing Process" text={video.details.process} />
              <InfoBlock title="Results" text={video.details.results} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function ToolGroup({
  icon,
  label,
  items,
  accent = false,
}: {
  icon: React.ReactNode;
  label: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-4">
      <div
        className={`mb-2 flex items-center gap-2 text-sm font-semibold ${
          accent ? "text-accent" : "text-primary"
        }`}
      >
        {icon}
        {label}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {items.map((i) => (
          <Badge key={i} variant={accent ? "accent" : "default"}>
            {i}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="space-y-1.5">
      <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
        {title}
      </h4>
      <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
