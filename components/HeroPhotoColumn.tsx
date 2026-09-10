"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { fadeUp, stagger } from "@/lib/motion";

export type HeroPhoto = {
  /** Path under public/, or null to show a placeholder tile. */
  src: string | null;
  alt: string;
  /** Resting tilt, e.g. "-3deg". Straightens on hover. */
  tilt: string;
  /** Intrinsic size of the file. Defaults to 1200x1600 (a standard phone photo
      after conversion); pass the real size for anything shaped differently. */
  width?: number;
  height?: number;
};

/**
 * One of the two photo columns either side of the name on the home page.
 * Two across on mobile, stacked on desktop.
 *
 * The photos rise in once on load — `animate`, not `whileInView`, because the
 * hero is always on screen when the page opens. The tilt lives on an inner
 * element, never on the motion wrapper: framer-motion writes an inline
 * `transform` for the entrance, which would otherwise wipe it out.
 */
export default function HeroPhotoColumn({
  photos,
  priorityFirst = false,
  className = "",
}: {
  photos: HeroPhoto[];
  /** Give the first photo high fetch priority — use on one column only. */
  priorityFirst?: boolean;
  className?: string;
}) {
  return (
    <motion.ul
      variants={stagger}
      initial="hidden"
      animate="visible"
      className={`grid grid-cols-2 gap-3 sm:grid-cols-1 sm:gap-5 ${className}`}
    >
      {photos.map((photo, i) => (
        <motion.li
          key={photo.src ?? `placeholder-${i}`}
          variants={fadeUp}
          className="relative hover:z-10"
        >
          <div
            style={{ "--r": photo.tilt } as CSSProperties}
            className="rotate-[var(--r)] transition-transform duration-300 ease-out hover:-translate-y-2 hover:rotate-0 hover:scale-105 motion-reduce:transition-none"
          >
            {photo.src ? (
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width ?? 1200}
                height={photo.height ?? 1600}
                priority={priorityFirst && i === 0}
                loading={priorityFirst && i === 0 ? undefined : "eager"}
                sizes="(min-width: 640px) 200px, 50vw"
                className="aspect-[4/5] w-full rounded-xl object-cover shadow-2xl shadow-black/70"
              />
            ) : (
              <div className="flex aspect-[4/5] w-full items-center justify-center rounded-xl border border-ash/15 bg-teal/25 shadow-2xl shadow-black/70">
                <span className="text-xs text-ash/60">Photo</span>
              </div>
            )}
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
}
