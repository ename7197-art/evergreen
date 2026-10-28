import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import SiteNavigation from "../components/SiteNavigation";
import { useLanguage } from "../i18n";
import { getEvergreenProjects } from "../data/projects";

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const { language, t } = useLanguage();
  const evergreenProjects = useMemo(() => getEvergreenProjects(language), [language]);
  const project = evergreenProjects.find((item) =>
    String(item.id) === projectId ||
    item.slug === projectId ||
    (item.slug && projectId.startsWith(`${item.slug}-`))
  );

  const projectTitle = project?.title ?? t("projects.detail.title");
  const description = project?.description || t("projects.detail.description");
  const features = project?.features ?? [];
  const galleryImages = project?.galleryImages ?? [];
  const backLabel = t("projects.detail.back");

  return (
    <div className="min-h-screen bg-cream-50 text-forest-950">
      <SiteNavigation />
      <main>
        {!project ? (
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
            <p className="text-red-700" role="alert">{t("projects.detail.notFound")}</p>
            <Link className="text-link mt-6" to="/projects">{backLabel}</Link>
          </div>
        ) : (
          <>
            <section className="mx-auto max-w-7xl px-5 pb-12 pt-12 sm:px-8 sm:pb-16 lg:px-12">
              <Link className="text-link" to="/projects">← {backLabel}</Link>
              <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="eyebrow text-forest-600">{t("projects.eyebrow")}</p>
                  </div>
                  <h1 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
                    {projectTitle}
                  </h1>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">{description}</p>
                  {project?.created_at && (
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-forest-600">
                      {new Intl.DateTimeFormat(language === "rw" ? "rw-RW" : "en", {
                        dateStyle: "long",
                      }).format(new Date(project.created_at))}
                    </p>
                  )}
                </div>
                <img
                  className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl"
                  src={project.image}
                  alt={projectTitle}
                />
              </div>
            </section>

            {features.length > 0 && (
              <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 lg:px-12">
                <h2 className="font-display text-2xl font-semibold">
                  {project?.featuresTitle ?? t("projects.featuresTitle")}
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature) => (
                    <article key={feature.title} className="rounded-[1.5rem] border border-forest-950/10 bg-white p-5 shadow-sm">
                      <h3 className="font-display text-lg font-semibold text-forest-950">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {galleryImages.length > 0 && (
              <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-12">
                <div className="mb-7 max-w-2xl">
                  <p className="eyebrow text-forest-600">{t("projects.eyebrow")}</p>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                    {t("projects.detail.gallery")}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                    {t("projects.detail.galleryDescription")}
                  </p>
                </div>
                <div className="project-story-grid">
                  {galleryImages.map((photo) => (
                    <figure key={photo.src} className="project-story-card group">
                      <div className="project-story-image-wrap">
                        <img
                          src={photo.src}
                          alt={photo.title}
                          className="project-story-image"
                          loading="lazy"
                        />
                        <span className="project-story-number">
                          {String(photo.number).padStart(2, "0")}
                        </span>
                      </div>
                      <figcaption className="p-5">
                        <h3 className="font-display text-lg font-semibold leading-snug text-forest-950">
                          {photo.title}
                        </h3>
                        {photo.description && (
                          <p className="mt-2 text-sm leading-6 text-slate-600">{photo.description}</p>
                        )}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </main>
    </div>
  );
}
