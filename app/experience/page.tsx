import ExperienceList, { type Section } from "@/components/ExperienceList";
import Pill from "@/components/Pill";

// Mirrors me/cv.md section for section. The CV summary paragraph is
// deliberately not here — a headline goes above this list instead.
//
// The `line` on each entry is the one thing not lifted verbatim from the CV:
// it's a one-line statement of what the role was, written from the bullets, so
// the collapsed row says something the expanded panel then doesn't repeat.
const sections: Section[] = [
  {
    heading: "Work experience",
    roles: [
      {
        id: "planned",
        company: "Planned",
        stage: "Series B",
        sector: "AI-powered meetings and events platform",
        title: "Lead Talent Partner",
        dates: "Sep 2022 – Present",
        line: "Recruitment & HR Lead for 70-person team — hiring, onboarding, employee relations, office management.",
        impact: [
          "Made roughly 100 hires across every department and seniority — product, engineering, GTM, finance, operations — covering in-office Montreal roles and global hires across LATAM, APAC and EMEA.",
          "As the sole recruiter for most of that tenure, reported directly to the co-founders as their talent advisor: scoping roles, shaping interview plans, and saying so when a brief and the market didn’t line up.",
          "Built an AI-powered multi-channel outbound sourcing engine with Heyreach and Claude Code, running campaigns across several concurrent roles.",
        ],
        tools: [
          "Full-cycle recruiting",
          "Outbound sourcing",
          "Employee relations",
          "Onboarding",
          "Heyreach",
          "Claude Code",
        ],
      },
      {
        id: "renorun",
        company: "RenoRun",
        stage: "Series B",
        sector: "Construction materials delivery",
        title: "Recruiter, Operations",
        dates: "Aug 2021 – Aug 2022",
        line: "High-volume hiring for warehouse and logistics, plus a Culture Ambassador remit.",
        impact: [
          "Hired 150 warehouse and logistics teammates across Canadian and US warehouses.",
          "Built recruitment reporting dashboards tracking passthrough rate, no-show rate, rejection reasons and time-to-fill, establishing data-driven hiring practices during rapid scale.",
          "Served as Culture Ambassador — ran values-based interviews and led people initiatives informed by employee engagement survey findings.",
        ],
        tools: [
          "High-volume hiring",
          "Recruitment analytics",
          "Values-based interviewing",
          "Culture programs",
        ],
      },
      {
        id: "goodfood",
        company: "Goodfood",
        title: "Client Retention Specialist / Leadership Development Program",
        dates: "Apr 2020 – Aug 2021",
        line: "Client retention on a leadership track, stepping up as interim team lead.",
        impact: [
          "Top performer across all KPIs, with a ~30% retention rate against a 21.5% target.",
          "Interim Team Lead for a team of six — ongoing coaching, feedback and performance reviews.",
        ],
        tools: ["Client retention", "Coaching", "Performance reviews"],
      },
      {
        id: "buscom",
        company: "Bus.com",
        stage: "Series B",
        sector: "Group transportation marketplace",
        title: "Inbound Sales Representative",
        dates: "Feb 2018 – Dec 2019",
        line: "Inbound sales for group transport, consistently above the company win rate.",
        impact: [
          "Managed 50+ new requests per day at a minimum 6.5% lead-to-close win rate, against a company average under 5%.",
          "Organised transportation for small and large-scale events, making sure client needs were met and trip logistics optimised.",
        ],
        tools: ["Inbound sales", "Event logistics", "Account management"],
      },
    ],
  },
  {
    heading: "Early career",
    roles: [
      {
        id: "costello",
        company: "Costello Irish Dance",
        title: "Irish Dance Coach",
        dates: "Apr 2017 – Sep 2018",
        line: "Coaching young dancers, tailoring lessons to each individual.",
        impact: [
          "Taught young dancers all aspects of Irish dance and guided them to be the best they can be in sport and life, tailoring lessons to the needs of each individual.",
        ],
        tools: ["Coaching", "Curriculum design"],
      },
      {
        id: "eggspectation",
        company: "Eggspectation",
        sector: "De Maisonneuve, Montreal",
        title: "Server",
        dates: "Jun 2015 – Sep 2017",
        line: "High-volume floor service through peak hours, alongside full-time study.",
        impact: [
          "Worked a high-volume floor through peak service, holding service quality and pace under pressure while at university full time.",
        ],
        tools: ["Service under pressure"],
      },
      {
        id: "mcdonalds",
        company: "McDonald’s Champlain",
        sector: "LaSalle, QC",
        title: "Shift Manager & Crew Trainer",
        dates: "Oct 2010 – Nov 2014",
        line: "First people-leadership role — running shifts and training crew, held through school.",
        impact: [
          "Ran the restaurant across eight-hour shifts, accountable for service quality, production times and cleanliness.",
          "Delegated to and trained a team of ten crew members, adapting to a constantly changing floor — first people-leadership role, held through high school and CEGEP.",
        ],
        tools: ["Shift management", "Training", "Team leadership"],
      },
    ],
  },
  {
    heading: "Student organizations",
    roles: [
      {
        id: "sus",
        company: "Science Undergraduate Society",
        sector: "McGill University",
        title: "Science Event-Planning Committee",
        dates: "2015 – 2016",
        line: "Ran large-scale events for the science student body, including a five-day, 500-person event.",
        impact: [
          "In a team of twelve, organised and ran large-scale events open to all science students, including Science Games — a five-day event with 500 participants and staff.",
          "Head of Science Crawl, a single-day event, owning the budget, schedule and staffing end to end.",
        ],
        tools: ["Event operations", "Budget ownership", "Staffing"],
      },
      {
        id: "puls-vp",
        company: "Physiology Undergraduate League of Students",
        sector: "McGill University",
        title: "VP of Social Affairs",
        dates: "2015 – 2016",
        line: "Owned the social calendar for the physiology student body.",
        impact: [
          "Independently organised social events for the physiology student body — welcome breakfast, apartment crawl, “PHGY Fridays”, wine and cheese.",
          "Collaborated with other departmental student groups to build larger joint events.",
        ],
        tools: ["Event planning", "Cross-group partnerships"],
      },
      {
        id: "puls-u2",
        company: "Physiology Undergraduate League of Students",
        sector: "McGill University",
        title: "U2 Representative",
        dates: "2014 – 2015",
        line: "Liaison to second-year students, and ran a small publishing operation.",
        impact: [
          "Liaison between PULS and all second-year physiology students through weekly newsletters.",
          "Ran the Note Taking Club: hired writers and editors to produce lecture notes sold to students, quality-checked every set before print, and wrote and edited a share myself.",
        ],
        tools: ["Hiring", "Editing", "Internal comms"],
      },
    ],
  },
];

