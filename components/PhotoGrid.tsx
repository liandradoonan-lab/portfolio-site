import Image from "next/image";

export type Photo = {
  /** Path under public/, e.g. "/photos/dance/worlds-2016.jpg" */
  src: string;
  /** What's in the picture. Shown if the image fails, read aloud by screen
      readers, and indexed — so write it for a person, not for search. */
  alt: string;
};

/**
 * A cluster of photos beside a section's text.
 *
 * Layout rule: two columns, and when there's an odd number the LAST photo
 * spans both. That gives a tidy block at 1–6 photos without per-count
 * special-casing. Spanning tiles are landscape, the rest portrait, which is
 * what makes it read as a collage rather than a grid of thumbnails.
 *
 * Every tile is a fixed aspect ratio with object-cover, so photos from
 * different cameras and crops still line up.
 *
 * Pass an empty array (or nothing) to render the slot as placeholders — the
 * space is visible and correctly sized before the files exist.
 */
export default function PhotoGrid({
  photos = [],
  placeholderCount = 3,
}: {
  photos?: Photo[];
  placeholderCount?: number;
}) {
  const count = photos.length || placeholderCount;
  const isOdd = count % 2 === 1;
  const spanIndex = isOdd ? count - 1 : -1;

  const tile = (i: number) =>
    [
      "overflow-hidden rounded-xl border border-ash/15 bg-teal/25",
      i === spanIndex ? "col-span-2 aspect-[3/2]" : "aspect-[4/5]",
    ].join(" ");

  if (photos.length === 0) {
    return (
      <div className="grid grid-cols-2 gap-2">
        {Array.from({ length: placeholderCount }, (_, i) => (
          <div
            key={i}
            className={`${tile(i)} flex items-center justify-center`}
          >
            <span className="text-xs text-ash/60">Photo</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      {photos.map((photo, i) => (
        <div key={photo.src} className={tile(i)}>
          <Image
            src={photo.src}
            alt={photo.alt}
            width={800}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
