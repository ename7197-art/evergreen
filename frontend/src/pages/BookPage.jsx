import { Link } from "react-router-dom";
import SiteNavigation from "../components/SiteNavigation";
import { getBookPhotos, getBookSummaries } from "../data/book";
import { useLanguage } from "../i18n";

export default function BookPage() {
  const { language, t } = useLanguage();
  const photos = getBookPhotos(language);
  const summaries = getBookSummaries(language);

  return (
    <div className="min-h-screen bg-cream-50 text-forest-950">
      <SiteNavigation />

      <main className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <section className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-forest-600">{t("book.eyebrow")}</p>
          <h1 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight text-forest-950 sm:text-6xl">
            {t("book.title")}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {t("book.summariesDescription")}
          </p>
        </section>

        <section aria-labelledby="book-summaries-heading" className="mx-auto mt-12 max-w-5xl sm:mt-16">
          <div className="mb-6 text-center">
            <h2
              id="book-summaries-heading"
              className="font-display text-3xl font-medium tracking-tight text-forest-950 sm:text-4xl"
            >
              {t("book.summariesTitle")}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {summaries.map((summary) => (
              <article
                key={summary.id}
                className="rounded-2xl border border-forest-950/10 bg-white/80 p-5 shadow-sm sm:p-6"
              >
                <h3 className="font-display text-xl font-medium leading-snug text-forest-800">
                  {summary.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{summary.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-label={t("book.galleryLabel")}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {photos.map((photo, index) => (
            <figure
              key={photo.id}
              className="relative overflow-hidden rounded-3xl border border-forest-950/10 bg-white shadow-lg"
            >
              <img
                className="aspect-[3/4] w-full object-cover"
                src={photo.src}
                alt={photo.alt}
                loading={index === 0 ? "eager" : "lazy"}
              />
              {photo.featured && (
                <span className="absolute left-4 top-4 rounded-full bg-lime-300 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-forest-950">
                  {t("book.featured")}
                </span>
              )}
              <figcaption className="px-5 py-4 text-sm text-slate-600 sm:px-6">{photo.caption}</figcaption>
            </figure>
          ))}
        </section>

        {photos.length === 0 && (
          <p className="mt-12 text-center text-sm text-slate-600">{t("book.empty")}</p>
        )}

        <div className="mt-12 flex justify-center">
          <Link to="/" className="text-link">
            {t("common.backHome")}
          </Link>
        </div>
      </main>

      <footer className="bg-forest-950 px-5 py-6 text-center text-xs text-white/55 sm:px-8">
        {t("book.footer").replace("{year}", new Date().getFullYear())}
      </footer>
    </div>
  );
}
