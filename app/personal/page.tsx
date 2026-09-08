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
const dancePhotos: Photo[] = [];

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
    </>
  );
}
