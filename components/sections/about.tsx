"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { Reveal, StaggerGroup, fadeUp } from "@/components/motion-primitives";
import { iconMap } from "@/lib/icon-map";
import { portfolio } from "@/data/portfolio";

export function About() {
  const { about } = portfolio;

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title={about.heading}
          description="A multidisciplinary creator blending design, technology and storytelling."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Story */}
          <Reveal className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {p}
              </p>
            ))}

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card/60 p-4 text-center"
                >
                  <div className="text-2xl font-bold text-gradient sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Highlights grid */}
          <StaggerGroup className="grid gap-4 sm:grid-cols-2">
            {about.highlights.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="gradient-border group h-full p-5"
                >
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-colors group-hover:text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
