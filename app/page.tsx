import Image from "next/image";

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

        <Image
          src="/photos/home/liandra.jpg"
          alt="Liandra kneeling on the grass in a park, arm around her husky, with a lake and autumn trees behind them"
          width={1200}
          height={1600}
          priority
          sizes="(min-width: 640px) 320px, 100vw"
          className="aspect-[4/5] w-full rounded-2xl object-cover sm:max-w-[320px] sm:justify-self-end"
        />
      </section>

      <About />
    </>
  );
}
