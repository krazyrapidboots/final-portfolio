"use client";

import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import * as React from "react";

/** Reusable easing + variants used across every section. */
export const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: easeOut } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

interface RevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  /** delay in seconds */
  delay?: number;
  variant?: Variants;
}

/**
 * Reveal-on-scroll wrapper. Animates once when ~20% enters the viewport.
 */
export function Reveal({
  children,
  delay = 0,
  variant = fadeUp,
  ...props
}: RevealProps) {
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Container that staggers its Reveal/motion children on scroll. */
export function StaggerGroup({
  children,
  className,
  amount = 0.15,
}: {
  children: React.ReactNode;
  className?: string;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}
