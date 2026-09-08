"use client";

import Image from "next/image";
import { useState } from "react";
import type { Book } from "@/lib/goodreads";

/**
 * A horizontally scrolling shelf of book covers.
 *
 * Deliberately native scrolling with CSS scroll-snap rather than a
 * scroll-hijacked carousel: trackpad swipe, shift+scroll, touch swipe and the
 * arrow keys all drive it for free, the page never traps the reader, and there
 * is no animation loop to go wrong. Covers snap into place, which is the part
 * that makes it feel like a wheel.
 *
 * Clicking a cover opens its details beneath the shelf — one open at a time,
 * same as the experience rows.
 */
export default function BookShelf({
  books,
  takeaways = {},
}: {
  books: Book[];
  /** Optional notes keyed by Goodreads book id. Written by hand, not fetched. */
  takeaways?: Record<string, string>;
}) {
  const [openId, setOpenId] = useState<string | null>(null);

  if (books.length === 0) {
    return (
      <p className="text-sm text-ash/70">
        Shelf unavailable right now — it reads from Goodreads.
      </p>
    );
  }

  const open = books.find((b) => b.id === openId) ?? null;

  return (
    <div>
      <ul
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3"
        // Native horizontal scroll; no wheel interception.
        style={{ scrollbarWidth: "thin" }}
      >
        {books.map((book) => {
          const isOpen = book.id === openId;
          return (
            <li key={book.id} className="snap-start">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? null : book.id)}
                title={`${book.title} — ${book.author}`}
                className={[
                  "block w-[104px] shrink-0 overflow-hidden rounded-lg border transition-colors",
                  isOpen
                    ? "border-air"
                    : "border-ash/15 hover:border-ash/40",
                ].join(" ")}
              >
                {book.cover ? (
                  <Image
                    src={book.cover}
                    alt={`${book.title} by ${book.author}`}
                    width={208}
                    height={312}
                    className="aspect-[2/3] w-full object-cover"
                  />
                ) : (
                  <span className="flex aspect-[2/3] w-full items-center justify-center bg-teal/25 p-2 text-center text-[11px] leading-tight text-ash">
                    {book.title}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      {open && (
        <div className="mt-2 max-w-xl rounded-lg border border-ash/15 bg-teal/20 p-4">
          <p className="text-[15px] text-beige">{open.title}</p>
          <p className="mt-0.5 text-[13px] text-ash">{open.author}</p>

          <p className="mt-2 text-[13px] text-ash/80">
            {open.rating > 0 && (
              <span className="text-air">{"★".repeat(open.rating)}</span>
            )}
            {open.rating > 0 && open.readAt && " · "}
            {open.readAt && `Read ${open.readAt}`}
          </p>

          {takeaways[open.id] && (
            <p className="mt-3 text-sm leading-relaxed text-ash">
              {takeaways[open.id]}
            </p>
          )}

          <a
            href={open.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-[13px] text-air underline-offset-4 hover:underline"
          >
            View on Goodreads
          </a>
        </div>
      )}
    </div>
  );
}
