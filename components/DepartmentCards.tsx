"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { expandSpring } from "@/lib/motion";
import Pill from "./Pill";

export type Department = {
  id: string;
  /** Short name as it's used day to day, e.g. "EPD". */
  code: string;
  /** What the short name stands for. */
  name: string;
  roles: string[];
};

/**
 * The teams Liandra has hired for, as cards that open in place — same
 * one-at-a-time pattern as the /experience rows, so the page behaves
 * consistently. Roles show as pills once a card is open.
 */
export default function DepartmentCards({ departments }: { departments: Department[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion ? { duration: 0 } : expandSpring;

  return (
    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
      {departments.map((dept) => {
        const isOpen = dept.id === openId;
        const panelId = `dept-panel-${dept.id}`;
        const buttonId = `dept-button-${dept.id}`;

        return (
          <li
            key={dept.id}
            className={[
              "rounded-xl border bg-teal/20 transition-colors",
              isOpen ? "border-ash/35" : "border-ash/15 hover:border-ash/35",
            ].join(" ")}
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenId(isOpen ? null : dept.id)}
              className="w-full cursor-pointer p-4 text-left"
            >
              <span className="block font-display text-xl text-beige">{dept.code}</span>
              <span className="mt-0.5 block text-[13px] text-ash">{dept.name}</span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={transition}
                  className="overflow-hidden"
                >
                  <ul className="flex flex-wrap gap-1.5 px-4 pb-4">
                    {dept.roles.map((role) => (
                      <Pill key={role}>{role}</Pill>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