const education = [
  { school: "McGill University", detail: "Bachelor of Science, Physiology" },
  { school: "Vanier College", detail: "Health Sciences" },
];

const toolkit = [
  {
    label: "ATS & CRM",
    items: ["Gem", "Ashby", "Lever", "Greenhouse", "Hubspot", "Salesforce"],
  },
  {
    label: "AI & sourcing",
    items: ["Pin", "Juicebox", "Claude", "Lovable"],
  },
  { label: "Also", items: ["Notion", "Heyreach"] },
];

export const metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <>
      <h1 className="font-display text-5xl text-beige sm:text-6xl">Experience</h1>

      {/* Headline goes here — Liandra is writing a separate one, deliberately
          not the CV summary paragraph. */}

      <div className="mt-10">
        <ExperienceList sections={sections} />
      </div>

      {/* Education and Additional have no detail to reveal, so they're static
          blocks rather than rows that expand into nothing. */}
      <section className="mt-14">
        <h2 className="mb-4 text-sm uppercase tracking-[0.14em] text-air">
          Education
        </h2>
        <ul className="border-t border-ash/10">
          {education.map(({ school, detail }) => (
            <li
              key={school}
              className="flex flex-col gap-0.5 border-b border-ash/10 py-2.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
            >
              <span className="text-base text-beige">{school}</span>
              <span className="text-[13px] text-ash">{detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="mb-4 text-sm uppercase tracking-[0.14em] text-air">
          Additional
        </h2>
        <div className="space-y-4 border-t border-ash/10 pt-4">
          {toolkit.map(({ label, items }) => (
            <div key={label} className="sm:flex sm:gap-4">
              <span className="block w-32 shrink-0 text-[13px] text-ash/70">
                {label}
              </span>
              <ul className="mt-2 flex flex-wrap gap-1.5 sm:mt-0">
                {items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </ul>
            </div>
          ))}
          <div className="sm:flex sm:gap-4">
            <span className="block w-32 shrink-0 text-[13px] text-ash/70">
              Languages
            </span>
            <span className="mt-2 block text-[13px] text-ash sm:mt-0">
              French (professional)
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
