import ContactForm from "../components/ContactForm";
import Projects from "../components/Projects";
import { skillGroups } from "../components/portfolio-data";

const experience = [
  "Gaining hands-on experience in real-world data engineering processes, including data cleaning, transformation, and pipeline design.",
  "Developing core Python programming skills, with a focus on data manipulation using libraries like Pandas, NumPy, and Matplotlib.",
  "Building a solid understanding of statistical concepts and probabilistic models to support data-driven decision making.",
  "Exploring tools and concepts essential for data engineering and data science, including SQL, data wrangling, and exploratory data analysis (EDA).",
];

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
      className="relative z-10 bg-[var(--bg-primary)] py-0 sm:px-2 md:px-2 lg:px-[150px]"
    >
      <section className="flex min-h-screen items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-left">
          <p
            className="mb-5 font-mono text-green-400"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Hi, I am
          </p>
          <h1
            className="mb-4 text-5xl font-bold text-lightest-slate sm:text-7xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Ankush Sinha
          </h1>
          <h2
            className="mb-8 text-4xl font-bold text-slate sm:text-6xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Building the web, better.
          </h2>
          <p
            className="mb-12 max-w-xl text-lg text-slate"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Innovating the web with purpose and precision. As a full-stack
            engineer, I create accessible, user-friendly digital experiences
            that leave a lasting impact.
          </p>
          <a
            href="#contact"
            className="inline-block rounded border border-green-400 px-8 py-4 text-green-400 transition-colors hover:bg-green-400/10"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <section id="about-me" className="section-container">
        <SectionTitle>About Me</SectionTitle>
        <p
          className="mb-4 max-w-xl text-lg text-slate"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Hi there!, I&apos;m Ankush Sinha, a full-stack Developer specializing
          in Next, Node and MongoDB. My passion lies in developing efficient web
          applications, managing SQL and NoSQL databases, and ensuring seamless
          deployment. I am committed to creating dynamic, scalable, and
          user-centric web applications using modern technologies.
        </p>
        <p
          className="max-w-xl text-lg text-slate"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Looking forward to sharpening my skills in a challenging environment.
          I guarantee enthusiasm in work and fulfilling my projects with
          inexpressible effort.
        </p>
      </section>

      <section id="experience" className="section-container">
        <SectionTitle>Experience</SectionTitle>
        <div className="grid gap-8 md:grid-cols-2">
          <article className="rounded-lg p-6 shadow-md" data-aos="fade-up">
            <h3 className="font-semibold text-lightest-slate">Data Engineer</h3>
            <p className="text-slate">Chola MS · March 2025 - Present</p>
            <ul className="ml-4 mt-2 list-disc text-slate">
              {experience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-container">
        <div className="mt-12" data-aos="fade-up" data-aos-duration="1000">
          <SectionTitle>Skills</SectionTitle>
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-2 mt-8 text-xl font-semibold first:mt-0">
                {group.title}
              </h3>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {group.skills.map((skill) => (
                  <div
                    className="flex flex-col items-center rounded-lg p-4 text-center shadow-md"
                    key={skill.name}
                  >
                    <img
                      src={skill.logo}
                      alt=""
                      aria-hidden="true"
                      className={`mb-2 h-10 w-10 transition-transform duration-300 hover:scale-110${skill.invert ? " invert" : ""}`}
                      loading="lazy"
                    />
                    <span className="font-semibold text-lightest-slate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Projects />

      <section id="contact" className="section-container text-center">
        <SectionTitle centered>What&apos;s Next?</SectionTitle>
        <h2
          className="mb-4 text-4xl font-bold text-lightest-slate"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          Get In Touch
        </h2>
        <p
          className="mx-auto mb-12 max-w-lg text-slate"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Let&apos;s Chat! Whether you have a question, a project idea, or just
          want to connect, I&apos;m always happy to hear from you. Drop me a
          message, and I&apos;ll be in touch soon!
        </p>
        <ContactForm />
      </section>
    </main>
  );
}
