"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { fadeUp } from "@/components/motion-primitives";
import type { SocialCampaign } from "@/types";

const platformColor: Record<string, string> = {
  TikTok: "bg-[#ff0050]/15 text-[#ff5c8a]",
  Instagram: "bg-fuchsia-500/15 text-fuchsia-400",
  Facebook: "bg-blue-500/15 text-blue-400",
  YouTube: "bg-red-500/15 text-red-400",
  "Multi-platform": "bg-primary/15 text-primary",
};

export function SocialCard({ campaign }: { campaign: SocialCampaign }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.article
        variants={fadeUp}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="gradient-border group flex h-full flex-col overflow-hidden"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={campaign.image}
            alt={campaign.title}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-90" />
          <span
            className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
              platformColor[campaign.platform] ?? "bg-white/10 text-white"
            }`}
          >
            {campaign.platform}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-lg font-semibold">{campaign.title}</h3>
          <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
            {campaign.description}
          </p>

          {/* Metrics */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            {campaign.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-border bg-card/60 p-2.5 text-center"
              >
                <div className="text-sm font-bold text-gradient">{m.value}</div>
                <div className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-5">
            <Button size="sm" variant="gradient" onClick={() => setOpen(true)}>
              <TrendingUp className="h-4 w-4" />
              View Case
            </Button>
          </div>
        </div>
      </motion.article>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <div className="max-h-[90vh] overflow-y-auto">
            <div className="relative aspect-[16/8] w-full overflow-hidden">
              <Image
                src={campaign.image}
                alt={campaign.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <span
                className={`absolute left-5 top-4 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                  platformColor[campaign.platform] ?? "bg-white/10 text-white"
                }`}
              >
                {campaign.platform}
              </span>
            </div>

            <div className="space-y-6 p-6">
              <DialogHeader>
                <DialogTitle className="text-2xl">{campaign.title}</DialogTitle>
                <DialogDescription>{campaign.description}</DialogDescription>
              </DialogHeader>

              {/* Metrics row */}
              <div className="grid grid-cols-3 gap-3">
                {campaign.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-border bg-card/60 p-3 text-center"
                  >
                    <div className="text-lg font-bold text-gradient">{m.value}</div>
                    <div className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Services Provided
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {campaign.services.map((s) => (
                    <Badge key={s} variant="secondary">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>

              <Info title="Objective" text={campaign.details.objective} />
              <Info title="Strategy" text={campaign.details.strategy} />
              <Info title="Results" text={campaign.details.results} accent />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function Info({
  title,
  text,
  accent = false,
}: {
  title: string;
  text: string;
  accent?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <h4
        className={`flex items-center gap-2 text-sm font-semibold uppercase tracking-wider ${
          accent ? "text-accent" : "text-primary"
        }`}
      >
        <ArrowRight className="h-3.5 w-3.5" />
        {title}
      </h4>
      <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
