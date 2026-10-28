import { Link } from "react-router-dom";
import SiteNavigation from "../components/SiteNavigation";
import { useLanguage } from "../i18n";
import { getEvergreenProjects } from "../data/projects";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m6 6-6-6 6-6" />
    </svg>
  );
}

function EvergreenProjectCard({ project, index, t }) {
  return (
    <article className="project-card flex flex-col">
      <Link
        to={`/projects/${project.slug}`}
        className="relative block overflow-hidden"
        aria-label={`${t("projects.learnMore")}: ${project.title}`}
      >
        <img className="project-image" src={project.image} alt={project.title} loading="lazy" />
        <span className="absolute left-5 top-5 rounded-full bg-forest-950/75 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-lime-200">
          {project.category}
        </span>
        <span className="absolute bottom-4 right-5 font-display text-4xl text-white/90">
          {String(index + 1).padStart(2, "0")}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lime-200/80 text-xl" aria-hidden="true">
            {project.icon}
          </span>
          <h2 className="font-display text-xl font-semibold leading-snug text-forest-950">{project.title}</h2>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
        <Link to={`/projects/${project.slug}`} className="text-link mt-auto pt-5">
          {t("projects.learnMore")}
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const { language, t } = useLanguage();
  const evergreen = getEvergreenProjects(language);

  return (
    <div className="projects-page min-h-screen">
      <SiteNavigation />
      <main>
        <section className="px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-12">
          <div className="mx-auto mb-6 max-w-7xl">
            <Link to="/" className="text-link">
              <BackIcon />
              {t("common.backHome")}
            </Link>
          </div>
          <div className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-forest-950 shadow-xl lg:min-h-[390px] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10 flex flex-col justify-center px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
              <p className="eyebrow text-lime-300">{t("projects.eyebrow")}</p>
              <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight text-white sm:text-6xl">
                {t("projects.title")}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/75">{t("projects.description")}</p>
              <div className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-lime-200">
                <span className="h-px w-10 bg-lime-300" />
                {t("projects.communityAction")}
              </div>
            </div>
            <div className="relative min-h-[240px] lg:min-h-full">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="/projects/roots-and-shoots/roots-and-shoots-28.jpeg"
                alt={language === "rw"
                  ? "Abanyeshuri n’abakorerabushake bafatanyije mu busitani bwo ku ishuri"
                  : "Students and volunteers working together in a school garden"}
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/30 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-forest-950/10 lg:to-forest-950/35" />
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-7xl">
            <p className="eyebrow text-forest-600">{t("projects.evergreenEyebrow")}</p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight text-forest-950 sm:text-4xl">
              {t("projects.evergreenTitle")}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">{t("projects.evergreenDescription")}</p>
          </div>

          <div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
            {evergreen.map((project, index) => (
              <EvergreenProjectCard key={project.slug} project={project} index={index} t={t} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
