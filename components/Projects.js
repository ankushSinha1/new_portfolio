import content from "./Projects.json";

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title" data-aos="fade-up">
        {content.title}
      </h2>
      <div className="space-y-24">
        {content.projects.map((project, index) => (
          <article
            className="relative grid items-center gap-4 md:grid-cols-12"
            key={project.title}
          >
            <div
              className={`relative md:col-span-7 ${index % 2 === 1 ? "md:order-2" : ""}`}
              data-aos={index % 2 === 1 ? "fade-left" : "fade-right"}
            >
              <div className="relative h-[300px] overflow-hidden rounded">
                <img
                  src={project.image}
                  alt={`${project.title} ${content.imageAltSuffix}`}
                  loading="lazy"
                  className="h-full w-full object-cover brightness-50 transition-all duration-300 hover:brightness-100"
                />
              </div>
            </div>
            <div
              className={`md:col-span-5 md:pl-6 ${index % 2 === 1 ? "md:order-1" : ""}`}
              data-aos="fade-up"
            >
              <p className="mb-2 font-mono text-green-400">
                {content.featuredLabel}
              </p>
              <h3 className="text-2xl font-bold text-lightest-slate">
                {project.title}
              </h3>
              <div className="mb-3 rounded-lg p-6 shadow-xl">
                <ul className="ml-4 mt-2 list-disc text-slate">
                  {project.description.map((description) => (
                    <li key={description}>{description}</li>
                  ))}
                </ul>
              </div>
              <ul className="flex flex-wrap gap-3 font-mono text-sm text-slate">
                {project.techStack.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
