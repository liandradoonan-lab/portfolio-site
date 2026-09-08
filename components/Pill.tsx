export default function Pill({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full border border-ash/15 bg-teal/30 px-2.5 py-1 text-xs text-ash">
      {children}
    </li>
  );
}
