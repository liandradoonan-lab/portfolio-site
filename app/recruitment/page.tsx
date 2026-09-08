export const metadata = { title: "Recruitment" };

export default function RecruitmentPage() {
  return (
    <>
      <h1 className="font-display text-5xl text-beige sm:text-6xl">Recruitment</h1>

      {/* Page intro. Same slot and styling the other section pages will use for
          theirs, so the three read as a set. */}
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-ash">
        All things recruitment and career development — from the workflows and
        projects I build to the industry topics I keep coming back to.
      </p>
    </>
  );
}
