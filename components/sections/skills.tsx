"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { Reveal, StaggerGroup, fadeUp } from "@/components/motion-primitives";
import { cn } from "@/lib/utils";
import { portfolio } from "@/data/portfolio";
import type { SkillCategory } from "@/types";

const CATEGORIES: ("All" | SkillCategory)[] = [
  "All",
  "Frontend",
  "Backend & Data",
  "Tools & DevOps",
  "Design & Media",
  "AI & Automation",
];

export function Skills() {
  const { skills } = portfolio;
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? skills
        : skills.filter((s) => s.category === active),
    [active, skills]
  );

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="A versatile, modern toolkit"
          description="From pixel-perfect interfaces to AI-powered automations — here's what I build with."
        />

        {/* Filters */}
        <Reveal className="mt-12 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "relative rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active === cat
                  ? "border-primary/40 text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              )}
            >
              {active === cat && (
                <motion.span
                  layoutId="skill-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary/20 to-accent/20"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {cat}
            </button>
          ))}
        </Reveal>

        {/* Skill bars */}
        <StaggerGroup
          key={active}
          className="mt-12 grid gap-x-10 gap-y-7 md:grid-cols-2"
        >
          {filtered.map((skill) => (
            <motion.div key={skill.name} variants={fadeUp}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-xs font-medium text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-secondary">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
