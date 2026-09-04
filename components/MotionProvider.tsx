"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * reducedMotion="user" makes Framer honour prefers-reduced-motion everywhere:
 * transform and layout animations are dropped, opacity fades still run. Every
 * variant in lib/motion.ts is written to stay legible under that.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
