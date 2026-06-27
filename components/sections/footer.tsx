"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SocialIcons } from "@/components/social-icons";
import { LogoMark } from "@/components/logo";
import { portfolio } from "@/data/portfolio";

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const { person, social } = portfolio;
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      <div className="container py-14">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Animated logo */}
          <Link href="#home" className="group flex items-center gap-2.5">
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex"
            >
              <LogoMark className="h-10 w-10 text-sm transition-transform group-hover:scale-110" />
            </motion.span>
            <span className="text-lg font-bold tracking-tight">
              {person.name}
            </span>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <SocialIcons links={social} className="justify-center" />

          <div className="flex w-full flex-col items-center gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              © {year} {person.name}. Built with
              <Heart className="h-3.5 w-3.5 fill-primary text-primary" />
              using Next.js.
            </p>

            <Button asChild variant="outline" size="sm">
              <a href="#home" aria-label="Back to top">
                <ArrowUp className="h-4 w-4" />
                Back to top
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
