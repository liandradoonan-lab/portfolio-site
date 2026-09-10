import Image from "next/image";

import BookShelf from "@/components/BookShelf";
import PhotoGrid, { type Photo } from "@/components/PhotoGrid";
import { getShelf } from "@/lib/goodreads";

export const metadata = { title: "Personal" };

const GOODREADS_USER_ID = "164011347";
const GOODREADS_PROFILE =
  "https://www.goodreads.com/user/show/164011347-liandra-doonan";

// Optional notes, keyed by Goodreads book id. Goodreads holds no review text
// for any of these books, so anything worth saying about one gets written by
// hand here (source of truth: projects/portfolio-copy.md in the vault).
const takeaways: Record<string, string> = {};

// Copy source of truth: projects/portfolio-copy.md in the vault (not in this
// repo — it's gitignored). Edit there, then sync.
// Photos: drop files in public/photos/dance/ and list them here with alt text.
// Empty array renders the slot as placeholders.
const dancePhotos: Photo[] = [
  {
    // Cropped to Liandra — the original shows other competitors and presenters.
    src: "/photos/dance/medal.jpg",
    alt: "Liandra smiling on stage in a tiara and a black and white diamond-patterned Irish dance costume, being presented with a medal on a green, white and orange ribbon",
  },
  {
    src: "/photos/dance/trophy.jpg",
    alt: "Liandra smiling on stage in a teal sequinned Irish dance costume and a championship sash, hugging a large trophy",
  },
];
// Paired by trick, then both dogs together as the wide last tile.
const dogPhotos: Photo[] = [
  {
    src: "/photos/dogs/finn-nose-treat.jpg",
    alt: "Finn, a grey and white husky mix, sitting still with a treat balanced on his nose",
  },
  {
    src: "/photos/dogs/oliver-head-treat.jpg",
    alt: "Oliver, a brown and white Australian Shepherd, looking up at the camera with a treat balanced on his head",
  },
  {
    src: "/photos/dogs/finn-paw.jpg",
    alt: "Finn sitting on a rug with one paw raised, head tilted towards the camera",
  },
  {
    src: "/photos/dogs/oliver-spoon.jpg",
    alt: "Oliver sitting in front of a sofa holding a wooden spoon in his mouth",
  },
  {
    src: "/photos/dogs/finn-and-oliver.jpg",
    alt: "Oliver and Finn sitting side by side in an office, looking up at the camera",
    // Wide tile: nudge the crop up so Finn keeps his ears.
    position: "center 40%",
  },
];

const italianPhotos: Photo[] = [
  {
    src: "/photos/italian/short-stories-in-italian.jpg",
    alt: "A hand holding up a copy of Short Stories in Italian by Olly Richards, volume one, for beginners, in front of a sunny window",
  },
  {
    src: "/photos/italian/seafood-pasta.jpg",
    alt: "Taking a big forkful of pasta with clams and mussels at a restaurant, glass of white wine on the tiled table",
  },
];

const STRAVA_PROFILE ="https://www.strava.com/athletes/36152088";
const RUNNA_URL = "https://www.runna.com/";
const RACE_URL = "https://couronsmtl.com/en/courses/marathon/10km/";
// The organiser's logo, from their site header (white on transparent, so it
// only reads on a dark ground). Set to null to show the placeholder instead.
const RACE_LOGO: string | null = "/photos/race/marathon-beneva-montreal.png";

const achievements = [
  "Two-time Eastern Canadian Champion",
  "15th at the North American Championships",
  "20th at the World Championships",
];

