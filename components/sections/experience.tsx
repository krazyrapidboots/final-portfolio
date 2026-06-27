"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, FolderGit2, BookOpen } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { StaggerGroup, fadeUp } from "@/components/motion-primitives";
import { portfolio } from "@/data/portfolio";
import type { ExperienceItem } from "@/types";

const typeMeta: Record<
  ExperienceItem["type"],
  { icon: typeof GraduationCap; label: string }
> = {
  education: { icon: GraduationCap, label: "Education" },
  work: { icon: Briefcase, label: "Work" },
  project: { icon: FolderGit2, label: "Project" },
  learning: { icon: BookOpen, label: "Learning" },
};

export function Experience() {
  const { experience } = portfolio;

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="My journey so far"
          description="Education, freelance work and the projects shaping my craft."
        />

        <StaggerGroup className="relative mx-auto mt-16 max-w-2xl">
          {/* vertical line — anchored to the left for a clean top-to-bottom read */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent/40 to-transparent" />

          <div className="space-y-8">
            {experience.map((item) => {
              const { icon: Icon, label } = typeMeta[item.type];
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="relative pl-16"
                >
                  {/* node on the line */}
                  <span className="absolute left-5 top-1 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-primary/40 bg-card text-primary shadow-lg shadow-primary/20">
                    <Icon className="h-4 w-4" />
                  </span>

                  <div className="gradient-border p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-primary">
                        {label}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="mt-2 text-base font-semibold">{item.title}</h3>
                    <p className="text-sm font-medium text-accent">
                      {item.organization}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </StaggerGroup>
      </div>
    </section>
  );
}
