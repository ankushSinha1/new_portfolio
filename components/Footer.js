import content from "./Footer.json";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[var(--bg-primary)]">
      <div className="bg-[var(--bg-primary)] p-8 text-center">
        <p className="text-lightest-slate">{content.credit}</p>
      </div>
    </footer>
  );
}
