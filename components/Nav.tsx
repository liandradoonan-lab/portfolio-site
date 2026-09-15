"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { expandSpring } from "@/lib/motion";

// Home is deliberately absent — the wordmark above is the link back.
const links = [
  { href: "/experience", label: "Experience" },
  // Renamed from "Recruitment"; the URL stays so shared links keep working.
  { href: "/recruitment", label: "Talent & Culture" },
  { href: "/personal", label: "Personal" },
] as const;

/** True once the page has scrolled off the very top. */
function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

export default function Nav() {
  const pathname = usePathname();
  const scrolled = useScrolled();
  const atHome = pathname === "/";
  // Home never changes on scroll: no wordmark (the hero already says the
  // name) and no compact bar — just the pills on a solid black band.
  const compact = scrolled && !atHome;

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b",
        "motion-safe:transition-all motion-safe:duration-300",
        compact
          ? "border-ash/10 bg-ink/75 py-2.5 backdrop-blur-xl"
          : atHome
            ? // Solid ink: invisible against the page at the top, and content
              // vanishes behind it on scroll. The fade below softens the edge.
              "border-transparent bg-ink py-8 after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:h-10 after:bg-gradient-to-b after:from-ink after:to-transparent after:content-['']"
            : "border-transparent bg-transparent py-8",
      ].join(" ")}
    >
      <div className={[
          "mx-auto flex max-w-4xl flex-col items-center px-4 sm:px-6",
          "motion-safe:transition-all motion-safe:duration-300",
          compact ? "gap-2" : "gap-4",
        ].join(" ")}>
        {!atHome && (
        <Link
          href="/"
          className={[
            "font-display tracking-tight text-beige transition-colors hover:text-air",
            "motion-safe:transition-all motion-safe:duration-300",
            // Shrinks out of the way once you start reading, so a masthead this
            // size doesn't follow you down the page.
            scrolled ? "text-xl" : "text-3xl sm:text-4xl",
          ].join(" ")}
        >
          Liandra&nbsp;Doonan
        </Link>
        )}

        <nav aria-label="Main">
          <ul className="flex items-center gap-0.5 rounded-full border border-ash/10 p-1">
            {links.map(({ href, label }) => {
              const active = pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "relative block rounded-full px-2.5 py-1.5 text-[13px] transition-colors sm:px-3",
                      active ? "text-beige" : "text-ash hover:text-beige",
                    ].join(" ")}
                  >
                    {active && (
                      // Shared element: the pill slides between links on the
                      // spring from lib/motion.ts.
                      <motion.span
                        layoutId="nav-active-pill"
                        transition={expandSpring}
                        className="absolute inset-0 rounded-full bg-teal"
                      />
                    )}
                    <span className="relative">{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
