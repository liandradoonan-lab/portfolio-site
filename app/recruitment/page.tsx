import DepartmentCards, { type Department } from "@/components/DepartmentCards";
import PodcastList, { type Podcast } from "@/components/PodcastList";

export const metadata = { title: "Talent & Culture" };

// Copy source of truth: projects/portfolio-copy.md in the vault, outside this
// repo. Edit there, then sync. Adding an item means adding an entry here —
// no layout work.
const departments: Department[] = [
  {
    id: "epd",
    code: "EPD",
    name: "Engineering, Product & Design",
    roles: [
      "Head of Engineering",
      "Head of Product Design",
      "Product Managers",
      "Product Designers",
      "Design Engineers",
      "Fullstack Software Engineers",
      "Data Engineer",
      "Engineering Interns",
    ],
  },
  {
    id: "gna",
    code: "G&A",
    name: "General & Administrative",
    roles: [
      "Head of Finance",
      "Controller",
      "Finance Manager",
      "Accounting Clerks",
      "Recruiter",
    ],
  },
  {
    id: "gtm",
    code: "GTM",
    name: "Go-to-market",
    roles: [
      "Head of Sales",
      "Head of Marketing",
      "Enterprise Account Executives",
      "Enterprise Account Managers",
      "Business Development Representative",
      "Product Marketing Manager",
      "Event Marketer",
      "Copywriter",
    ],
  },
  {
    id: "ops",
    code: "Ops",
    name: "Operations",
    roles: [
      "Head of Supply",
      "Operations Manager",
      "Implementation Manager",
      "Customer Success Managers",
      "Event Managers (Customer Success Coordinators)",
      "Supplier Relationship Coordinators",
    ],
  },
];

const podcasts: Podcast[] = [
  {
    slug: "lennys-podcast",
    title: "Lenny’s Podcast: Product | Career | Growth",
    host: "Lenny Rachitsky",
    url: "https://open.spotify.com/show/2dR1MUZEHCOnz1LVfNac0j",
  },
  {
    slug: "10x-recruiting",
    title: "10x Recruiting",
    host: "Metaview",
    url: "https://open.spotify.com/show/0EY7AL8pkmMDWAHZaZ8KyC",
  },
  {
    slug: "a16z-show",
    title: "The a16z Show",
    host: "Andreessen Horowitz",
    url: "https://open.spotify.com/show/5bC65RDvs3oxnLyqqvkUYX",
  },
  {
    slug: "how-i-ai",
    title: "How I AI",
    host: "Claire Vo",
    url: "https://open.spotify.com/show/4aRP2XSavdtrLG5FZoonOK",
  },
];

export default function RecruitmentPage() {
  return (
    <>
      <h1 className="font-display text-5xl text-beige sm:text-6xl">Talent &amp; Culture</h1>

      {/* Page intro. Same slot and styling the other section pages will use for
          theirs, so the three read as a set. */}
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-ash">
        All things recruitment, people ops and career development — from the
        workflows and projects I build to the industry topics that interest me.
      </p>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-beige sm:text-3xl">
          Who I&rsquo;ve hired
        </h2>
        <DepartmentCards departments={departments} />
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-beige sm:text-3xl">
          What I&rsquo;m listening to
        </h2>
        <PodcastList podcasts={podcasts} />
      </section>
    </>
  );
}
