import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";
import { rootsAndShootsLinks } from "../data/rootsAndShootsLinks";

export default function SiteNavigation({ overlay = false }) {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const sectionLinks = [
    [t("nav.home"), "/#home"],
    [t("nav.about"), "/#about"],
    [t("nav.mission"), "/mission"],
    [t("nav.whatWeDo"), "/#focus"],
    [t("nav.projects"), "/projects"],
    [t("nav.news"), "/#news"],
    [t("nav.team"), "/team"],
    [t("nav.book"), "/book"],
  ];

  return (
    <header className={overlay ? "absolute inset-x-0 top-0 z-20" : "relative z-20 bg-forest-950 text-white"}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <Link to="/#home" onClick={closeMenu} aria-label="Evergreen home" className="shrink-0">
          <img
            className="h-9 w-36 object-contain sm:h-14 sm:w-56"
            src="/evergreen-logo.svg"
            alt="Evergreen logo"
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label={t("common.language")}
            onClick={() => setLanguage((current) => (current === "en" ? "rw" : "en"))}
            className="rounded-full border border-white/30 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85 transition hover:bg-white/10"
          >
            {language === "en" ? "RW" : "EN"}
          </button>
          <button
            type="button"
            aria-label={menuOpen ? t("nav.close") : t("nav.menu")}
            aria-expanded={menuOpen}
            aria-controls="site-navigation-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex shrink-0 items-center gap-2 rounded-full border border-white/30 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {menuOpen ? (
              <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
            <span>{menuOpen ? t("nav.close") : t("nav.menu")}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="site-navigation-menu"
          aria-label="Website menu"
          className={`absolute top-full z-30 max-h-[calc(100vh-5rem)] overflow-y-auto rounded-2xl bg-forest-950 p-3 shadow-xl ${
            overlay ? "inset-x-4 sm:left-auto sm:right-8 sm:w-96 lg:right-12" : "inset-x-4 sm:left-auto sm:right-8 sm:w-96 lg:right-12"
          }`}
        >
          <div className="grid grid-cols-2 gap-1">
            {sectionLinks.map(([label, to]) => (
              <Link key={label} to={to} onClick={closeMenu} className="mobile-nav-link">
                {label}
              </Link>
            ))}
          </div>
          <div className="mt-3 border-t border-white/15 pt-2">
            <a href={rootsAndShootsLinks.volunteer} onClick={closeMenu} className="mobile-nav-link font-semibold text-lime-200">
              {t("nav.getInvolved")}
            </a>
            <a href={rootsAndShootsLinks.volunteer} onClick={closeMenu} className="mobile-nav-link">
              {t("nav.joinTeam")}
            </a>
            <a href={rootsAndShootsLinks.contact} onClick={closeMenu} className="mobile-nav-link">
              {t("nav.sendMessage")}
            </a>
            <a href={rootsAndShootsLinks.contact} onClick={closeMenu} className="mobile-nav-link">
              {t("nav.contact")}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
