"use client";

import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  Instagram,
  Youtube,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import type { SocialLink } from "@/types";
import { cn } from "@/lib/utils";

const socialIconMap: Record<SocialLink["icon"], LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  mail: Mail,
  phone: Phone,
  instagram: Instagram,
  youtube: Youtube,
  briefcase: Briefcase,
};

export function SocialIcons({
  links,
  className,
}: {
  links: SocialLink[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {links.map((link) => {
        const Icon = socialIconMap[link.icon];
        const isExternal = link.href.startsWith("http");
        return (
          <motion.a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.92 }}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            <Icon className="h-5 w-5 transition-colors group-hover:text-primary" />
          </motion.a>
        );
      })}
    </div>
  );
}
