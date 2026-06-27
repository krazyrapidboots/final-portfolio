"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/logo";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/utils";
import { portfolio } from "@/data/portfolio";

const NAV_LINKS = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Portfolio", href: "portfolio" },
  { label: "Experience", href: "experience" },
  { label: "Services", href: "services" },
  { label: "Contact", href: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(NAV_LINKS.map((l) => l.href));

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 shadow-lg shadow-black/20">
        {/* Logo */}
        <Link
          href="#home"
          className="group flex items-center gap-2 rounded-xl px-2 py-1 text-sm font-bold tracking-tight"
        >
          <LogoMark className="h-8 w-8 rounded-lg text-[11px] transition-transform group-hover:scale-110" />
          <span className="hidden sm:inline">{portfolio.person.name}</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={`#${link.href}`}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-white/5"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="gradient" size="sm">
            <a href={portfolio.person.resumeUrl} download>
              <Download className="h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/60 text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl p-2 lg:hidden"
          >
            <ul className="grid grid-cols-2 gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`#${link.href}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                      activeId === link.href
                        ? "bg-white/5 text-foreground"
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              asChild
              variant="gradient"
              className="mt-2 w-full"
              size="sm"
            >
              <a href={portfolio.person.resumeUrl} download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
