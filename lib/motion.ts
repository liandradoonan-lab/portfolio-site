import type { Transition, Variants } from "framer-motion";

/**
 * Shared motion language for the site.
 *
 * Reduced motion is handled globally by <MotionConfig reducedMotion="user">
 * in app/layout.tsx: Framer strips transform/layout animations (x, y, scale,
 * rotate) and keeps opacity, so every variant below degrades to a plain
 * crossfade when the OS asks for less motion. Nothing here needs to branch.
 */

/** Distance, in px, that page content travels during a route transition. */
export const PAGE_SLIDE = 8;

/** Route transition: crossfade + 8px slide, 250ms. */
export const PAGE_TRANSITION_MS = 250;

export const pageTransition: Variants = {
  hidden: { opacity: 0, y: PAGE_SLIDE },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: PAGE_TRANSITION_MS / 1000, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    y: -PAGE_SLIDE,
    // The outgoing page overlaps the incoming one while it fades; don't let it
    // swallow clicks meant for the new page.
    pointerEvents: "none",
    transition: { duration: PAGE_TRANSITION_MS / 1000, ease: [0.4, 0, 0.2, 1] },
  },
};

/** Content reveal: opacity + y, 400ms. Use for hero and scroll reveals. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
};

/** Parent for staggered fadeUp children (60ms apart, per the design notes). */
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

/** Spring for hover expansions — experience rows land on this later. */
export const expandSpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};
