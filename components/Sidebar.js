const socialLinks = [
  ["GitHub", "https://github.com/ankushSinha1"],
  ["LinkedIn", "https://www.linkedin.com/in/ankushSinha1/"],
  ["LeetCode", "https://leetcode.com/u/ankushSinha1"],
  ["Instagram", "https://www.instagram.com/sinha_.ankush"],
];

export default function Sidebar() {
  return (
    <>
      <aside
        aria-label="Social profiles"
        className="fixed bottom-0 left-10 z-10 hidden w-10 lg:block"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <ul className="m-0 flex flex-col items-center p-0 after:block after:h-24 after:w-px after:bg-slate after:content-['']">
          {socialLinks.map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Ankush's ${label} profile`}
                className="block p-2 text-slate transition-all duration-200 hover:-translate-y-1 hover:text-green-400"
              >
                {label}
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
            href="mailto:sinha.ankush5454@gmail.com"
            className="vertical-text p-1 text-slate transition-all duration-200 hover:-translate-y-1 hover:text-green-400"
          >
            sinha.ankush5454@gmail.com
          </a>
        </div>
      </aside>
    </>
  );
}
