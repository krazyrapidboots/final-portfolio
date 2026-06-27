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

        <StaggerGroup className="relative mx-auto mt-16 max-w-3xl">
          {/* vertical line */}
          <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-primary via-accent/40 to-transparent sm:left-1/2" />

          <div className="space-y-10">
            {experience.map((item, i) => {
              const { icon: Icon, label } = typeMeta[item.type];
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className={`relative flex flex-col gap-4 pl-12 sm:w-1/2 sm:pl-0 ${
                    isLeft
                      ? "sm:ml-0 sm:pr-12 sm:text-right"
                      : "sm:ml-auto sm:pl-12"
                  }`}
                >
                  {/* node */}
                  <span
                    className={`absolute left-4 top-1.5 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-primary/40 bg-card text-primary shadow-lg shadow-primary/20 sm:left-auto ${
                      isLeft ? "sm:-right-4 sm:translate-x-1/2" : "sm:-left-4 sm:-translate-x-1/2"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>

                  <div className="gradient-border p-5">
                    <div
                      className={`flex flex-wrap items-center gap-2 ${
                        isLeft ? "sm:justify-end" : ""
                      }`}
                    >
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
