import About from "@/components/About";

export default function HomePage() {
  return (
    <>
      {/* Two columns on desktop, stacked on mobile. Sits high on the page
          rather than centred in the viewport — more sections go underneath. */}
      <section className="grid items-start gap-10 sm:grid-cols-[1.15fr_1fr] sm:gap-12">
        <div>
          {/* Fraunces, same as every other page's heading — the display cut
              and tracking come from the h1 rule in globals.css. */}
          <h1
            className="leading-[0.95] text-beige"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.75rem)" }}
          >
            Hi, I&rsquo;m Liandra!
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-ash">
            Senior full-stack recruiter, people ops generalist, and crazy dog mom
          </p>
        </div>

        {/*
          Photo slot. To use a real image, drop the file in public/ and replace
          this whole div with:

            <Image
              src="/liandra.jpg"
              alt="Liandra Doonan"
              width={800}
              height={1000}
              priority
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />

          importing Image from "next/image".
        */}
        <div className="flex aspect-[4/5] w-full items-center justify-center rounded-2xl border border-ash/15 bg-teal/25 sm:max-w-[320px] sm:justify-self-end">
          <span className="text-sm text-ash/60">Photo</span>
        </div>
      </section>

      <About />
    </>
  );
}
