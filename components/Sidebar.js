import content from "./Sidebar.json";

export default function Sidebar() {
  return (
    <>
      <aside
        aria-label={content.socialLabel}
        className="fixed bottom-0 left-10 z-10 hidden w-10 lg:block"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <ul className="m-0 flex flex-col items-center p-0 after:block after:h-24 after:w-px after:bg-slate after:content-['']">
          {content.socialLinks.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={content.socialLinkLabel.replace("{name}", name)}
                className="block p-2 text-slate transition-all duration-200 hover:-translate-y-1 hover:text-green-400"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </aside>
      <aside
        className="fixed bottom-0 right-10 z-10 hidden lg:block"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <div className="flex flex-col items-center after:block after:h-24 after:w-px after:bg-slate after:content-['']">
          <a
            href={`mailto:${content.email}`}
            className="vertical-text p-1 text-slate transition-all duration-200 hover:-translate-y-1 hover:text-green-400"
          >
            {content.email}
          </a>
        </div>
      </aside>
    </>
  );
}
