"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2, Palette } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { fadeUp } from "@/components/motion-primitives";
import type { GraphicProject } from "@/types";

export function GraphicCard({ graphic }: { graphic: GraphicProject }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        variants={fadeUp}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        onClick={() => setOpen(true)}
        className="gradient-border group relative block w-full overflow-hidden text-left"
        aria-label={`View ${graphic.title}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={graphic.image}
            alt={graphic.title}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-90" />

          {/* hover zoom hint */}
          <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
            <Maximize2 className="h-4 w-4" />
          </span>

          <div className="absolute inset-x-0 bottom-0 p-4">
            <Badge variant="glass" className="mb-2 gap-1">
              <Palette className="h-3 w-3" />
              {graphic.category}
            </Badge>
            <h3 className="text-base font-semibold">{graphic.title}</h3>
          </div>
        </div>
      </motion.button>

      {/* Lightbox modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl">
          <div className="max-h-[90vh] overflow-y-auto">
            <div className="relative aspect-[4/3] w-full bg-black sm:aspect-video">
              <Image
                src={graphic.image}
                alt={graphic.title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="space-y-4 p-6">
              <DialogHeader>
                <Badge variant="glass" className="mb-1 w-fit gap-1">
                  <Palette className="h-3 w-3" />
                  {graphic.category}
                </Badge>
                <DialogTitle className="text-2xl">{graphic.title}</DialogTitle>
                <DialogDescription>{graphic.description}</DialogDescription>
              </DialogHeader>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Tools Used
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {graphic.tools.map((t) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
