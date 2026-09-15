"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContext, useRef, type ReactNode } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { pageTransition } from "@/lib/motion";

/**
 * The App Router swaps a route's children the instant you navigate, so the
 * outgoing page would otherwise render the *incoming* content while it fades
 * out. Freezing the layout router context per route keeps each page rendering
 * its own content for as long as it is on screen.
 */
function FrozenRouter({ children }: { children: ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    // A single grid cell: outgoing and incoming pages stack on top of each
    // other so the two halves genuinely cross-fade. Deliberately not
    // mode="wait" — the incoming page mounts immediately, so a stalled exit
    // animation can never leave the site showing nothing.
    <div className="grid">
      <AnimatePresence initial={false}>
        <motion.main
          key={pathname}
          variants={pageTransition}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="col-start-1 row-start-1 mx-auto w-full max-w-4xl px-6 py-20 sm:py-28"
        >
          <FrozenRouter>{children}</FrozenRouter>
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
