"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { expandSpring } from "@/lib/motion";
import Pill from "./Pill";

export type Role = {
  id: string;
  company: string;
  /** Funding stage, e.g. "Series B". Omitted where there isn't one. */
  stage?: string;
  /** What the organisation does. Omitted where the name says it. */
  sector?: string;
  title: string;
  dates: string;
  /** What the role was. Said here and nowhere else. */
  line: string;
  impact: string[];
  tools: string[];
};

/**
 * True on devices with a real pointer. Touch screens report `hover: none`, and
 * on them a hover-only disclosure is unreachable — so there the row opens on
 * tap instead. Read from matchMedia rather than sniffing the user agent, and
 * kept in state so it survives hydration.
 */
function usePointerHover() {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setCanHover(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return canHover;
}

export default function ExperienceRow({
  role,
  isOpen,
  onOpen,
  onClose,
  onToggle,
}: {
  role: Role;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}) {
  const canHover = usePointerHover();
  const reduceMotion = useReducedMotion();
  const panelId = `role-panel-${role.id}`;
  const buttonId = `role-button-${role.id}`;

  const transition = reduceMotion ? { duration: 0 } : expandSpring;

  return (
    <li
      className="border-b border-ash/10"
      onMouseEnter={canHover ? onOpen : undefined}
      onMouseLeave={canHover ? onClose : undefined}
    >
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        // Tabbing through the list reveals each row, so the content is
        // reachable without a pointer at all.
        onFocus={canHover ? onOpen : undefined}
        className="w-full cursor-pointer py-2.5 text-left"
      >
        {/* Side by side on desktop; stacked on mobile, where "Planned —
            Lead Talent Partner" and the dates can't share a 327px line
            without both wrapping. */}
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <span className="text-base text-beige">
            {role.company}
            <span className="text-ash"> — {role.title}</span>
          </span>
          <span className="shrink-0 text-sm tabular-nums text-ash">
            {role.dates}
          </span>
        </div>
        <p className="mt-0.5 text-[13px] leading-snug text-ash">{role.line}</p>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="panel"
            id={panelId}
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={transition}
            className="overflow-hidden"
          >
            <div className="pb-6 pt-1">
              {/* The company, not the role — the collapsed line above already
                  covers what the job was, so repeating it here earns nothing. */}
              {(role.stage || role.sector) && (
                <p className="mb-4 text-[13px] text-ash/80">
                  {role.stage && <span className="text-air">{role.stage}</span>}
                  {role.stage && role.sector && " · "}
                  {role.sector}
                </p>
              )}

              <ul className="max-w-2xl space-y-2">
                {role.impact.map((point) => (
                  <li
                    key={point}
                    className="relative pl-4 text-sm leading-relaxed text-ash before:absolute before:left-0 before:text-air before:content-['—']"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {role.tools.map((tool) => (
                  <Pill key={tool}>{tool}</Pill>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
