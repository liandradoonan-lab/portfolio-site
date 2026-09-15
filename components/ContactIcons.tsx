import { EMAIL, LINKEDIN } from "@/lib/contact";

const circle =
  "inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal text-beige transition-colors hover:bg-air";

function EnvelopeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[18px] w-[18px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[17px] w-[17px]"
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/**
 * Email and LinkedIn as icon buttons — home hero and the top of /experience,
 * the only places contact appears. Icon-only, so each link carries a spoken
 * label, and a hover tooltip (the email one shows the address itself).
 */
export default function ContactIcons({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      <li>
        <a
          href={`mailto:${EMAIL}`}
          aria-label={`Email Liandra at ${EMAIL}`}
          title={EMAIL}
          className={circle}
        >
          <EnvelopeIcon />
        </a>
      </li>
      <li>
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Liandra on LinkedIn (opens in a new tab)"
          title="LinkedIn"
          className={circle}
        >
          <LinkedInIcon />
        </a>
      </li>
    </ul>
  );
}
