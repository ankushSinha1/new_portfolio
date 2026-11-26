import Projects from "../../components/Projects";
import content from "./page.json";

export const metadata = {
  title: content.title,
  description: content.description,
};

export default function ProjectPage() {
  return (
    <main className="relative z-10 min-h-screen bg-[var(--bg-primary)] pt-24 lg:px-[150px]">
      <Projects />
    </main>
  );
}
