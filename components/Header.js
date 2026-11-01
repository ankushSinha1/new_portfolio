"use client";

import { useEffect, useState } from "react";

const links = [
  ["Home", "/"],
  ["Experience", "/#experience"],
  ["Projects", "/#projects"],
  ["Contact", "/#contact"],
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const dark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDarkTheme(dark);
    document.documentElement.classList.toggle("light-theme", !dark);

    let previousScroll = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsHeaderHidden(currentScroll > previousScroll && currentScroll > 80);
      previousScroll = Math.max(currentScroll, 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  function toggleTheme() {
    const nextIsDark = !isDarkTheme;
    setIsDarkTheme(nextIsDark);
    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    document.documentElement.classList.toggle("light-theme", !nextIsDark);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-transform duration-300 ${isHeaderHidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <nav className="w-full overflow-hidden bg-[var(--bg-primary)]/95 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <a href="/" aria-label="Ankush Sinha home">
              <img src="/assets/logo.png" alt="" className="h-8 w-8" />
            </a>
            <div className="hidden items-center space-x-8 md:flex">
              {links.map(([label, href], index) => (
                <a
                  href={href}
                  className="nav-link"
                  data-aos="fade-down"
                  data-aos-delay={String((index + 1) * 100)}
                  key={label}
                >
                  {label}
                </a>
              ))}
              <button
                type="button"
                onClick={toggleTheme}
                className="rounded-lg p-2 text-green-400 transition-colors hover:bg-green-400/10"
                aria-label={`Switch to ${isDarkTheme ? "light" : "dark"} theme`}
              >
                {isDarkTheme ? "☼" : "☾"}
              </button>
            </div>
            <button
              type="button"
              className="flex items-center rounded-lg p-2 text-green-400 md:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <span aria-hidden="true" className="text-2xl leading-none">
                {isMenuOpen ? "×" : "☰"}
              </span>
            </button>
          </div>
        </div>

        <div className="md:hidden" aria-hidden={!isMenuOpen}>
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity ${isMenuOpen ? "visible opacity-100" : "invisible opacity-0"}`}
          />
          <aside
            className={`fixed right-0 top-0 z-50 h-full w-[min(75vw,320px)] transform bg-[var(--bg-primary)] shadow-xl transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex items-center justify-between border-b border-[var(--text-secondary)] px-6 py-4">
              <span className="text-lg font-semibold text-[var(--text-primary)]">
                Menu
              </span>
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                className="p-2 text-2xl text-green-400"
              >
                ×
              </button>
            </div>
            <div className="flex flex-col space-y-6 bg-[var(--bg-primary)] p-8">
              {links.map(([label, href]) => (
                <a
                  href={href}
                  className="nav-link"
                  onClick={closeMenu}
                  key={label}
                >
                  {label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  toggleTheme();
                  closeMenu();
                }}
                className="nav-link text-left"
              >
                {isDarkTheme ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </aside>
        </div>
      </nav>
    </header>
  );
}
