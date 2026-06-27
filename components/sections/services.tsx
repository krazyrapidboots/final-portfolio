"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { StaggerGroup, fadeUp } from "@/components/motion-primitives";
import { iconMap } from "@/lib/icon-map";
import { portfolio } from "@/data/portfolio";

export function Services() {
  const { services } = portfolio;

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="How I can help you"
          description="Flexible, end-to-end help across content, design, development and automation."
        />

        <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="gradient-border group relative flex h-full flex-col overflow-hidden p-6"
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <motion.div
                  whileHover={{ rotate: -8, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/30"
                >
                  <Icon className="h-6 w-6" />
                </motion.div>

                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent/20 text-accent">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
