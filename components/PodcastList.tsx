import Image from "next/image";

export type Podcast = {
  /** Matches the cover file in public/photos/podcasts/<slug>.jpg */
  slug: string;
  title: string;
  host: string;
  /** The show's page on Spotify. */
  url: string;
};

/**
 * Shows Liandra listens to. The whole card is the link, with the show's own
 * cover art as the tile — the covers are stored locally rather than hotlinked,
 * so the section doesn't break when Spotify rotates a CDN URL.
 */
export default function PodcastList({ podcasts }: { podcasts: Podcast[] }) {
  return (
    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
      {podcasts.map((show) => (
        <li key={show.slug}>
          <a
            href={show.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${show.title} by ${show.host} — listen on Spotify (opens in a new tab)`}
            className="flex items-center gap-4 rounded-xl border border-ash/15 bg-teal/20 p-3 transition-colors hover:border-ash/35"
          >
            <Image
              src={`/photos/podcasts/${show.slug}.jpg`}
              alt=""
              width={320}
              height={320}
              sizes="64px"
              className="h-16 w-16 shrink-0 rounded-lg object-cover"
            />
            <span className="min-w-0">
              <span className="block text-[15px] leading-snug text-beige">
                {show.title}
              </span>
              <span className="mt-0.5 block text-[13px] text-ash">{show.host}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
