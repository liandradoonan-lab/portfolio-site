"use client";

import { useState } from "react";
import ExperienceRow, { type Role } from "./ExperienceRow";

export type Section = { heading: string; roles: Role[] };

export default function ExperienceList({ sections }: { sections: Section[] }) {
  // One row open at a time across the whole page, not per section — state lives
  // here so opening a student org closes an open job.
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <>
      {sections.map((section) => (
        <section key={section.heading} className="mt-14 first:mt-0">
          <h2 className="mb-4 text-sm uppercase tracking-[0.14em] text-air">
            {section.heading}
          </h2>
          <ul className="border-t border-ash/10">
            {section.roles.map((role) => (
              <ExperienceRow
                key={role.id}
                role={role}
                isOpen={openId === role.id}
                onOpen={() => setOpenId(role.id)}
                onClose={() =>
                  setOpenId((id) => (id === role.id ? null : id))
                }
                onToggle={() =>
                  setOpenId((id) => (id === role.id ? null : role.id))
                }
              />
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
