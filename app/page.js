import ContactForm from "../components/ContactForm";
import Projects from "../components/Projects";
import content from "./page.json";

function SectionTitle({ children, centered = false }) {
  return (
    <h2
      className={`section-title${centered ? " justify-center" : ""}`}
      data-aos="fade-up"
    >
      {children}
    </h2>
  );
}

export default function HomePage() {
  return (
    <main
      id="content"
      className="relative z-10 bg-[var(--bg-primary)]/20"
    >
      <section className="mx-auto flex min-h-screen max-w-6xl items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-left">
          <p
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)]/70 px-4 py-2 font-mono text-sm text-green-400"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_var(--green)]" />
            {content.hero.eyebrow}
          </p>
          <h1
            className="mb-4 text-5xl font-bold leading-[1.05] tracking-[-0.055em] text-lightest-slate sm:text-7xl lg:text-8xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {content.hero.name}
          </h1>
          <h2
            className="mb-7 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate sm:text-5xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {content.hero.tagline}
          </h2>
          <p
            className="mb-10 max-w-2xl text-base leading-relaxed text-slate sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {content.hero.description}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-lg border border-green-400/50 bg-green-400/5 px-5 py-3 font-medium text-green-400 transition-colors hover:border-green-400 hover:bg-green-400/10"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {content.hero.contactLink}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section id="about-me" className="section-container">
        <SectionTitle>{content.about.title}</SectionTitle>
        <p
          className="mb-5 max-w-3xl text-base leading-relaxed text-slate sm:text-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {content.about.paragraphs[0]}
        </p>
        <p
          className="max-w-3xl text-base leading-relaxed text-slate sm:text-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {content.about.paragraphs[1]}
        </p>
      </section>

      <section id="experience" className="section-container">
        <SectionTitle>{content.experience.title}</SectionTitle>
        <div className="max-w-3xl">
          <article className="surface-card rounded-2xl p-6 md:p-8" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-lightest-slate">
              {content.experience.role}
            </h3>
            <p className="mb-5 mt-1 text-sm font-medium text-green-400">
              {content.experience.company} · {content.experience.dates}
            </p>
            <div className="divide-y divide-[var(--border)]">
              {content.experience.projects.map((project) => (
                <section className="py-5 first:pt-0 last:pb-0" key={project.name}>
                  <h4 className="mb-3 font-semibold text-lightest-slate">
                    {project.name}
                  </h4>
                  <ul className="space-y-3 text-slate">
                    {project.highlights.map((highlight) => (
                      <li className="flex gap-3 leading-relaxed" key={highlight}>
                        <span className="mt-1 text-green-400" aria-hidden="true">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section-container">
        <div data-aos="fade-up" data-aos-duration="1000">
          <SectionTitle>{content.skills.title}</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.skills.groups.map((group) => (
              <section className="surface-card rounded-2xl p-5 sm:p-6" key={group.title}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-light-slate">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      className="rounded-full border border-[var(--border)] bg-[var(--bg-primary)]/50 px-3 py-1.5 text-sm font-medium text-lightest-slate"
                      key={skill}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section-container">
        <SectionTitle>{content.education.title}</SectionTitle>
        <article className="surface-card max-w-3xl rounded-2xl p-6 md:p-8" data-aos="fade-up">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
            <div>
              <h3 className="text-xl font-semibold text-lightest-slate">
                {content.education.institution}
              </h3>
              <p className="mt-1 text-slate">{content.education.degree}</p>
            </div>
            <span className="text-sm text-slate">{content.education.dates}</span>
          </div>
          <p className="mt-4 text-sm font-medium text-green-400">
            GPA: {content.education.gpa}
          </p>
        </article>
      </section>

      <Projects />

      <section id="contact" className="section-container text-center">
        <SectionTitle centered>{content.contact.eyebrow}</SectionTitle>
        <h2
          className="mb-4 text-3xl font-semibold tracking-tight text-lightest-slate sm:text-4xl"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          {content.contact.title}
        </h2>
        <p
          className="mx-auto mb-10 max-w-lg leading-relaxed text-slate"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {content.contact.description}
        </p>
        <div className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-light-slate">
          <a className="hover:text-green-400" href={`mailto:${content.contact.email}`}>
            {content.contact.email}
          </a>
          <a className="hover:text-green-400" href={`tel:${content.contact.phone.replaceAll(" ", "")}`}>
            {content.contact.phone}
          </a>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
