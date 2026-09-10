import About from "@/components/About";
import HeroPhotoColumn, { type HeroPhoto } from "@/components/HeroPhotoColumn";

// Two photos either side of the name. Tilts mirror across the name so the
// hero reads as one composition rather than two separate stacks.
const leftPhotos: HeroPhoto[] = [
  {
    src: "/photos/home/liandra.jpg",
    alt: "Liandra kneeling on the grass in a park, arm around her husky, with a lake and autumn trees behind them",
    tilt: "-3deg",
  },
  {
    src: "/photos/home/liandra-dog-selfie.jpg",
    alt: "Liandra smiling in a close-up selfie beside a brown and white dog",
    tilt: "2.5deg",
  },
];

const rightPhotos: HeroPhoto[] = [
  {
    src: "/photos/home/liandra-puppy.jpg",
    alt: "Liandra holding up a fluffy cream-coloured puppy with long ears for a selfie",
    tilt: "3deg",
  },
  {
    src: "/photos/home/liandra-office.jpg",
    alt: "Liandra hugging a fluffy brown-and-white puppy in an office, with a row of world clocks on the wall behind her",
    tilt: "-2.5deg",
    // Taller and narrower than the others; the tile crops it to 4:5.
    width: 1179,
    height: 2008,
  },
];

export default function HomePage() {
  return (
    <>
      {/*
        Desktop: photos | name | photos, name centred between them.
        Mobile: the name first, then the photos two by two — `order` handles
        the swap, so the markup stays photos-name-photos for the desktop grid.
      */}
      <section className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-center sm:gap-8">
        <HeroPhotoColumn photos={leftPhotos} priorityFirst className="order-2 sm:order-none" />

        {/* Not animated: the name is the first thing that should be on screen. */}
        <div className="order-1 mb-5 text-center sm:order-none sm:mb-0">
          {/* Fraunces, same as every other page's heading — the display cut
              and tracking come from the h1 rule in globals.css. */}
          <h1
            className="leading-[0.95] text-beige"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.75rem)" }}
          >
            Hi, I&rsquo;m Liandra!
          </h1>

          <p className="mx-auto mt-6 max-w-sm text-lg leading-relaxed text-ash">
            Senior full-stack recruiter, people ops generalist, and crazy dog mom
          </p>
        </div>

        <HeroPhotoColumn photos={rightPhotos} className="order-3 sm:order-none" />
      </section>

      <About />
    </>
  );
}
