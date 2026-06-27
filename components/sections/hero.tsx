"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail, ArrowDown, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TypingEffect } from "@/components/typing-effect";
import { SocialIcons } from "@/components/social-icons";
import { fadeUp, staggerContainer } from "@/components/motion-primitives";
import { portfolio } from "@/data/portfolio";

export function Hero() {
  const { person, hero, social } = portfolio;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-28 pb-16"
    >
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-6"
        >
          {person.available && (
            <motion.div variants={fadeUp}>
              <Badge variant="glass" className="gap-2 px-3 py-1.5 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {hero.badge}
              </Badge>
            </motion.div>
          )}

          <motion.div variants={fadeUp} className="space-y-2">
            <p className="text-lg text-muted-foreground">{person.greeting}</p>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl">
              <span className="text-gradient">{person.name}</span>
            </h1>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-1">
            <p className="text-lg font-medium text-foreground">
              {person.degree}
            </p>
            <p className="text-base text-muted-foreground">
              {person.specialization}
            </p>
          </motion.div>

          {/* Typing roles */}
          <motion.div
            variants={fadeUp}
            className="flex min-h-[2.5rem] items-center text-xl font-semibold sm:text-2xl"
          >
            <TypingEffect words={person.roles} className="text-gradient" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-balance text-base text-muted-foreground sm:text-lg"
          >
            {hero.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            {person.location}
          </motion.div>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <Button asChild variant="gradient" size="lg">
              <a href={person.resumeUrl} download>
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">
                <Mail className="h-5 w-5" />
                Contact Me
              </a>
            </Button>
          </motion.div>

          <motion.div variants={fadeUp}>
            <SocialIcons links={social} />
          </motion.div>
        </motion.div>

        {/* Right — avatar with glow + blobs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-lg"
        >
          {/* glow */}
          <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute right-6 top-6 -z-10 h-40 w-40 animate-blob rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute bottom-6 left-6 -z-10 h-40 w-40 animate-blob animation-delay-2000 rounded-full bg-emerald-500/30 blur-3xl" />

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-square w-full"
          >
            {/* rotating gradient ring */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-primary via-transparent to-accent p-[2px]">
              <div className="h-full w-full rounded-[2rem] bg-background/80" />
            </div>

            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-primary/20">
              <Image
                src={person.avatar}
                alt={`${person.name} — portrait`}
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground md:flex"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
