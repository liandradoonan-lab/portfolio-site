import ExperienceList, { type Section } from "@/components/ExperienceList";
import Pill from "@/components/Pill";

// Follows me/cv.md section for section; the wording of everything here —
// one-liners, company lines, bullets, pills — is edited in the vault's
// projects/portfolio-copy.md ("Role details") and synced in. The CV summary
// paragraph is deliberately not here — a headline goes above this list instead.
//
// The `line` on each entry is a one-line statement of what the role was, so
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
        line: "Recruitment & People Ops Lead for 70-person team — hiring, onboarding, employee relations, office management.",
        impact: [
          "As the sole recruiter for most of my tenure, reporting directly to the co-founders, made roughly 100 hires for a 70-person team — every department and seniority, in-office in Montreal and globally across LATAM, APAC and EMEA.",
          "Trusted advisor to department heads and co-founders: scoping roles, shaping interview plans, recommending offer packages and salary bands from Pave market data, and saying so when a brief and the market didn’t line up.",
          "Built the recruitment function from the ground up, from the ATS and sourcing tools to an AI-powered multi-channel outbound sourcing engine on HeyReach and Claude Code, running campaigns across several concurrent roles.",
        ],
        peopleOps: [
          "Ran payroll on ADP and global hires through Deel as employer of record, managed group benefits enrolment and renewals with our broker (Canada Life, Manulife), and led the negotiation with Rippling to consolidate onto one all-in-one platform.",
          "Wrote the employee handbook and core policies — leave, expenses, how to use our tools — and designed the performance process, training managers to run it and give feedback.",
          "Owned the employee lifecycle: structured onboarding built with team leads (SOC2 checklists, access, equipment), onsite onboarding and immigration support for global hires, and terminations end to end — letters, severance, ROEs and Service Canada.",
          "Ran the culture calendar — a monthly event program rotated across teams, 5 à 7s, company celebrations, work anniversaries and birthdays.",
          "Built an HR request tool in Lovable — SSO, document uploads, automated Slack notifications and reminders — to track every employee question and request, then reused it for an onboarding checklist that tracks SOC2 needs and nudges hiring managers on Slack.",
        ],
        tools: [
          "Full-cycle recruiting",
          "Outbound sourcing",
          "Payroll & benefits",
          "Policies & performance",
          "Employee relations",
          "Onboarding",
          "Compensation",
          "HeyReach",
          "Claude Code",
          "ADP",
          "Deel",
          "Pave",
          "Lovable",
        ],
      },
      {
        id: "renorun",
        company: "RenoRun",
        stage: "Series B",
        sector: "Construction materials delivery",
        title: "Recruiter, Operations",
        dates: "Aug 2021 – Aug 2022",
        line: "High-volume hiring for warehouse and logistics + Culture Ambassador",
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
    heading: "Early career & part-time",
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
    items: ["Gem", "Lever", "Greenhouse", "HubSpot", "Salesforce"],
  },
  {
    label: "AI",
    items: ["Claude", "Lovable", "ChatGPT", "Codex", "Wispr Flow"],
  },
  {
    label: "Sourcing & Outreach",
    items: ["LinkedIn Recruiter", "Pin", "Juicebox", "Gem", "Fetcher", "HeyReach"],
  },
  { label: "Additional", items: ["Notion", "Obsidian"] },
  { label: "Languages", items: ["English", "French"] },
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
        </div>
      </section>
    </>
  );
}
