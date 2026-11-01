import Projects from "../../components/Projects";

export const metadata = {
  title: "Projects | Ankush Sinha",
  description: "Selected software development projects by Ankush Sinha.",
};

export default function ProjectPage() {
  return (
    <main className="relative z-10 min-h-screen bg-[var(--bg-primary)] pt-24 lg:px-[150px]">
      <Projects />
    </main>
  );
}