export default async function PersonalPage() {
  const [reading, read] = await Promise.all([
    getShelf(GOODREADS_USER_ID, "currently-reading"),
    getShelf(GOODREADS_USER_ID, "read"),
  ]);

  return (
    <>
      <h1 className="font-display text-5xl text-beige sm:text-6xl">Personal</h1>

      {/* Same intro slot and styling as /recruitment. */}
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-ash">
        Here are some things that bring me joy outside of work!
      </p>

      <section className="mt-16 grid items-start gap-10 sm:grid-cols-[1.15fr_1fr] sm:gap-12">
        <div>
        <h2 className="font-display text-2xl text-beige sm:text-3xl">
          Irish dance
        </h2>

        <p className="mt-4 leading-relaxed text-ash">
          I started dancing when I was 5 years old and continued to get more
          competitive as I got older, attending minor and major competitions
          across Canada, the US and Ireland, qualifying for the World
          Championships five times. I moved on to coach dance after my
          competitive retirement, and now do it just for fun!
        </p>

        <h3 className="mt-8 text-sm uppercase tracking-[0.14em] text-air">
          Top achievements
        </h3>
        <ul className="mt-4 border-t border-ash/10">
          {achievements.map((achievement) => (
            <li
              key={achievement}
              className="border-b border-ash/10 py-2.5 text-[15px] text-ash"
            >
              {achievement}
            </li>
          ))}
        </ul>
        </div>

        <PhotoGrid photos={dancePhotos} placeholderCount={3} />
      </section>

      <section className="mt-16 grid items-start gap-10 sm:grid-cols-[1fr_1.15fr] sm:gap-12">
        <div className="sm:order-2">
          <h2 className="font-display text-2xl text-beige sm:text-3xl">
            Dog (and cat?) training! 🐕
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-ash">
            <p>
              I&rsquo;ve been a dog lover since my childhood, obsessed with our
              family black labs and all of the dogs I would pass on the street.
              I knew that I&rsquo;d go on to be a crazy dog mom myself &mdash;
              and that started with Finn, my husky mix, who I got right out of
              university. He came with a good few behavioural challenges and so
              began my journey in dog behaviour and communication &mdash;
              learning what my dog needed to be happy and &ldquo;well-trained&rdquo;
              and taking that to every other dog interaction I&rsquo;ve had
              since, from sitting and training my friend&rsquo;s dogs, to
              adopting my reactive Australian Shepherd. I occasionally take that
              love to other dogs &mdash; I&rsquo;m on Rover!
            </p>
            <p>
              My newest challenge has been training our prey-driven dogs and our
              two cats to live in the same home, peacefully. So far, no one has
              been scratched, bitten, or eaten. It&rsquo;s a very slow process
              but lots of fun!
            </p>
            <p>
              My lifelong dream is to own a farm to rescue and rehabilitate
              dogs, and give them a lovely place to roam!
            </p>
          </div>
        </div>

        <div className="sm:order-1">
          <PhotoGrid photos={dogPhotos} placeholderCount={3} />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-beige sm:text-3xl">
          Running &mdash; road to 10k!
        </h2>
        <div className="mt-4 max-w-xl space-y-4 leading-relaxed text-ash">
          <p>
            Getting back into running and training for my first ever 10k in
            October. Please send good vibes to my ex-dancer knees. I&rsquo;ve
            been using{" "}
            <a
              href={RUNNA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-air underline underline-offset-4 decoration-air/40 hover:decoration-air"
            >
              Runna
            </a>{" "}
            for guided training.
          </p>
          <p>
            Should I try HYROX next? According to my Instagram algorithm, maybe I
            should&hellip;
          </p>
        </div>

        {/* The race she's training for. Links out to the organiser. */}
        <a
          href={RACE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex max-w-xl items-center gap-4 rounded-xl border border-ash/15 bg-teal/20 p-4 transition-colors hover:border-ash/35"
        >
          {RACE_LOGO ? (
            <Image
              src={RACE_LOGO}
              // Decorative: the race name is the link text right beside it.
              alt=""
              width={273}
              height={86}
              className="h-12 w-auto shrink-0 rounded"
            />
          ) : (
            <span className="flex h-12 w-28 shrink-0 items-center justify-center rounded border border-ash/15 bg-teal/30 text-[11px] text-ash/60">
              Race logo
            </span>
          )}
          <span className="min-w-0">
            <span className="block text-[15px] text-beige">
              10K &mdash; Marathon Beneva de Montréal
            </span>
            <span className="mt-0.5 block text-[13px] text-ash">
              10 October 2026 &middot; my first 10k!
            </span>
          </span>
        </a>

        <p className="mt-4 text-[13px] text-ash">
          Follow me on{" "}
          <a
            href={STRAVA_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-air underline underline-offset-4 decoration-air/40 hover:decoration-air"
          >
            Strava
          </a>
          .
        </p>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-beige sm:text-3xl">Reading</h2>
        <p className="mt-4 max-w-xl leading-relaxed text-ash">
          I typically can&rsquo;t read just one book at a time, and often pair at
          least one non-fiction with a fiction. Here are my current Goodreads
          shelves &mdash; follow me{" "}
          <a
            href={GOODREADS_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-air underline underline-offset-4 decoration-air/40 hover:decoration-air"
          >
            here
          </a>
          !
        </p>
        <p className="mt-4 max-w-xl leading-relaxed text-ash">
          My go-to genres are sci-fi and fantasy, historical fiction, Greek myth,
          and any non-fiction about product, tech, startups and talent.
        </p>

        <h3 className="mt-8 text-sm uppercase tracking-[0.14em] text-air">
          Currently reading
        </h3>
        <div className="mt-4">
          <BookShelf books={reading} takeaways={takeaways} />
        </div>

        <h3 className="mt-10 text-sm uppercase tracking-[0.14em] text-air">
          Read
        </h3>
        <div className="mt-4">
          <BookShelf books={read} takeaways={takeaways} />
        </div>
      </section>

      {/* Mirrored like Dogs: photos left, text right on desktop. Text stays
          first in the markup so mobile and screen readers get it first. */}
      <section className="mt-16 grid items-start gap-10 sm:grid-cols-[1fr_1.15fr] sm:gap-12">
        <div className="sm:order-2">
        <h2 className="font-display text-2xl text-beige sm:text-3xl">
          Learning Italian 🇮🇹
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-ash">
          When choosing vacation destinations with my Italian partner, I find
          myself saying &ldquo;Let&rsquo;s go to Italy&rdquo; every single time
          &mdash; there are too many new places to see! It&rsquo;s time to learn
          the language so I can live my dream of sounding like a local and
          expand my vocab outside of &ldquo;ciao&rdquo;, &ldquo;buona
          sera&rdquo; and &ldquo;spaghetti alle vongole per favore&rdquo; 🤪
        </p>
        </div>

        <div className="sm:order-1">
          <PhotoGrid photos={italianPhotos} placeholderCount={2} />
        </div>
      </section>
    </>
  );
}
