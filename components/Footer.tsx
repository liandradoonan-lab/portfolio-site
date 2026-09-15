import { EMAIL, LINKEDIN } from "@/lib/contact";

const link =
  "text-air underline underline-offset-4 decoration-air/40 transition-colors hover:decoration-air";

/**
 * Contact line on every page. The email shows as the address itself, so it
 * can be copied as well as clicked.
 */
export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-4xl px-6 pb-12">
      <div className="flex flex-col gap-4 border-t border-ash/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[15px] text-ash">
          Currently looking for my next Series A or B team. Say hello.
        </p>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px]">
          <li>
            <a href={`mailto:${EMAIL}`} className={link}>
              {EMAIL}
            </a>
          </li>
          <li>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className={link}
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
