/**
 * Reads a Goodreads shelf via its public RSS feed.
 *
 * The Goodreads API closed to new signups in 2020, but the per-shelf RSS feeds
 * still work with no key: /review/list_rss/<userId>?shelf=<shelf>. The profile
 * has to be public. If Goodreads ever pulls these, the fallback is their CSV
 * export — nothing here is unrecoverable.
 *
 * Fetched at build time and revalidated daily, so pages stay static and no
 * request goes out from the browser. A feed failure returns an empty array
 * rather than throwing: a third party being down must not break the build.
 */

export type Book = {
  id: string;
  title: string;
  author: string;
  cover: string | null;
  /** 0 means unrated. */
  rating: number;
  /** e.g. "Dec 2024", or null if Goodreads has no date. */
  readAt: string | null;
  link: string;
};

const DAY = 86_400;

function decode(s: string) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "’")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .trim();
}

function field(body: string, name: string) {
  const m = body.match(
    new RegExp(`<${name}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${name}>`)
  );
  return m ? decode(m[1]) : "";
}

function monthYear(rfc822: string) {
  if (!rfc822) return null;
  const d = new Date(rfc822);
  return Number.isNaN(d.getTime())
    ? null
    : d.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
}

export async function getShelf(
  userId: string,
  shelf: "read" | "currently-reading",
  limit = 60
): Promise<Book[]> {
  const url = `https://www.goodreads.com/review/list_rss/${userId}?shelf=${shelf}`;

  let xml: string;
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "liandradoonan.com (portfolio site)" },
      next: { revalidate: DAY },
    });
    if (!res.ok) return [];
    xml = await res.text();
  } catch {
    return [];
  }

  const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];

  return items.slice(0, limit).map((body) => {
    const cover =
      field(body, "book_large_image_url") || field(body, "book_medium_image_url");
    return {
      id: field(body, "book_id") || field(body, "guid"),
      title: field(body, "title"),
      author: field(body, "author_name"),
      cover: cover.startsWith("http") ? cover : null,
      rating: Number(field(body, "user_rating")) || 0,
      readAt: monthYear(field(body, "user_read_at")),
      // Drop the tracking params Goodreads appends to the RSS link.
      link: field(body, "link").split("?")[0],
    };
  });
}
