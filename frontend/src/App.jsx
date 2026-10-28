import { useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import SiteNavigation from "./components/SiteNavigation";
import { LanguageProvider, useLanguage } from "./i18n";
import BookPage from "./pages/BookPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectsPage from "./pages/ProjectsPage";
import TeamPage from "./pages/TeamPage";
import { newsEn, newsRw } from "./data/news";
import { rootsAndShootsLinks } from "./data/rootsAndShootsLinks";

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      {diagonal ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M7 7h10v10" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}

function FooterIcon({ name }) {
  const socialPaths = {
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="0.8" fill="currentColor" stroke="none" />
      </>
    ),
    youtube: <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.8 15.4V8.6l6 3.4-6 3.4Z" />,
    x: <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.8 5.7 22H2.5l7.3-8.4L1.8 2h6.5l4.4 6.6L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />,
  };
  const isSocial = name in socialPaths;

  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill={isSocial && name !== "instagram" ? "currentColor" : "none"}
      stroke={isSocial ? (name === "instagram" ? "currentColor" : "none") : "currentColor"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {isSocial ? socialPaths[name] : name === "email" ? (
        <path d="M3 5h18v14H3zM3 6l9 7 9-7" />
      ) : name === "phone" ? (
        <path d="M5 3h4l2 5-2.5 1.5a15 15 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z" />
      ) : (
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      )}
    </svg>
  );
}

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className={`max-w-2xl ${light ? "text-white" : "text-forest-950"}`}>
      <p className={`eyebrow ${light ? "text-lime-300" : "text-forest-600"}`}>{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-5 max-w-xl text-base leading-7 ${light ? "text-white/65" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

function HomePage() {
  const { t, language } = useLanguage();

  const storyImages = [
    "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=900&q=85",
  ];

  const focusAreas = [
    {
      image: "/projects/roots-and-shoots/planting-together.jpeg",
      title: t("focus.areas.treePlanting.title"),
      description: t("focus.areas.treePlanting.description"),
    },
    {
      image: "/projects/green-communities.jpg",
      title: t("focus.areas.conservation.title"),
      description: t("focus.areas.conservation.description"),
    },
    {
      image: "/projects/wildlife-protection.jpg",
      title: t("focus.areas.wildlife.title"),
      description: t("focus.areas.wildlife.description"),
    },
    {
      image: "/projects/recycling.jpg",
      title: t("focus.areas.waste.title"),
      description: t("focus.areas.waste.description"),
    },
    {
      image: "/projects/water-guardians.jpg",
      title: t("focus.areas.water.title"),
      description: t("focus.areas.water.description"),
    },
    {
      image: "/projects/eco-education.jpg",
      title: t("focus.areas.education.title"),
      description: t("focus.areas.education.description"),
    },
  ];

  const overviewRows = [
    [t("overview.rowOneTitle"), t("overview.rowOneValue")],
    [t("overview.rowTwoTitle"), t("overview.rowTwoValue")],
    [t("overview.rowThreeTitle"), t("overview.rowThreeValue")],
    [t("overview.rowFourTitle"), t("overview.rowFourValue")],
  ];

  const environmentFacts = [
    {
      image: "/projects/tree-planting.jpg",
      title: t("environment.facts.oneTitle"),
      description: t("environment.facts.oneDescription"),
    },
    {
      image: "/projects/wildlife-protection.jpg",
      title: t("environment.facts.twoTitle"),
      description: t("environment.facts.twoDescription"),
    },
    {
      image: "/projects/water-guardians.jpg",
      title: t("environment.facts.threeTitle"),
      description: t("environment.facts.threeDescription"),
    },
    {
      image: "/projects/green-communities.jpg",
      title: t("environment.facts.fourTitle"),
      description: t("environment.facts.fourDescription"),
    },
  ];

  const protectionSteps = [
    {
      icon: "🌱",
      number: "01",
      title: t("natureProtection.steps.assess.title"),
      description: t("natureProtection.steps.assess.description"),
    },
    {
      icon: "🌿",
      number: "02",
      title: t("natureProtection.steps.restore.title"),
      description: t("natureProtection.steps.restore.description"),
    },
    {
      icon: "📚",
      number: "03",
      title: t("natureProtection.steps.educate.title"),
      description: t("natureProtection.steps.educate.description"),
    },
    {
      icon: "🤝",
      number: "04",
      title: t("natureProtection.steps.act.title"),
      description: t("natureProtection.steps.act.description"),
    },
  ];

  const stories = (language === "rw" ? newsRw : newsEn).slice(0, 3);

  return (
    <div className="home-page overflow-hidden">
      <SiteNavigation overlay />

      <main>
        <section id="home" className="hero relative flex min-h-[680px] items-center sm:min-h-[820px]">
          <div className="hero-image absolute inset-0" />
          <div className="hero-shade absolute inset-0" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-36 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <p className="mb-6 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-lime-200 sm:text-xs sm:tracking-[0.24em]">
                <span className="h-px w-9 bg-lime-300" />
                {t("hero.tagline")}
              </p>
              <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.04] tracking-tight text-white sm:text-7xl lg:text-[5.5rem]">
                {t("hero.title")} <span className="italic text-lime-300">{t("hero.titleAccent")}</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
                {t("hero.description")}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#about" className="button-lime">
                  {t("hero.discover")} <ArrowIcon />
                </a>
              </div>
            </div>
            <div className="absolute bottom-8 right-5 hidden items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/70 sm:flex lg:right-12">
              <span className="h-px w-12 bg-white/50" />
              {t("hero.sharedHome")}
            </div>
          </div>
        </section>

        <section id="about" className="relative mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-24 lg:px-12">
          <div className="relative">
            <img
              className="aspect-[4/4.3] w-full rounded-[2rem] object-cover"
              src="/projects/roots-and-shoots/roots-and-shoots-12.jpeg"
              alt={language === "rw"
                ? "Abanyeshuri n’abakorerabushake bahuriye ku busitani bwa Roots & Shoots"
                : "Students and volunteers gathered at the Roots & Shoots garden"}
            />
            <div className="absolute -bottom-7 right-4 rounded-2xl bg-lime-300 px-6 py-5 text-forest-950 shadow-lg sm:right-8">
              <p className="font-display text-3xl font-semibold">{t("about.homeLabel")}</p>
              <p className="mt-1 text-sm">{t("about.location")}</p>
            </div>
            <div className="absolute -left-3 top-10 hidden h-24 w-24 rounded-full border border-forest-700/15 sm:block" />
          </div>
          <div className="pt-2 lg:py-8">
            <SectionHeading
              eyebrow={t("about.eyebrow")}
              title={t("about.title")}
              description={t("about.description")}
            />
            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              {t("about.intro")}
            </p>
            <a href="#focus" className="text-link mt-8">
              {t("about.discover")} <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="mb-8 max-w-3xl">
            <SectionHeading
              eyebrow={t("overview.eyebrow")}
              title={t("overview.title")}
              description={t("overview.description")}
            />
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-forest-950/10 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-0 text-left">
                <thead className="bg-forest-950 text-white">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em]">{t("overview.tableHeader")}</th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em]">{t("overview.tableSummary")}</th>
                  </tr>
                </thead>
                <tbody>
                  {overviewRows.map(([label, value]) => (
                    <tr key={label} className="border-t border-forest-950/10 odd:bg-cream-50">
                      <th scope="row" className="px-6 py-5 align-top text-base font-semibold text-forest-950">{label}</th>
                      <td className="px-6 py-5 align-top text-sm leading-7 text-slate-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-[#eef4e9]/80 px-5 py-24 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow={t("environment.eyebrow")}
              title={t("environment.title")}
              description={t("environment.description")}
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {environmentFacts.map((fact) => (
                <article key={fact.title} className="overflow-hidden rounded-[1.75rem] border border-forest-950/10 bg-white shadow-sm">
                  <img
                    className="aspect-[16/10] w-full object-cover"
                    src={fact.image}
                    alt={fact.title}
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-semibold text-forest-950">{fact.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{fact.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="focus" className="bg-[#f0f3e9]/80 px-5 py-24 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <SectionHeading
                eyebrow={t("focus.eyebrow")}
                title={t("focus.title")}
                description={t("focus.description")}
              />
              <Link to="/projects" className="text-link shrink-0">
                {t("focus.approach")} <ArrowIcon />
              </Link>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {focusAreas.map((area, index) => (
                <article key={area.title} className="focus-card overflow-hidden !p-0">
                  <img
                    className="aspect-[16/10] w-full object-cover"
                    src={area.image}
                    alt={area.title}
                    loading="lazy"
                  />
                  <div className="p-6">
                    <div className="flex items-start justify-end">
                      <span className="font-display text-sm text-forest-700/50">0{index + 1}</span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-semibold text-forest-950">{area.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{area.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f6f7f2]/80 px-5 py-24 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow={t("natureProtection.eyebrow")}
                title={t("natureProtection.title")}
                description={t("natureProtection.description")}
              />
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {protectionSteps.map((step) => (
                <article key={step.number} className="rounded-[1.75rem] border border-forest-950/10 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl" aria-hidden="true">{step.icon}</span>
                    <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-forest-600">{step.number}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-forest-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="impact-section relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="absolute -right-28 -top-44 h-[28rem] w-[28rem] rounded-full border border-white/10" />
          <div className="absolute -right-14 -top-28 h-[20rem] w-[20rem] rounded-full border border-white/10" />
          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <SectionHeading
                eyebrow={t("impact.eyebrow")}
                title={t("impact.title")}
                description={t("impact.description")}
                light
              />
              <div className="grid grid-cols-2 gap-x-6 gap-y-9 border-t border-white/20 pt-8 sm:grid-cols-4 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0 lg:pl-12">
                {[
                  ["10,000+", t("impact.stats.trees")],
                  ["5,000+", t("impact.stats.people")],
                  ["50+", t("impact.stats.projects")],
                  ["20+", t("impact.stats.communities")],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="font-display text-3xl font-medium text-lime-300 sm:text-4xl">{value}</p>
                    <p className="mt-2 text-sm text-white/65">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <Link to="/projects" className="button-lime mt-10">
              {t("projects.allProjects")} <ArrowIcon />
            </Link>
          </div>
        </section>

        <section className="bg-[#e7ecdf]/80 px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow={t("gallery.eyebrow")}
                title={t("gallery.title")}
                description={t("gallery.description")}
              />
              <Link to="/projects" className="text-link mt-7">
                {t("gallery.exploreWork")} <ArrowIcon />
              </Link>
            </div>
            <div className="gallery-grid">
              <figure className="gallery-item">
                <img
                  src="/projects/roots-and-shoots/planting-together.jpeg"
                  alt={language === "rw"
                    ? "Abanyeshuri bafatanya gutera ibimera mu busitani bw’ishuri"
                    : "Students working together to plant seedlings in a school garden"}
                  loading="lazy"
                />
                <figcaption className="gallery-caption">{t("gallery.captions.planting")}</figcaption>
              </figure>
              <figure className="gallery-item">
                <img
                  src="/projects/roots-and-shoots/planting-activity.jpeg"
                  alt={language === "rw"
                    ? "Abanyeshuri batera ibimera mu busitani bw’ishuri"
                    : "Students planting seedlings in a school garden"}
                  loading="lazy"
                />
                <figcaption className="gallery-caption">{t("gallery.captions.community")}</figcaption>
              </figure>
              <figure className="gallery-item">
                <img
                  src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=85"
                  alt="A young plant growing in rich soil"
                  loading="lazy"
                />
                <figcaption className="gallery-caption">{t("gallery.captions.seedling")}</figcaption>
              </figure>
              <figure className="gallery-item">
                <img
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1000&q=85"
                  alt={t("gallery.wasteAlt")}
                  loading="lazy"
                />
                <figcaption className="gallery-caption">{t("gallery.captions.waste")}</figcaption>
              </figure>
              <figure className="gallery-item">
                <img
                  src="/projects/roots-and-shoots/classroom-learning.jpeg"
                  alt={t("gallery.learningAlt")}
                  loading="lazy"
                />
                <figcaption className="gallery-caption">{t("gallery.captions.learning")}</figcaption>
              </figure>
              <figure className="gallery-item">
                <img
                  src="https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&w=1000&q=85"
                  alt={t("gallery.waterAlt")}
                  loading="lazy"
                />
                <figcaption className="gallery-caption">{t("gallery.captions.water")}</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="news" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-12">
          <div>
            <SectionHeading
              eyebrow={t("stories.eyebrow")}
              title={t("stories.title")}
              description={t("stories.description")}
            />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {stories.map((story, index) => (
              <article key={story.id ?? story.title} className="story-card flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={story.image ?? storyImages[index % storyImages.length]}
                    alt=""
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-forest-950/75 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-lime-200">
                    {story.tag ?? story.category ?? t("stories.tag")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  {story.published_at && (
                    <p className="text-[10px] font-bold tracking-[0.17em] text-forest-600">
                      {new Date(story.published_at).toLocaleDateString(language === "rw" ? "rw-RW" : "en", { dateStyle: "medium" })}
                    </p>
                  )}
                  <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-forest-950">{story.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{story.summary}</p>
                  <span className="text-link mt-5">
                    {t("stories.readMore")}
                    <ArrowIcon />
                  </span>
                </div>
              </article>
            ))}
          </div>
          {stories.length === 0 && (
            <p className="mt-6 text-sm text-slate-600">{t("stories.empty")}</p>
          )}
        </section>

        <section className="px-5 pb-24 sm:px-8 sm:pb-28 lg:px-12">
          <div className="join-banner relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
            <div className="relative z-10 max-w-2xl">
              <p className="eyebrow text-lime-300">{t("join.eyebrow")}</p>
              <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-white sm:text-5xl">
                {t("join.title")}
              </h2>
              <p className="mt-5 max-w-lg leading-7 text-white/70">
                {t("join.description")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={rootsAndShootsLinks.volunteer} className="button-lime">
                  {t("join.volunteer")} <ArrowIcon />
                </a>
                <a href={rootsAndShootsLinks.contact} className="button-outline">
                  {t("join.message")} <ArrowIcon diagonal />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-forest-950 px-5 pb-8 pt-14 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-white/15 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
            <div>
              <a href="#home" aria-label="Evergreen home">
                <img
                  className="h-14 w-52 object-contain"
                  src="/evergreen-logo.svg"
                  alt="Evergreen logo"
                />
              </a>
              <p className="mt-5 max-w-xs text-sm leading-6 text-white/60">{t("footer.future")}</p>
            </div>
            <div>
              <h3 className="footer-heading">{t("footer.explore")}</h3>
              <div className="mt-5 grid gap-3 text-sm text-white/65">
                <a className="footer-link" href="#about">{t("footer.about")}</a>
                <a className="footer-link" href="#focus">{t("footer.whatWeDo")}</a>
                <Link className="footer-link" to="/projects">{t("footer.projects")}</Link>
                <a className="footer-link" href="#news">{t("footer.news")}</a>
<Link className="footer-link" to="/team">{t("footer.team")}</Link>
                    <Link className="footer-link" to="/book">{t("footer.book")}</Link>
              </div>
            </div>
            <div>
              <h3 className="footer-heading">{t("footer.sayHello")}</h3>
              <div className="mt-5 grid gap-3 text-sm text-white/65">
                <a className="footer-link flex items-center gap-2" href="mailto:info@rootsandshootsrwanda.org"><FooterIcon name="email" />info@rootsandshootsrwanda.org</a>
                <a className="footer-link flex items-center gap-2" href="mailto:rootsshootsrwa001@gmail.com"><FooterIcon name="email" />rootsshootsrwa001@gmail.com</a>
                <a className="footer-link flex items-center gap-2" href="tel:+250788451473"><FooterIcon name="phone" />+250-788-451-473</a>
                <a className="footer-link flex items-center gap-2" href="tel:+250788986911"><FooterIcon name="phone" />+250-788-986-911</a>
                <span className="flex items-center gap-2"><FooterIcon name="location" />Remera, Gasabo District, Kigali City, Rwanda</span>
                <h4 className="footer-heading mt-3">{t("footer.followUs")}</h4>
                <a className="footer-link flex items-center gap-2" href="https://www.instagram.com/rootsandshoots.rw" target="_blank" rel="noopener noreferrer"><FooterIcon name="instagram" />Instagram</a>
                <a className="footer-link flex items-center gap-2" href="https://www.youtube.com/@Roots_and_Shoots_Rwanda" target="_blank" rel="noopener noreferrer"><FooterIcon name="youtube" />YouTube</a>
                <a className="footer-link flex items-center gap-2" href="https://x.com/RwandaRoots" target="_blank" rel="noopener noreferrer"><FooterIcon name="x" />X</a>
              </div>
            </div>
            <div>
              <h3 className="footer-heading">{t("footer.getInvolved")}</h3>
              <p className="mt-5 text-sm leading-6 text-white/65">
                {t("footer.involvementText")}
              </p>
              <a href={rootsAndShootsLinks.contact} className="button-lime mt-5">
                {t("footer.message")} <ArrowIcon diagonal />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>{t("footer.rights").replace("{year}", new Date().getFullYear())}</p>
            <p>{t("footer.madeWithCare")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MissionPage() {
      const { t } = useLanguage();

      const cards = [
        {
          title: t("mission.cards.protect.title"),
          description: t("mission.cards.protect.description"),
          icon: "🌳",
        },
        {
          title: t("mission.cards.empower.title"),
          description: t("mission.cards.empower.description"),
          icon: "🤝",
        },
        {
          title: t("mission.cards.educate.title"),
          description: t("mission.cards.educate.description"),
          icon: "📚",
        },
      ];

      return (
        <div className="bg-cream-50 text-forest-950">
          <SiteNavigation />
          <main>
            <section className="mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pt-40">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="eyebrow text-forest-600">{t("mission.eyebrow")}</p>
                  <h1 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                    {t("mission.title")}
                  </h1>
                  <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">{t("mission.description")}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href={rootsAndShootsLinks.volunteer} className="button-lime">
                      {t("mission.primaryAction")} <ArrowIcon />
                    </a>
                    <a href={rootsAndShootsLinks.contact} className="button-light">
                      {t("mission.secondaryAction")} <ArrowIcon diagonal />
                    </a>
                  </div>
                </div>
                <div className="overflow-hidden rounded-[2rem] bg-forest-950 p-6 shadow-xl sm:p-8">
                  <img
                    className="aspect-[4/3.2] w-full rounded-[1.5rem] object-cover"
                    src="/projects/roots-and-shoots/planting-activity.jpeg"
                    alt={language === "rw"
                      ? "Abanyeshuri batera ibimera mu busitani bw’ishuri"
                      : "Students planting seedlings in a school garden"}
                  />
                </div>
              </div>
            </section>

            <section className="bg-[#edf3e7] px-5 py-20 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                  <p className="eyebrow text-forest-600">{t("mission.eyebrow")}</p>
                  <p className="mt-5 text-lg leading-8 text-slate-700">{t("mission.intro")}</p>
                </div>
                <div className="mt-12 grid gap-5 md:grid-cols-3">
                  {cards.map((card) => (
                    <article key={card.title} className="rounded-[1.75rem] border border-forest-950/10 bg-white p-6 shadow-sm">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-lime-200 text-2xl">{card.icon}</div>
                      <h2 className="mt-6 font-display text-2xl font-semibold text-forest-950">{card.title}</h2>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="px-5 py-20 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-7xl">
                <SectionHeading
                  eyebrow={t("mission.learning.eyebrow")}
                  title={t("mission.learning.title")}
                />
                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
                  {t("mission.learning.description")}
                </p>
                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  {Object.values(t("mission.learning.topics")).map((topic) => (
                    <article key={topic.title} className="rounded-[1.75rem] border border-forest-950/10 bg-white p-6 shadow-sm">
                      <h2 className="font-display text-2xl font-semibold text-forest-950">{topic.title}</h2>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{topic.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="px-5 py-20 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-7xl rounded-[2rem] border border-forest-950/10 bg-white p-6 shadow-lg sm:p-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                  <SectionHeading
                    eyebrow={t("natureProtection.eyebrow")}
                    title={t("natureProtection.title")}
                    description={t("natureProtection.description")}
                  />
                  <a href={rootsAndShootsLinks.contact} className="text-link shrink-0">
                    {t("mission.secondaryAction")} <ArrowIcon />
                  </a>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {[
                    { title: t("natureProtection.steps.assess.title"), detail: t("natureProtection.steps.assess.description"), icon: "01" },
                    { title: t("natureProtection.steps.restore.title"), detail: t("natureProtection.steps.restore.description"), icon: "02" },
                    { title: t("natureProtection.steps.educate.title"), detail: t("natureProtection.steps.educate.description"), icon: "03" },
                    { title: t("natureProtection.steps.act.title"), detail: t("natureProtection.steps.act.description"), icon: "04" },
                  ].map((item) => (
                    <article key={item.icon} className="rounded-[1.5rem] bg-[#f6f7f2] p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-forest-600">{item.icon}</span>
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-lime-200 text-lg">🌿</span>
                      </div>
                      <h3 className="mt-5 font-display text-xl font-semibold text-forest-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="px-5 pb-24 sm:px-8 sm:pb-28 lg:px-12">
              <div className="join-banner relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
                <div className="relative z-10 max-w-2xl">
                  <p className="eyebrow text-lime-300">{t("mission.ctaTitle")}</p>
                  <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-white sm:text-5xl">
                    {t("mission.ctaTitle")}
                  </h2>
                  <p className="mt-5 max-w-lg leading-7 text-white/70">{t("mission.ctaDescription")}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href={rootsAndShootsLinks.volunteer} className="button-lime">
                      {t("mission.primaryAction")} <ArrowIcon />
                    </a>
                    <a href={rootsAndShootsLinks.contact} className="button-outline">
                      {t("mission.secondaryAction")} <ArrowIcon diagonal />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <footer id="contact" className="bg-forest-950 px-5 pb-8 pt-14 text-white sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-10 border-b border-white/15 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
                <div>
                  <Link to="/" aria-label="Evergreen home">
                    <img className="h-14 w-52 object-contain" src="/evergreen-logo.svg" alt="Evergreen logo" />
                  </Link>
                  <p className="mt-5 max-w-xs text-sm leading-6 text-white/60">{t("footer.future")}</p>
                </div>
                <div>
                  <h3 className="footer-heading">{t("footer.explore")}</h3>
                  <div className="mt-5 grid gap-3 text-sm text-white/65">
                    <Link className="footer-link" to="/#about">{t("footer.about")}</Link>
                    <Link className="footer-link" to="/#focus">{t("footer.whatWeDo")}</Link>
                    <Link className="footer-link" to="/projects">{t("footer.projects")}</Link>
                    <Link className="footer-link" to="/#news">{t("footer.news")}</Link>
<Link className="footer-link" to="/team">{t("footer.team")}</Link>
                <Link className="footer-link" to="/book">{t("footer.book")}</Link>
                  </div>
                </div>
                <div>
                  <h3 className="footer-heading">{t("footer.sayHello")}</h3>
                  <div className="mt-5 grid gap-3 text-sm text-white/65">
                    <a className="footer-link flex items-center gap-2" href="mailto:info@rootsandshootsrwanda.org"><FooterIcon name="email" />info@rootsandshootsrwanda.org</a>
                    <a className="footer-link flex items-center gap-2" href="mailto:rootsshootsrwa001@gmail.com"><FooterIcon name="email" />rootsshootsrwa001@gmail.com</a>
                    <a className="footer-link flex items-center gap-2" href="tel:+250788451473"><FooterIcon name="phone" />+250-788-451-473</a>
                    <a className="footer-link flex items-center gap-2" href="tel:+250788986911"><FooterIcon name="phone" />+250-788-986-911</a>
                    <span className="flex items-center gap-2"><FooterIcon name="location" />Remera, Gasabo District, Kigali City, Rwanda</span>
                    <h4 className="footer-heading mt-3">{t("footer.followUs")}</h4>
                    <a className="footer-link flex items-center gap-2" href="https://www.instagram.com/rootsandshoots.rw" target="_blank" rel="noopener noreferrer"><FooterIcon name="instagram" />Instagram</a>
                    <a className="footer-link flex items-center gap-2" href="https://www.youtube.com/@Roots_and_Shoots_Rwanda" target="_blank" rel="noopener noreferrer"><FooterIcon name="youtube" />YouTube</a>
                    <a className="footer-link flex items-center gap-2" href="https://x.com/RwandaRoots" target="_blank" rel="noopener noreferrer"><FooterIcon name="x" />X</a>
                  </div>
                </div>
                <div>
                  <h3 className="footer-heading">{t("footer.getInvolved")}</h3>
                  <p className="mt-5 text-sm leading-6 text-white/65">{t("footer.involvementText")}</p>
                  <a href={rootsAndShootsLinks.contact} className="button-lime mt-5">
                    {t("footer.message")} <ArrowIcon diagonal />
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
                <p>{t("footer.rights").replace("{year}", new Date().getFullYear())}</p>
                <p>{t("footer.madeWithCare")}</p>
              </div>
            </div>
          </footer>
        </div>
      );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const targetId = decodeURIComponent(location.hash.slice(1));
    requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView());
  }, [location.pathname, location.hash]);

  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </LanguageProvider>
  );
}
